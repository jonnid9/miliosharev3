// /api/admin.js
// Server function ini jalan di server Vercel, BUKAN di browser.
// Kode akses & SUPABASE_SERVICE_ROLE_KEY disimpan di Environment Variables
// Vercel, jadi tidak pernah terkirim ke browser / tidak bisa dibaca lewat F12.

const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { passcode, action, payload, key } = req.body || {};

    // 1. Validasi kode akses di server (BUKAN di browser)
    if (!passcode || passcode !== process.env.ADMIN_PASSCODE) {
        return res.status(401).json({ error: 'Kode akses salah.' });
    }

    try {
        if (action === 'save') {
            if (!payload || !payload.key || !payload.title || !payload.name) {
                return res.status(400).json({ error: 'Data paket tidak lengkap.' });
            }
            const { error } = await supabaseAdmin
                .from('paket_templates')
                .upsert(payload, { onConflict: 'key' });

            if (error) return res.status(500).json({ error: error.message });
            return res.status(200).json({ success: true });

        } else if (action === 'delete') {
            if (!key) {
                return res.status(400).json({ error: 'Key paket tidak ada.' });
            }
            const { error } = await supabaseAdmin
                .from('paket_templates')
                .delete()
                .eq('key', key);

            if (error) return res.status(500).json({ error: error.message });
            return res.status(200).json({ success: true });

        } else {
            return res.status(400).json({ error: 'Action tidak dikenal.' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Server error' });
    }
};
