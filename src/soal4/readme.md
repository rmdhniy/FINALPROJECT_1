
#Fungsi hitungRataRata
function hitungRataRata(nilai1: number, nilai2: number, nilai3: number, nilai4: number): number {
  return (nilai1 + nilai2 + nilai3 + nilai4) / 4;
}

#Fungsi tentukanGrade
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

Fungsi ini menerima nilai rata-rata sebagai parameter dan mengembalikan grade berdasarkan kriteria berikut:

    A: 90 - 100
    B: 80 - 89
    C: 70 - 79
    D: 60 - 69
    E: < 60

    outputnya ada di ts
