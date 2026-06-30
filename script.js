// =====================================================
// MILIOLAB.AI — MILIO SHARE V4 (Supabase-driven)
// =====================================================

const SUPABASE_URL = "https://qxkrnkwapddyczbktfzk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hptilHcj8-JKBxa_5rX2Jw_6EQPboT8";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let packageData = {}; // keyed by paket key, populated from Supabase

const templates = {
    private: `🎉 PENYERAHAN AKUN {PAKET} 🎉
Terima kasih sudah order di MILIOLAB.AI 💎
Berikut detail akun kamu:
━━━━━━━━━━━━━━━
🔐 DETAIL AKUN
📧 Email :
{EMAIL}
🔑 Password :
{PASSWORD}{LINK_AKSES_SECTION}
📦 Paket :
{PAKET_NAME}
📅 Tanggal Aktif :
{TANGGAL}
🛡 Masa Aktif :
30 Hari
━━━━━━━━━━━━━━━
{BODY}
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
Artificial Intelligence for Real Business Growth 🚀`,

    extension: `🔥 PENYERAHAN AKUN {PAKET} 🔥
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
• Coba pindah server ({SERVER_INFO})
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
🔗 Link Extension UNTUK PENGGUNA LAPTOP/PC/IOS ORION BROWSER (Sekali Klik Langsung Ter-Download):
{LINK_EXT}

🔗 Link APK ANDROID UNTUK PENGGUNA ANDROID (Sekali Klik Langsung Ter-Download, cari filenya dan instal):
{LINK_APK}

🔗 Link KIWI BROWSER (Alternatif untuk Device Android):
{LINK_KIWI}

🎟 Kode Akses:
{KODE_AKSES}

📦 Paket:
{PAKET_NAME}
📅 Tanggal Aktif:
{TANGGAL}
🛡 Masa Aktif:
30 Hari
━━━━━━━━━━━━━━━
⚙️ FITUR UTAMA
✅ {SERVER_COUNT} Server Google Flow
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
Artificial Intelligence for Real Business Growth 🚀`
};

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
            type: row.type,
            title: row.title,
            name: row.name,
            body: row.body,
            noLink: row.no_link,
            linkAkses: row.link_akses,
            serverInfo: row.server_info,
            serverCount: row.server_count,
            linkExt: row.link_ext,
            linkApk: row.link_apk,
            linkKiwi: row.link_kiwi
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

function toggleFields() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];
    if (!data) return;

    if (data.type === 'private') {
        document.getElementById('private-fields').classList.remove('hidden');
        document.getElementById('extension-fields').classList.add('hidden');

        if (data.noLink) {
            document.getElementById('field-link-akses').classList.add('hidden');
        } else {
            document.getElementById('field-link-akses').classList.remove('hidden');
            document.getElementById('link-akses').value = data.linkAkses || '';
        }
    } else {
        document.getElementById('private-fields').classList.add('hidden');
        document.getElementById('extension-fields').classList.remove('hidden');

        document.getElementById('link-ext').value = data.linkExt || '';
        document.getElementById('link-apk').value = data.linkApk || '';
        document.getElementById('link-kiwi').value = data.linkKiwi || '';
    }

    document.getElementById('wa-pesan').value = `Om Milio Gaskan, Saya Mau Lanjut Langganan Paket ${data.title} Om...`;
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

    let result = "";

    if (data.type === 'private') {
        const email = document.getElementById('email').value || "[EMAIL]";
        const password = document.getElementById('password').value || "[PASSWORD]";

        let linkAksesStr = "";
        if (!data.noLink) {
            const linkAkses = document.getElementById('link-akses').value;
            linkAksesStr = `\n🔗 Link Akses :\n${linkAkses}`;
        }

        result = templates.private
            .replace("{PAKET}", data.title)
            .replace("{EMAIL}", email)
            .replace("{PASSWORD}", password)
            .replace("{LINK_AKSES_SECTION}", linkAksesStr)
            .replace("{PAKET_NAME}", data.name)
            .replace("{TANGGAL}", tanggal)
            .replace("{BODY}", data.body || "");

    } else {
        const linkExt = document.getElementById('link-ext').value;
        const linkApk = document.getElementById('link-apk').value;
        const linkKiwi = document.getElementById('link-kiwi').value;
        const kodeAkses = document.getElementById('kode-akses').value || "[KODE_AKSES]";

        result = templates.extension
            .replace("{PAKET}", data.title)
            .replace("{SERVER_INFO}", data.serverInfo || "")
            .replace("{LINK_EXT}", linkExt)
            .replace("{LINK_APK}", linkApk)
            .replace("{LINK_KIWI}", linkKiwi)
            .replace("{KODE_AKSES}", kodeAkses)
            .replace("{PAKET_NAME}", data.name)
            .replace("{TANGGAL}", tanggal)
            .replace("{SERVER_COUNT}", data.serverCount || "");
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
const HISTORY_KEY = "milioshare_history_v4";

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
