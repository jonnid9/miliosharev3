const ADMIN_WA_LINK = "https://wa.link/d3t9ge";

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
${ADMIN_WA_LINK}

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

━━━━━━━━━━━━━━━━━━━━━━
⚙️ FITUR UTAMA

✅ {SERVER_COUNT} Server Google Flow
✅ Unlimited Generate VEO 3.1
✅ Bonus Super Grok Basic Access
✅ Bonus ChatGPT Plus Access
✅ Bebas pindah server sesuai kondisi
✅ PC / Laptop Support
✅ Android APK Support
✅ iOS Orion Browser Support

━━━━━━━━━━━━━━━━━━━━━━
⚠️ KEBIJAKAN PEMBELIAN

• Tidak dapat refund setelah pembelian
• Ini adalah paket sharing, performa bisa fluktuatif tergantung penggunaan
• Jika terjadi kendala, mohon bersabar
• Tim akan berusaha maksimal memperbaiki secepat mungkin

━━━━━━━━━━━━━━━━━━━━━━
🎥 PENTING

Pastikan menonton tutorial sampai selesai agar tidak terjadi kesalahan penggunaan.

━━━━━━━━━━━━━━━━━━━━━━
🛠 SUPPORT & GARANSI

✅ Full Service
✅ Full Garansi
✅ Support Fast Respon
✅ Dibantu sampai berhasil install

📲 OM MILIO
CHAT ADMIN DISINI:
${ADMIN_WA_LINK}

━━━━━━━━━━━━━━━━━━━━━━
💎 MILIOLAB.AI
Artificial Intelligence for Real Business Growth 🚀`
};

const RULES = `📌 RULES PEMAKAIAN

• Dilarang mengganti password/email
• Jangan login berlebihan di banyak device
• Dilarang share akun ke publik
• Gunakan dengan normal & wajar
• Garansi berlaku selama masa aktif apabila bukan karena human error user`;

const packageData = {
    seedance: {
        type: "private",
        title: "SEEDANCE 2.0 PREMIUM",
        name: "SEEDANCE 2.0 PREMIUM 1 BULAN",
        body: `🎁 BONUS AKTIF

