// =====================================================
// MILIOLAB.AI — MILIO SHARE V5 (Supabase-driven, dynamic links & cred type)
// =====================================================

const SUPABASE_URL = "https://qxkrnkwapddyczbktfzk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hptilHcj8-JKBxa_5rX2Jw_6EQPboT8";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let packageData = {}; // keyed by paket key, populated from Supabase

function getFormattedDate(dateString) {
    if (!dateString) return "[TANGGAL_AKTIF]";
    const d = new Date(dateString);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

async function loadPackages() {
    const select = document.getElementById('paket');
    select.innerHTML = '<option>⏳ Memuat paket...</option>';

    const { data, error } = await sb
        .from('paket_templates')
        .select('*')
        .order('sort_order', { ascending: true });

    if (error) {
        select.innerHTML = '<option>⚠️ Gagal memuat paket</option>';
        showToast("Gagal konek ke database: " + error.message);
        console.error(error);
        return;
    }

    packageData = {};
    select.innerHTML = '';
    data.forEach(row => {
        packageData[row.key] = {
            category: row.category,       // 'private' | 'sharing'
            credType: row.cred_type,      // 'email_password' | 'kode_akses'
            title: row.title,
            name: row.name,
            body: row.body,
            links: row.links || [],       // [{name, url}]
            serverInfo: row.server_info,
            serverCount: row.server_count
        };
        const opt = document.createElement('option');
        opt.value = row.key;
        opt.textContent = row.title;
        select.appendChild(opt);
    });

    if (data.length > 0) {
        toggleFields();
    }
}

// Render field kredensial (Email+Password ATAU Kode Akses) sesuai cred_type
function renderCredentialFields(data) {
    const container = document.getElementById('credential-fields');
    if (data.credType === 'email_password') {
        container.innerHTML = `
            <div class="form-group">
                <label for="cred-email">Email:</label>
                <input type="email" id="cred-email" placeholder="email@gmail.com">
            </div>
            <div class="form-group">
                <label for="cred-password">Password:</label>
                <input type="text" id="cred-password" placeholder="password123">
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="form-group">
                <label for="cred-kodeakses">Kode Akses:</label>
                <input type="text" id="cred-kodeakses" placeholder="MILIO-XXXX-XXXX">
            </div>
        `;
    }
}

// Render field link dinamis (bisa 0, 1, atau berapa pun) sesuai data paket
function renderLinkFields(data) {
    const container = document.getElementById('links-fields');
    if (!data.links || data.links.length === 0) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = data.links.map((link, i) => `
        <div class="form-group">
            <label>${link.name}:</label>
            <input type="text" class="dyn-link-input" data-link-name="${link.name.replace(/"/g, '&quot;')}" value="${(link.url || '').replace(/"/g, '&quot;')}">
        </div>
    `).join('');
}

function toggleFields() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];
    if (!data) return;

    renderCredentialFields(data);
    renderLinkFields(data);

    document.getElementById('wa-pesan').value = `Om Milio Gaskan, Saya Mau Lanjut Langganan Paket ${data.title} Om...`;
}

function buildCredentialBlock(data) {
    if (data.credType === 'email_password') {
        const email = (document.getElementById('cred-email') || {}).value || "[EMAIL]";
        const password = (document.getElementById('cred-password') || {}).value || "[PASSWORD]";
        return `📧 Email :\n${email}\n🔑 Password :\n${password}\n`;
    } else {
        const kodeAkses = (document.getElementById('cred-kodeakses') || {}).value || "[KODE_AKSES]";
        return `🎟 Kode Akses :\n${kodeAkses}\n`;
    }
}

function buildLinksBlock() {
    const inputs = document.querySelectorAll('.dyn-link-input');
    if (inputs.length === 0) return '';
    let block = '';
    inputs.forEach(input => {
        const name = input.dataset.linkName;
        const url = input.value || '[LINK]';
        block += `🔗 ${name} :\n${url}\n\n`;
    });
    return block;
}

