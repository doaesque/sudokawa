# 🌸 Sudoku Solver & Game

Aplikasi web Sudoku interaktif yang dibangun menggunakan **React** dan **Vite**. Proyek ini tidak hanya memungkinkan pengguna untuk bermain Sudoku, tetapi juga memvisualisasikan algoritma *Backtracking* untuk menyelesaikan teka-teki secara otomatis.

![Sudoku Preview](./public/preview.png)

## ✨ Fitur Utama

### 🎮 Gameplay
* **3 Tingkat Kesulitan:** Pilih level **Easy**, **Medium**, atau **Hard** dengan database soal yang bervariasi.
* **Input Validasi:** Input angka dibatasi 1-9 dan mencegah input karakter non-angka.

### 🧠 Solver & Bantuan (AI)
* **Auto Solve:** Visualisasi algoritma *Recursive Backtracking* yang menyelesaikan papan langkah demi langkah (animasi Trial & Backtrack).
* **Solve Cell:** Bingung di satu kotak? Fitur ini akan mengisikan jawaban yang benar hanya untuk kotak yang dipilih.
* **Hint (Pencil Marks):** Menampilkan kandidat angka kecil (pencil marks) di setiap kotak kosong secara otomatis. Fitur ini cerdas dan akan update setiap kali user mengisi angka.
* **Check:** Memvalidasi jawaban user. Menandai kotak dengan warna merah jika ada angka yang salah atau melanggar aturan Sudoku.

### 🎨 User Interface
* **Clean & Responsive Design:** Tampilan modern dengan tema warna Pink/Pastel.
* **Interactive Controls:** Slider pengatur kecepatan animasi solver (Kura-kura vs Kelinci).
* **Info Panel:** Status bar interaktif yang memberikan feedback (Error, Success, Loading).

## 🛠️ Teknologi yang Digunakan

* **Frontend:** [React.js](https://reactjs.org/) (Vite)
* **Styling:** CSS3 (Custom Properties & Flexbox/Grid)
* **State Management:** React Hooks (`useState`, `useEffect`, `useRef`, dan **Custom Hook** `useSudokuGame`)
* **Algorithm:** Recursive Backtracking untuk penyelesaian Sudoku.

## 📂 Struktur Proyek

Proyek ini menggunakan arsitektur yang bersih dan modular:

```text
src/
├── components/       # Komponen UI (Tampilan)
│   ├── Sidebar.jsx       # Tombol kontrol (Solve, Reset, Level)
│   ├── SudokuGrid.jsx    # Papan permainan & Input cell
│   ├── InfoPanel.jsx     # Panel status & Legend warna
│   └── TeamModal.jsx     # Modal kredit tim
├── hooks/            # Logic & State Management
│   └── useSudokuGame.js  # Custom hook (Otak dari aplikasi)
├── logic/            # Algoritma Murni (Tanpa React)
│   ├── sudokuSolver.js   # Algoritma Backtracking
│   └── validator.js      # Logika validasi aturan Sudoku
├── data/             # Database Soal
│   └── samples.js        # Array soal Easy/Medium/Hard
├── App.jsx           # Main Layout & Integration
└── App.css           # Global Styling & Variables

```

## 🚀 Cara Menjalankan (Installation)

Pastikan kamu sudah menginstall [Node.js](https://nodejs.org/) di komputermu.

1. **Clone repository ini:**
```bash
git clone [https://github.com/username-kamu/sudoku-solver.git](https://github.com/username-kamu/sudoku-solver.git)
cd sudoku-solver

```

2. **Install dependencies:**
```bash
npm install

```

3. **Jalankan server development:**
```bash
npm run dev

```

4. Buka browser dan akses alamat yang muncul (biasanya `http://localhost:5173`).

## 🧠 Tentang Algoritma Solver

Aplikasi ini menggunakan algoritma **Backtracking** (Runut Balik).

1. Mencari kotak kosong pertama.
2. Mencoba mengisi angka 1 sampai 9.
3. Memeriksa apakah angka tersebut valid (tidak ada duplikat di baris, kolom, atau kotak 3x3).
4. Jika valid, lanjut ke kotak kosong berikutnya (Rekursif).
5. Jika jalan buntu (tidak ada angka yang cocok), **mundur (backtrack)** ke kotak sebelumnya dan mencoba angka lain.

## 👥 Meet The Team

Project ini dibuat oleh:

* **Salmah** (10124234)
* **Haliza** (10124235)
* **Hanna** (10124462)
* **Serena** (10124463)
* **Salsa** (10124464)

---

*Dibuat dengan ❤️ untuk UAS Analisis dan Strategi Algoritma.*
