# 🌸 Sudokawa — Recursive Backtracking Visualizer

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Fast_Build-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Algorithm](https://img.shields.io/badge/Algorithm-Backtracking_(DFS)-FF69B4?style=flat-square)](https://en.wikipedia.org/wiki/Backtracking)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=flat-square)](LICENSE)

An interactive, educational puzzle application designed to visualize how recursive search trees solve constraint satisfaction problems in real time.

Built as the capstone submission for **Algorithm Design and Analysis** (*Tugas Besar Analisis & Strategi Algoritma*), Universitas Komputer Indonesia (UNIKOM).

---

## ⚡ Technical Core

Sudokawa translates abstract tree-search recursion into a responsive, frame-by-frame visual playback without locking the browser's JavaScript single-threaded event loop:

* **Non-Blocking Recursive Stepping:** Decouples raw Depth-First Search (DFS) execution from DOM updates using controllable asynchronous pacing (`async/await` step intervals).
* **Constraint Validation Engine:** Computes row, column, and $3 \times 3$ subgrid invariants with deterministic lookups before recursing deeper into the search tree.
* **Granular Speed Throttling:** Configurable execution delays ranging from step-by-step inspection to high-speed batch solving.
* **Manual Gameplay & Helper Utilities:** Includes difficulty generation (Easy, Medium, Hard), pencil marks, cell solving, and error validation checks.

---

## 🛠️ Stack

* **Runtime & Framework:** React.js, Vite
* **Core Logic:** Custom State Hooks, Recursive Backtracking Algorithm
* **Styling:** CSS3 (Flexbox & Grid) with theme tokens

---

## 🚀 Quickstart

```bash
git clone https://github.com/doaesque/sudokawa.git
cd sudokawa
npm install
npm run dev

```

---

## 👥 Engineering Team

Developed for the **Algorithm Design & Analysis** course project by:

* Salmah
* Haliza
* Hanna
* Serena
* Salsabila