function generateTemplate() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];
    if (!data) {
        showToast("Paket belum dipilih / belum termuat.");
        return;
    }
    const rawTanggal = document.getElementById('tanggal').value;
    const tanggal = getFormattedDate(rawTanggal);

    const credentialBlock = buildCredentialBlock(data);
    const linksBlock = buildLinksBlock();

    let result = "";

    if (data.category === 'private') {
        result = `🎉 PENYERAHAN AKUN ${data.title} 🎉
Terima kasih sudah order di MILIOLAB.AI 💎
Berikut detail akun kamu:
━━━━━━━━━━━━━━━
🔐 DETAIL AKUN
${credentialBlock}${linksBlock}📦 Paket :
${data.name}
📅 Tanggal Aktif :
${tanggal}
🛡 Masa Aktif :
30 Hari
━━━━━━━━━━━━━━━
${data.body || ""}
━━━━━━━━━━━━━━━
🛠 SUPPORT & GARANSI
✅ Full Service
✅ Full Garansi
✅ Support Fast Respon
✅ Dibantu sampai bisa login
📲 OM MILIO
CHAT ADMIN DISINI:
https://wa.link/d3t9ge
━━━━━━━━━━━━━━━
💎 MILIOLAB.AI
Artificial Intelligence for Real Business Growth 🚀`;

    } else {
        result = `🔥 PENYERAHAN AKUN ${data.title} 🔥
Terima kasih sudah order di MILIOLAB.AI 💎
━━━━━━━━━━━━━━━━━━━━━━
⚠️ INFO PENTING
Ini adalah PAKET SHARING (AKUN BERBAGI), bukan akun private.
✔ Masih bisa UNLIMITED generate (VEO 3.1 – lower priority)
✔ Disarankan:
• Maksimal 2 output per generate
• Jika gagal → gunakan 1 output saja
━━━━━━━━━━━━━━━━━━━━━━
🧠 JIKA GAGAL GENERATE, CEK INI:
• Pastikan foto & prompt sudah sesuai
• Coba pindah server (${data.serverInfo || '-'})
• Gunakan internet stabil
• Close browser lalu login ulang
• Hindari spam generate berlebihan
━━━━━━━━━━━━━━━━━━━━━━
📱 BATAS DEVICE (WAJIB DIPATUHI)
• Maksimal 2 perangkat aktif
• Wajib logout perangkat lama sebelum login baru
❗ Karena ini paket sharing, pelanggaran device berisiko banned sistem tanpa garansi
━━━━━━━━━━━━━━━━━━━━━━
📦 DETAIL AKUN & AKSES
${linksBlock}${credentialBlock}
📦 Paket:
${data.name}
📅 Tanggal Aktif:
${tanggal}
🛡 Masa Aktif:
30 Hari
━━━━━━━━━━━━━━━
⚙️ FITUR UTAMA
✅ ${data.serverCount || '-'} Server Google Flow
✅ Bonus Server Super Grok
✅ Bonus Chat GPT PLUS 1 Bulan
✅ Bebas pindah server sesuai kondisi
✅ Multi Jalur Generate
━━━━━━━━━━━━━━━
⚠️ KEBIJAKAN PEMBELIAN
• Tidak dapat refund setelah pembelian
• Paket sharing performa bisa fluktuatif
• Jika ada kendala mohon bersabar
• Tim akan berusaha maksimal memperbaiki secepat mungkin
━━━━━━━━━━━━━━━
🎥 PENTING
Pastikan menonton tutorial sampai selesai agar tidak terjadi kesalahan penggunaan.
━━━━━━━━━━━━━━━
🛠 SUPPORT & GARANSI
✅ Full Service
✅ Full Garansi
✅ Support Fast Respon
✅ Dibantu sampai berhasil install
📲 OM MILIO
CHAT ADMIN DISINI:
https://wa.link/d3t9ge
━━━━━━━━━━━━━━━
💎 MILIOLAB.AI
Artificial Intelligence for Real Business Growth 🚀`;
    }

    document.getElementById('result').value = result;
    saveToHistory(data.title, result);
}

function copyToClipboard(elementId) {
    const el = document.getElementById(elementId);
    if (el.value.trim() === "") return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(el.value)
            .then(() => showToast("Disalin ke Clipboard! ✅"))
            .catch(() => fallbackCopy(el));
    } else {
        fallbackCopy(el);
    }
}

function fallbackCopy(el) {
    el.select();
    document.execCommand('copy');
    showToast("Disalin ke Clipboard! ✅");
}

function generateWaLink() {
    let code = document.getElementById('wa-code').value;
    let phone = document.getElementById('wa-phone').value.trim();
    let text = document.getElementById('wa-pesan').value;

    if (!phone) {
        showToast("Masukkan nomor HP dulu!");
        return;
    }

    if (phone.startsWith('0')) {
        phone = phone.substring(1);
    }

    let url = `https://wa.me/${code}${phone}?text=${encodeURIComponent(text)}`;
    document.getElementById('wa-result').value = url;
    showToast("Link WA Berhasil Dibuat! 🔗");
}

function insertLinkToTemplate() {
    const generatedLink = document.getElementById('wa-result').value;
    let templateText = document.getElementById('result').value;

    if (!generatedLink) {
        showToast("Generate link WA terlebih dahulu! ⚠️");
        return;
    }
    if (!templateText) {
        showToast("Generate teks template terlebih dahulu! ⚠️");
        return;
    }

    const waLinkRegex = /https:\/\/(wa\.link\/\w+|wa\.me\/\S+)/g;

    if (waLinkRegex.test(templateText)) {
        templateText = templateText.replace(waLinkRegex, generatedLink);
        document.getElementById('result').value = templateText;
        showToast("Link WA berhasil disematkan ke template! ✅");
    } else {
        showToast("Gagal: Link WA di template tidak ditemukan.");
    }
}

// ===== Riwayat Generate (localStorage, max 20 entri) =====
const HISTORY_KEY = "milioshare_history_v5";

function saveToHistory(paketTitle, text) {
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    history.unshift({
        paket: paketTitle,
        text: text,
        timestamp: new Date().toISOString()
    });
    history = history.slice(0, 20);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.className = "show";
    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}

// ===== PWA: register service worker + install prompt =====
let deferredInstallPrompt = null;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch(err => console.error('SW register gagal:', err));
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('install-btn');
    if (btn) btn.classList.remove('hidden');
});

function installApp() {
    if (!deferredInstallPrompt) {
        showToast("App sudah ter-install atau browser tidak mendukung install otomatis.");
        return;
    }
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(() => {
        deferredInstallPrompt = null;
        document.getElementById('install-btn').classList.add('hidden');
    });
}

window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('install-btn');
    if (btn) btn.classList.add('hidden');
    showToast("App berhasil di-install! 📲");
});

window.onload = function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    document.getElementById('tanggal').value = `${yyyy}-${mm}-${dd}`;

    loadPackages();
};
