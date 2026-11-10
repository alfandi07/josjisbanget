const siswa = [
    { nama: "Alfandi", nis: "001" },
    { nama: "Putri", nis: "002" },
    { nama: "Kholis", nis: "003" }
];

function mulaiAbsensi() {
    document.getElementById("halamanAwal").style.display = "none";
    document.getElementById("halamanSiswa").style.display = "block";

    const daftar = document.getElementById("daftarSiswa");
    daftar.innerHTML = "";

    siswa.forEach(data => {
        daftar.innerHTML += `
            <div class="siswa">
                <h3>${data.nama}</h3>
                <p>NIS: ${data.nis}</p>
                <button onclick="tampilkanQR('${data.nama}', '${data.nis}')">
                    Tampilkan QR Code
                </button>
            </div>
        `;
    });
}

function tampilkanQR(nama, nis) {
    document.getElementById("halamanSiswa").style.display = "none";
    document.getElementById("halamanQR").style.display = "block";

    document.getElementById("namaSiswa").textContent = nama;
    document.getElementById("nisSiswa").textContent = "NIS: " + nis;

    const tempatQR = document.getElementById("kodeQR");
    tempatQR.innerHTML = "";

    new QRCode(tempatQR, {
        text: nis,
        width: 200,
        height: 200
    });
}

function kembali() {
    document.getElementById("halamanSiswa").style.display = "none";
    document.getElementById("halamanAwal").style.display = "block";
}

function kembaliKeSiswa() {
    document.getElementById("halamanQR").style.display = "none";
    document.getElementById("halamanSiswa").style.display = "block";
}
