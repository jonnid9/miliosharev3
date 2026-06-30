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

const packageData = {
    "seedance": { type: "private", title: "SEEDANCE PRIVATE", name: "SEEDANCE PRIVATE 1 BULAN", body: "🎁 BONUS AKTIF\n✅ Happy Horse 15 Video\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 15 Video Per Hari\n🎬 Durasi Up to 15 Detik Per Generate\n⚡ Seedance 2.0 Premium AI\n🚀 Fast Generate\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "veo_basic": { type: "private", title: "GOOGLE FLOW VEO BASIC", name: "FLOW VEO 3.1 BASIC LITE MODE", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video Per Hari\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 40 Video Per Hari\n⚡ Lite Mode Generate\n🚀 Stabil Untuk Pemakaian Harian\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "veo_pro": { type: "private", title: "GOOGLE FLOW VEO PRO", name: "FLOW VEO 3.1 PRO FAST", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video Per Hari\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 60 Video Per Hari\n⚡ VEO 3.1 Fast Generate\n🆕 VEO OMNI STANDAR 20 Video Per Hari\n🚀 Prioritas Render Lebih Cepat\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "veo_ultimate": { type: "private", title: "GOOGLE FLOW VEO ULTIMATE", name: "FLOW VEO 3.1 ULTIMATE FAST", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video Per Hari\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 Unlimited Fast Generate\n🎬 Quality Mode 30 Video\n🆕 VEO OMNI FLASH 20 Video Per Hari\n⚡ Prioritas Server Premium\n🚀 Akses Ultimate Performance\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "grok_basic": { type: "private", title: "SUPER GROK BASIC", name: "SUPER GROK BASIC", body: "🎁 BONUS AKTIF\n✅ Happy Horse 5 Video\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 50 Video Per Hari\n    - Durasi 6s (720p)\n    - Durasi 10s (480p)\n⚡ Deep Search AI\n🚀 Reasoning AI\n✅ Image Generation\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "grok_ultimate": { type: "private", title: "SUPER GROK ULTIMATE", name: "SUPER GROK ULTIMATE", body: "🎁 BONUS AKTIF\n✅ Happy Horse 15 Video\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n✅ SUPER GROK IMAGINE 1.5 (10 Video Perhari)\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 Unlimited Video Per Hari\n   - Durasi 6s (480p-720p)\n   - Durasi 10s (480p-720p)\n⚡ Deep Search Premium\n🚀 Advanced Reasoning AI\n✅ Premium Image Generation\n✅ Prioritas Server\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "happy_horse": { type: "private", title: "HAPPY HORSE 1.1 ULTIMATE", name: "HAPPY HORSE ULTIMATE", body: "🎁 BONUS AKTIF\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎬 Unlimited Video Generate\n⚡ Premium AI Performance\n🚀 Stabil Untuk Generate Harian\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "suno": { type: "private", title: "SUNO ULTIMATE", name: "SUNO ULTIMATE UNLIMITED", body: "🎁 BONUS AKTIF\n✅ GPT 2 Image Unlimited\n✅ Seedream Image Unlimited\n━━━━━━━━━━━━━━━\n📌 DETAIL PAKET\n🎵 Unlimited Music Generate\n🆕 Cloning Voice (Bisa Pakai Suara Sendiri)\n🆕 Cover Music\n🎙 AI Vocal Generator\n🎹 Instrumental Music\n🎧 Commercial Use Ready\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "kling_basic": { type: "private", title: "KLING MOTION CONTROL 2.6 BASIC", name: "KLING MOTION CONTROL BASIC 2.6", body: "⚙️ SISTEM PAKET HARIAN\n💳 Total Harian Mendapat 10x Generate\n✅ 6x Generate V2.6 Standar\n✅ 4x Generate V2.6 Pro\n━━━━━━━━━━━━━━━\n🎁 BONUS AKTIF\n✅ Suno 2x Sehari\n✅ Seedream Image Unlimited\n✅ GPT 2 Image Unlimited\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "kling_pro": { type: "private", title: "KLING MOTION CONTROL 2.6 PRO", name: "KLING MOTION CONTROL 2.6 PRO", body: "⚙️ SISTEM PAKET HARIAN\n💳 Total Harian Mendapat 15x + 3x Generate\n✅ 10x Generate V2.6 Standar\n✅ 5x Generate V2.6 Pro\n🎁 Bonus Harian Bisa Generate 3x Versi Kling MC 3.0\n━━━━━━━━━━━━━━━\n🎁 BONUS AKTIF\n✅ Suno 5x Sehari\n✅ Seedream Image Unlimited\n✅ GPT 2 Image Unlimited\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "kling_ultimate": { type: "private", title: "KLING MOTION CONTROL ULTIMATE", name: "KLING MOTION CONTROL 2.6 ULTIMATE", body: "⚙️ SISTEM PAKET HARIAN\n💳 Total Harian Mendapat 30x Generate\n✅ 20x Generate V2.6 Standar\n✅ 10x Generate V2.6 Pro\n🎁 Bonus Harian Bisa Generate 5x Versi Kling MC 3.0\n━━━━━━━━━━━━━━━\n🎁 BONUS AKTIF\n✅ Suno 10x Sehari\n✅ Seedream Image Unlimited\n✅ GPT 2 Image Unlimited\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti password/email\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "gpt": { type: "private", title: "CHAT GPT PLUS PRIVATE", name: "CHAT GPT PLUS PRIVATE", noLink: true, body: "📌 FITUR AKTIF\n✅ GPT Plus Access\n✅ GPT-4o / GPT-4.5 Access\n✅ GPT Image Generation\n✅ DALL·E 3 Access\n✅ Upload File & Document\n✅ Fast Response\n✅ Advanced AI Features\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti email/password\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "capcut": { type: "private", title: "CAPCUT PRO PRIVATE", name: "CAPCUT PRO PRIVATE", noLink: true, body: "📌 FITUR AKTIF\n✅ Semua Fitur Pro Active\n✅ Export Tanpa Watermark\n✅ Premium Effect & Template\n✅ Premium Font & Asset\n✅ HD / 4K Export\n✅ AI Editing Premium\n━━━━━━━━━━━━━━━\n📌 RULES PEMAKAIAN\n• Dilarang mengganti email/password\n• Jangan login berlebihan di banyak device\n• Dilarang share akun ke publik\n• Gunakan dengan normal & wajar\n• Garansi berlaku selama masa aktif apabila bukan karena human error user" },
    "ext_basic": { type: "extension", title: "GOOGLE FLOW ULTRA VIP BASIC", name: "FLOW ULTRA VIP BASIC (EXTENSION)", serverInfo: "Server 1–3", serverCount: "3" },
    "ext_pro": { type: "extension", title: "GOOGLE FLOW ULTRA VIP PRO", name: "FLOW ULTRA VIP PRO (EXTENSION)", serverInfo: "Server 1–5", serverCount: "5" },
    "ext_ultimate": { type: "extension", title: "GOOGLE FLOW ULTRA VIP ULTIMATE", name: "FLOW ULTRA VIP ULTIMATE (EXTENSION)", serverInfo: "Server 1–7", serverCount: "7" }
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
        
        if(data.noLink) {
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
        if(!data.noLink) {
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
            .replace("{BODY}", data.body);

    } else {
        const linkExt = document.getElementById('link-ext').value;
        const linkApk = document.getElementById('link-apk').value;
        const linkKiwi = document.getElementById('link-kiwi').value;
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

function copyToClipboard(elementId) {
    const el = document.getElementById(elementId);
    if(el.value.trim() === "") return;
    
    el.select();
    document.execCommand('copy');
    showToast("Disalin ke Clipboard! ✅");
}

function generateWaLink() {
    let code = document.getElementById('wa-code').value;
    let phone = document.getElementById('wa-phone').value.trim();
    let text = document.getElementById('wa-pesan').value;
    
    if(!phone) {
        showToast("Masukkan nomor HP dulu!");
        return;
    }

    if(phone.startsWith('0')) {
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

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

window.onload = function() {
    toggleFields();
    
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    document.getElementById('tanggal').value = `${yyyy}-${mm}-${dd}`;
};