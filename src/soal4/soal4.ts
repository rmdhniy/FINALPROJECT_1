// Fungsi untuk menghitung rata-rata nilai
function hitungRataRata(nilai1: number, nilai2: number, nilai3: number, nilai4: number): number {
    return (nilai1 + nilai2 + nilai3 + nilai4) / 4;
  }
  
  // Fungsi untuk menentukan grade berdasarkan nilai
  function tentukanGrade(nilai: number): string {
    if (nilai >= 90 && nilai <= 100) {
      return 'A';
    } else if (nilai >= 80 && nilai <= 89) {
      return 'B';
    } else if (nilai >= 70 && nilai <= 79) {
      return 'C';
    } else if (nilai >= 60 && nilai <= 69) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  // Fungsi utama
  function main(): void {
    // Input nilai
    const nilaiPemrogamanWeb: number = 85;
    const nilaiPemrogamanKomputer: number = 90;
    const nilaiStatiska: number = 78;
    const nilaiSistemBasisData: number = 92;
  
    // Validasi input
    if (!nilaiPemrogamanWeb || !nilaiPemrogamanKomputer || !nilaiStatiska || !nilaiSistemBasisData) {
      console.log('Semua nilai harus diisi!');
      return;
    }
  
    // Hitung rata-rata nilai
    const rataRata: number = hitungRataRata(nilaiPemrogamanWeb, nilaiPemrogamanKomputer, nilaiStatiska, nilaiSistemBasisData);
  
    // Tentukan grade
    const grade: string = tentukanGrade(rataRata);
  
    // Tampilkan hasil
    console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
  }
  
  main();