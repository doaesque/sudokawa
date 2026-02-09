import { isValid } from './validator'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * HEURISTIC: Minimum Remaining Values (MRV)
 * Mencari sel kosong yang memiliki pilihan angka valid paling SEDIKIT.
 * Ini adalah bentuk "Informed Search" yang membuat
 * algoritma Backtracking jauh lebih cerdas dan cepat.
 */
const findBestEmptyCell = (board) => {
  let minOptions = 10 // Inisialisasi dengan nilai > 9
  let bestCell = null

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === 0) {
        let optionsCount = 0
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, r, c, num)) optionsCount++
        }

        // Optimasi Pruning Ekstrim:
        // Jika ada sel kosong yang tidak punya pilihan sama sekali (0 opsi),
        // itu adalah DEAD END (jalan buntu). Langsung kembalikan agar backtrack terjadi.
        if (optionsCount === 0) return { r, c, optionsCount }

        // Simpan sel ini jika opsi-nya lebih sedikit dari yang ditemukan sebelumnya
        if (optionsCount < minOptions) {
          minOptions = optionsCount
          bestCell = { r, c, optionsCount }
        }
      }
    }
  }
  return bestCell
}

// Algoritma Backtracking dengan Visualisasi & Heuristik
export const solveSudoku = async (board, updateBoard, speedRef, stats = { iterations: 0 }) => {
  // 1. Cari sel terbaik untuk diisi (Strategi MRV)
  // Alih-alih urut dari (0,0), kita cari yang paling "kritis".
  const emptyCell = findBestEmptyCell(board)

  // BASIS REKURSI: Jika tidak ada sel kosong, berarti SOLVED!
  if (!emptyCell) return true

  // PRUNING: Jika ditemukan sel kosong tapi tidak ada angka valid (0 opsi),
  // berarti langkah sebelumnya salah. Lakukan BACKTRACK.
  if (emptyCell.optionsCount === 0) return false

  const { r, c } = emptyCell

  // 2. Coba isi dengan angka 1-9 (Sekuens Keputusan)
  for (let num = 1; num <= 9; num++) {
    // Constraint Checking (Materi Pertemuan 14: Kendala)
    if (isValid(board, r, c, num)) {
      
      stats.iterations++

      // Aksi: Tulis angka (Trial)
      board[r][c] = num
      
      // OPTIMISASI VISUAL:
      // Hanya update state React jika TIDAK dalam mode Skip.
      // Ini mencegah browser freeze karena ribuan render per detik.
      const isSkip = speedRef.current.skipMode
      if (!isSkip) {
         updateBoard([...board.map(row => [...row])], r, c, 'trial')
         const currentDelay = speedRef.current.delay
         if (currentDelay > 0) await sleep(currentDelay)
      }

      // Rekursi: Panggil diri sendiri untuk langkah selanjutnya
      if (await solveSudoku(board, updateBoard, speedRef, stats)) return true

      // Backtracking: Hapus angka jika jalan buntu (Materi Pertemuan 14: Mundur)
      board[r][c] = 0
      
      if (!isSkip) {
        updateBoard([...board.map(row => [...row])], r, c, 'backtrack')
        const backtrackDelay = speedRef.current.delay
        if (backtrackDelay > 0) await sleep(backtrackDelay)
      }
    }
  }
  
  // Jika semua angka 1-9 gagal, kembalikan false (memicu backtrack di level atasnya)
  return false
}

// Fungsi Helper untuk mendapatkan Kunci Jawaban (Tanpa Visualisasi)
// Menggunakan logika yang sama agar konsisten
export const getSolvedBoard = (initialBoard) => {
  const board = initialBoard.map(row => [...row])

  const solveHelper = (b) => {
    const emptyCell = findBestEmptyCell(b)
    if (!emptyCell) return true
    if (emptyCell.optionsCount === 0) return false

    const { r, c } = emptyCell

    for (let num = 1; num <= 9; num++) {
      if (isValid(b, r, c, num)) {
        b[r][c] = num
        if (solveHelper(b)) return true
        b[r][c] = 0
      }
    }
    return false
  }

  if (solveHelper(board)) return board
  return null
}
