// Membuat QR Code setiap siswa
new QRCode(document.getElementById("qr001"), {
    text: "001",
    width: 150,
    height: 150
});

new QRCode(document.getElementById("qr002"), {
    text: "002",
    width: 150,
    height: 150
});

new QRCode(document.getElementById("qr003"), {
    text: "003",
    width: 150,
    height: 150
});

// Mengunduh QR Code
function downloadQR(id, namaFile) {
    const qr = document.querySelector(#${id} img);

    if (qr) {
        const link = document.createElement("a");
        link.href = qr.src;
        link.download = namaFile + ".png";
        link.click();
    }
}
