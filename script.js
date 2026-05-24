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
📱 IOS MOBILE → Browser ORION
📱 ANDROID → APK Terlampir
🔗 LINK EXTENSION
{LINK_EXT}
🔗 LINK APK ANDROID
{LINK_APK}
🔗 LINK KIWI BROWSER
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
✅ Bonus Server Super Grok
✅ Bonus Chat GPT PLUS 1 Bulan
✅ Bebas pindah server sesuai kondisi
✅ Multi Jalur Generate
━━━━━━━━━━━━━━━━━━━━━━
⚠️ KEBIJAKAN PEMBELIAN
• Tidak dapat refund setelah pembelian
• Paket sharing performa bisa fluktuatif
• Jika ada kendala mohon bersabar
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
https://wa.link/d3t9ge
━━━━━━━━━━━━━━━━━━━━━━
💎 MILIOLAB.AI
Artificial Intelligence for Real Business Growth 🚀`
};

const packageData = {
    "seedance": { type: "private", title: "SEEDANCE PRIVATE", name: "SEEDANCE PRIVATE 1 BULAN", body: "🎁 BONUS AKTIF\n✅ Happy Horse 15 Video\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "veo_basic": { type: "private", title: "GOOGLE FLOW VEO BASIC", name: "FLOW VEO 3.1 BASIC LITE MODE", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 40 Video Perhari\n⚡ Lite Mode Generate\n🚀 Stabil Untuk Pemakaian Harian\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "veo_pro": { type: "private", title: "GOOGLE FLOW VEO PRO", name: "FLOW VEO 3.1 PRO FAST", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 60 Video Perhari\n⚡ Fast Generate Mode\n🚀 Prioritas Render Lebih Cepat\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "veo_ultimate": { type: "private", title: "GOOGLE FLOW VEO ULTIMATE", name: "FLOW VEO 3.1 ULTIMATE FAST", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 Unlimited Fast Generate\n🎬 Quality Mode 30 Video\n⚡ Prioritas Render Premium\n🚀 Akses Ultimate Performance\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "grok_basic": { type: "private", title: "SUPER GROK BASIC", name: "SUPER GROK BASIC", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 30 Video Perhari\n⚡ Fast AI Generate\n🚀 Stabil Untuk Pemakaian Harian\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "grok_ultimate": { type: "private", title: "SUPER GROK ULTIMATE", name: "SUPER GROK ULTIMATE", body: "🎁 BONUS AKTIF\n✅ Happy Horse 15 Video\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 Unlimited Video Perhari\n⚡ Premium Fast Generate\n🚀 Prioritas AI Ultimate Performance\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "happy_horse": { type: "private", title: "HAPPY HORSE ULTIMATE", name: "HAPPY HORSE ULTIMATE", body: "🎁 BONUS AKTIF\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 Unlimited Video Generate\n⚡ Premium AI Performance\n🚀 Stabil Untuk Generate Harian\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "suno": { type: "private", title: "SUNO ULTIMATE", name: "SUNO ULTIMATE UNLIMITED", body: "🎁 BONUS AKTIF\n✅ GPT Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎵 Unlimited Music Generate\n⚡ Premium Fast Generate\n🚀 Cocok Untuk Musik AI Harian\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "gpt": { type: "private", title: "CHAT GPT PLUS PRIVATE", name: "CHAT GPT PLUS PRIVATE", noLink: true, body: "📌 FITUR AKTIF\n✅ GPT-4o Active\n✅ GPT Image Generation\n✅ Upload File & Document\n✅ Faster Premium Response\n✅ Advanced AI Features\n✅ Create Custom GPT\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti email/password\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "capcut": { type: "private", title: "CAPCUT PRO PRIVATE", name: "CAPCUT PRO PRIVATE", noLink: true, body: "📌 FITUR AKTIF\n✅ Semua Fitur Pro Active\n✅ Export Tanpa Watermark\n✅ Premium Effect & Template\n✅ Premium Font & Asset\n✅ HD / 4K Export\n✅ AI Editing Premium\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti email/password\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "ext_basic": { type: "extension", title: "GOOGLE FLOW ULTRA VIP BASIC (EXTENSION)", name: "FLOW ULTRA VIP BASIC (EXTENSION)", serverInfo: "Server 1–3", serverCount: "3" },
    "ext_pro": { type: "extension", title: "GOOGLE FLOW ULTRA VIP PRO (EXTENSION)", name: "FLOW ULTRA VIP PRO (EXTENSION)", serverInfo: "Server 1–5", serverCount: "5" },
    "ext_ultimate": { type: "extension", title: "GOOGLE FLOW ULTRA VIP ULTIMATE (EXTENSION)", name: "FLOW ULTRA VIP ULTIMATE (EXTENSION)", serverInfo: "Server 1–7", serverCount: "7" }
};

function toggleFields() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];
    
    if (data.type === 'private') {
        document.getElementById('private-fields').classList.remove('hidden');
        document.getElementById('extension-fields').classList.add('hidden');
        
        if(data.noLink) {
            document.getElementById('field-link-akses').classList.add('hidden');
        } else {
            document.getElementById('field-link-akses').classList.remove('hidden');
        }
    } else {
        document.getElementById('private-fields').classList.add('hidden');
        document.getElementById('extension-fields').classList.remove('hidden');
    }
}

function generateTemplate() {
    const val = document.getElementById('paket').value;
    const data = packageData[val];
    const tanggal = document.getElementById('tanggal').value || "[TANGGAL_AKTIF]";
    
    let result = "";

    if (data.type === 'private') {
        const email = document.getElementById('email').value || "[EMAIL]";
        const password = document.getElementById('password').value || "[PASSWORD]";
        
        let linkAksesStr = "";
        if(!data.noLink) {
            const linkAkses = document.getElementById('link-akses').value || "[LINK_AKSES]";
            linkAksesStr = `\n🔗 Link Akses :\n${linkAkses}`;
        }

        result = templates.private
            .replace("{PAKET}", data.title)
            .replace("{EMAIL}", email)
            .replace("{PASSWORD}", password)
            .replace("{LINK_AKSES_SECTION}", linkAksesStr)
            .replace("{PAKET_NAME}", data.name)
            .replace("{TANGGAL}", tanggal)
            .replace("{BODY}", data.body);

    } else {
        const linkExt = document.getElementById('link-ext').value || "[LINK_EXT]";
        const linkApk = document.getElementById('link-apk').value || "[LINK_APK]";
        const linkKiwi = document.getElementById('link-kiwi').value || "[LINK_KIWI]";
        const kodeAkses = document.getElementById('kode-akses').value || "[KODE_AKSES]";

        result = templates.extension
            .replace("{PAKET}", data.title)
            .replace("{SERVER_INFO}", data.serverInfo)
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

function copyToClipboard() {
    const textArea = document.getElementById('result');
    if(textArea.value.trim() === "") return;
    
    textArea.select();
    document.execCommand('copy');
    
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

// Inisialisasi layout saat pertama kali dimuat
window.onload = function() {
    toggleFields();
};