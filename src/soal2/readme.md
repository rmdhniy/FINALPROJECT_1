Untuk memperbarui artis dan judul lagu, kode menggunakan operator penyebaran untuk membuat objek baru dengan nilai yang dimodifikasi:

let updatedLirikLagu = {
    ...lirik_lagu,
    data: {
        ...lirik_lagu.data,
        artist: "yudo",
        songTitle: "kapal lawd"
    }
};

console.log(updatedLirikLagu);

Kode ini membuat objek baru updatedLirikLagu yang mempertahankan semua properti dari lirik_lagu tetapi memperbarui artist menjadi "yudo" dan songTitle menjadi "kapal lawd".

#2

Kode mencari lirik tertentu dalam array songLyricsArr menggunakan metode find:

code :

let specificLyric = lirik_lagu.data.songLyricsArr.find(lyric => lyric === "For me to take what's mine, until the end of time?");

console.log(specificLyric);

Baris ini mencari lirik "For me to take what's mine, until the end of time?" dalam array songLyricsArr dan menetapkan hasilnya ke variabel specificLyric.
