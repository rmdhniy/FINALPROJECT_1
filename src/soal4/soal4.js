"use strict";
// Fungsi untuk menghitung rata-rata nilai
function hitungRataRata(nilai1, nilai2, nilai3, nilai4) {
    return (nilai1 + nilai2 + nilai3 + nilai4) / 4;
}
// Fungsi untuk menentukan grade berdasarkan nilai
function tentukanGrade(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return 'A';
    }
    else if (nilai >= 80 && nilai <= 89) {
        return 'B';
    }
    else if (nilai >= 70 && nilai <= 79) {
        return 'C';
    }
    else if (nilai >= 60 && nilai <= 69) {
        return 'D';
    }
    else {
        return 'E';
    }
}
// Fungsi utama
function main() {
    // Input nilai
    const nilaiPemrogamanWeb = 85;
    const nilaiPemrogamanKomputer = 90;
    const nilaiStatiska = 78;
    const nilaiSistemBasisData = 92;
    // Validasi input
    if (!nilaiPemrogamanWeb || !nilaiPemrogamanKomputer || !nilaiStatiska || !nilaiSistemBasisData) {
        console.log('Semua nilai harus diisi!');
        return;
    }
    // Hitung rata-rata nilai
    const rataRata = hitungRataRata(nilaiPemrogamanWeb, nilaiPemrogamanKomputer, nilaiStatiska, nilaiSistemBasisData);
    // Tentukan grade
    const grade = tentukanGrade(rataRata);
    // Tampilkan hasil
    console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}
main();