✅ Happy Horse 15 Video
✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 15 Video Per Hari
⚡ Durasi 11–15 Detik / Video
🚀 Seedance 2.0 Premium AI
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    veo_basic: {
        type: "private",
        title: "GOOGLE FLOW VEO BASIC",
        name: "FLOW VEO 3.1 BASIC LITE MODE",
        body: `🎁 BONUS AKTIF

✅ Happy Horse 5 Video Per Hari
✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 40 Video Per Hari
⚡ Lite Mode Generate
🚀 Stabil Untuk Pemakaian Harian
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    veo_pro: {
        type: "private",
        title: "GOOGLE FLOW VEO PRO",
        name: "FLOW VEO 3.1 PRO FAST",
        body: `🎁 BONUS AKTIF

✅ Happy Horse 5 Video Per Hari
✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 60 Video Per Hari
⚡ VEO 3.1 Fast Generate
🆕 VEO OMNI STANDAR 20 Video Per Hari
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    veo_ultimate: {
        type: "private",
        title: "GOOGLE FLOW VEO ULTIMATE",
        name: "FLOW VEO 3.1 ULTIMATE FAST",
        body: `🎁 BONUS AKTIF

✅ Happy Horse 5 Video Per Hari
✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 Unlimited Fast + Quality 30 Video
🆕 VEO OMNI FLASH 20 Video Per Hari
⚡ Prioritas Server Premium
👑 Ultimate Performance
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    grok_basic: {
        type: "private",
        title: "SUPER GROK BASIC",
        name: "SUPER GROK BASIC",
        body: `🎁 BONUS AKTIF

✅ Happy Horse 5 Video
✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 50 Video Per Hari
✅ Deep Search AI
✅ Reasoning AI
✅ Image Generation
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    grok_ultimate: {
        type: "private",
        title: "SUPER GROK ULTIMATE",
        name: "SUPER GROK ULTIMATE",
        body: `🎁 BONUS AKTIF

✅ Happy Horse 15 Video
✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 Unlimited Generate
✅ Deep Search Premium
✅ Advanced Reasoning AI
✅ Premium Image Generation
✅ Prioritas Server
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    happy_horse: {
        type: "private",
        title: "HAPPY HORSE ULTIMATE",
        name: "HAPPY HORSE ULTIMATE",
        body: `🎁 BONUS AKTIF

✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎬 Unlimited Generate
⚡ Fast Generate
🚀 Premium Video AI
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    suno: {
        type: "private",
        title: "SUNO ULTIMATE UNLIMITED",
        name: "SUNO ULTIMATE UNLIMITED",
        body: `🎁 BONUS AKTIF

✅ GPT Image Unlimited
✅ Seedream Image Unlimited

━━━━━━━━━━━━━━━
📌 DETAIL PAKET

🎵 Unlimited Music Generate
🆕 Cloning Voice (Bisa Pakai Suara Sendiri)
🆕 Cover Music
🎙 AI Vocal Generator
🎹 Instrumental Music
🎧 Commercial Use Ready
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    kling_basic: {
        type: "private",
        title: "KLING MOTION CONTROL BASIC / ALL IN",
        name: "KLING MOTION CONTROL BASIC / ALL IN",
        body: `⚙️ SISTEM PAKET HARIAN

💳 Total Harian Mendapat 8x Generate
✅ 2x Generate V3.0 Standar
✅ 2x Generate V3.0 Pro
✅ 2x Generate V2.6 Standar
✅ 2x Generate V2.6 Pro

🎁 Bonus Harian Kredit 120

━━━━━━━━━━━━━━━
🎁 BONUS AKTIF

✅ Suno 2x Sehari
✅ Seedream Image Unlimited
✅ GPT Image Unlimited

📌 FITUR PREMIUM
✅ Generate Kling MC
✅ Generate VEO 3.1
✅ Generate Super Grok
✅ Generate Happy Horse
✅ Generate Seedance

━━━━━━━━━━━━━━━
${RULES}`
    },
    kling_pro: {
        type: "private",
        title: "KLING MOTION CONTROL PRO / ALL IN",
        name: "KLING MOTION CONTROL PRO / ALL IN",
        body: `⚙️ SISTEM PAKET HARIAN

💳 Total Harian Mendapat 14x Generate
✅ 4x Generate V3.0 Standar
✅ 3x Generate V3.0 Pro
✅ 4x Generate V2.6 Standar
✅ 3x Generate V2.6 Pro

🎁 Bonus Harian Kredit 200

━━━━━━━━━━━━━━━
🎁 BONUS AKTIF

✅ Suno 5x Sehari
✅ Seedream Image Unlimited
✅ GPT Image Unlimited

📌 FITUR PREMIUM
✅ Generate Kling MC
✅ Generate VEO 3.1
✅ Generate Super Grok
✅ Generate Happy Horse
✅ Generate Seedance

━━━━━━━━━━━━━━━
${RULES}`
    },
    kling_ultimate: {
        type: "private",
        title: "KLING MOTION CONTROL ULTIMATE / ALL IN",
        name: "KLING MOTION CONTROL ULTIMATE / ALL IN",
        body: `⚙️ SISTEM PAKET HARIAN

💳 Total Harian Mendapat 20x Generate
✅ 5x Generate V3.0 Standar
✅ 5x Generate V3.0 Pro
✅ 5x Generate V2.6 Standar
✅ 5x Generate V2.6 Pro

🎁 Bonus Harian Kredit 400

━━━━━━━━━━━━━━━
🎁 BONUS AKTIF

✅ Suno 10x Sehari
✅ Seedream Image Unlimited
✅ GPT Image Unlimited

📌 FITUR PREMIUM
✅ Generate Kling MC
✅ Generate VEO 3.1
✅ Generate Super Grok
✅ Generate Happy Horse
✅ Generate Seedance

━━━━━━━━━━━━━━━
${RULES}`
    },
    gpt: {
        type: "private",
        title: "CHATGPT PLUS PRIVATE",
        name: "CHATGPT PLUS PRIVATE",
        noLink: true,
        body: `📌 FITUR AKTIF

✅ GPT Plus Access
✅ GPT Image Generation
✅ Upload File & Document
✅ Faster Premium Response
✅ Advanced AI Features
✅ Create Custom GPT
📅 Aktif 30 Hari

━━━━━━━━━━━━━━━
${RULES}`
    },
    capcut: {
        type: "private",
        title: "CAPCUT PRO PRIVATE",
        name: "CAPCUT PRO PRIVATE",
        noLink: true,
        body: `📌 FITUR AKTIF

✅ Semua Fitur Pro Active
✅ Export Tanpa Watermark
✅ Premium Effect & Template
✅ Premium Font & Asset
✅ HD / 4K Export
✅ AI Editing Premium
📅 Aktif Sesuai Paket

━━━━━━━━━━━━━━━
${RULES}`
    },
    ext_basic: {
        type: "extension",
        title: "GOOGLE FLOW ULTRA VIP BASIC (EXTENSION)",
        name: "FLOW ULTRA VIP BASIC (EXTENSION)",
        serverInfo: "Server 1–3",
        serverCount: "3"
    },
    ext_pro: {
        type: "extension",
        title: "GOOGLE FLOW ULTRA VIP PRO (EXTENSION)",
        name: "FLOW ULTRA VIP PRO (EXTENSION)",
        serverInfo: "Server 1–5",
        serverCount: "5"
    },
    ext_ultimate: {
        type: "extension",
        title: "GOOGLE FLOW ULTRA VIP ULTIMATE (EXTENSION)",
        name: "FLOW ULTRA VIP ULTIMATE (EXTENSION)",
        serverInfo: "Server 1–7",
        serverCount: "7"
    }
};

function getFormattedDate(dateString) {
    if (!dateString) return "[TANGGAL_AKTIF]";
    const d = new Date(dateString);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function toggleFields() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];

    if (data.type === 'private') {
        document.getElementById('private-fields').classList.remove('hidden');
        document.getElementById('extension-fields').classList.add('hidden');

        if (data.noLink) {
            document.getElementById('field-link-akses').classList.add('hidden');
        } else {
            document.getElementById('field-link-akses').classList.remove('hidden');
        }
    } else {
        document.getElementById('private-fields').classList.add('hidden');
        document.getElementById('extension-fields').classList.remove('hidden');
    }

    document.getElementById('wa-pesan').value = `Om Milio Gaskan, Saya Mau Lanjut Langganan Paket ${data.title} Om...`;
}

function generateTemplate() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];
    const rawTanggal = document.getElementById('tanggal').value;
    const tanggal = getFormattedDate(rawTanggal);
    let result = "";

    if (data.type === 'private') {
        const email = document.getElementById('email').value || "[EMAIL]";
        const password = document.getElementById('password').value || "[PASSWORD]";
        let linkAksesStr = "";

        if (!data.noLink) {
            const linkAkses = document.getElementById('link-akses').value || "[LINK_AKSES]";
            linkAksesStr = `\n\n🔗 Link Akses :\n${linkAkses}`;
        }

        result = templates.private
            .replaceAll("{PAKET}", data.title)
            .replace("{EMAIL}", email)
            .replace("{PASSWORD}", password)
            .replace("{LINK_AKSES_SECTION}", linkAksesStr)
            .replace("{PAKET_NAME}", data.name)
            .replace("{TANGGAL}", tanggal)
            .replace("{BODY}", data.body);
    } else {
        const linkExt = document.getElementById('link-ext').value || "[LINK_EXTENSION]";
        const linkApk = document.getElementById('link-apk').value || "[LINK_APK]";
        const linkKiwi = document.getElementById('link-kiwi').value || "[LINK_KIWI]";
        const kodeAkses = document.getElementById('kode-akses').value || "[KODE_AKSES]";

        result = templates.extension
            .replaceAll("{PAKET}", data.title)
            .replaceAll("{SERVER_INFO}", data.serverInfo)
            .replace("{LINK_EXT}", linkExt)
            .replace("{LINK_APK}", linkApk)
            .replace("{LINK_KIWI}", linkKiwi)
            .replace("{KODE_AKSES}", kodeAkses)
            .replace("{PAKET_NAME}", data.name)
            .replace("{TANGGAL}", tanggal)
            .replace("{SERVER_COUNT}", data.serverCount);
    }

    document.getElementById('result').value = result;
}

function copyToClipboard(elementId) {
    const el = document.getElementById(elementId);
    if (el.value.trim() === "") return;
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
    if (phone.startsWith('0')) phone = phone.substring(1);

    const url = `https://wa.me/${code}${phone}?text=${encodeURIComponent(text)}`;
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

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

window.onload = function() {
    const linkExt = document.getElementById('link-ext');
    const linkApk = document.getElementById('link-apk');
    const linkKiwi = document.getElementById('link-kiwi');

    if (linkExt) linkExt.value = "https://tekno-apps.texaproject.com/downloads/";
    if (linkApk) linkApk.value = "https://www.dropbox.com/scl/fi/jyn8dczv934z4o495wxm9/Tekno_Apps_v6.0.0_release.apk?rlkey=lqttssgsllw87g364fi3ucrcc&st=vsve7ale&dl=1";
    if (linkKiwi) linkKiwi.value = "https://github.com/kiwibrowser/src.next/releases/download/14310011181/com.kiwibrowser.browser-arm64-14310011181-github.apk";

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    document.getElementById('tanggal').value = `${yyyy}-${mm}-${dd}`;
    toggleFields();
    generateTemplate();
};
