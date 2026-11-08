# Mahija Raya Portfolio

Website portofolio berbasis React, Vite, dan Tailwind CSS.

## Menjalankan di komputer

1. Install Node.js versi LTS.
2. Ekstrak folder proyek.
3. Buka terminal di folder proyek.
4. Jalankan:

   ```bash
   npm install
   npm run dev
   ```

5. Buka alamat lokal yang ditampilkan Vite (biasanya http://localhost:5173).

## Build untuk production

```bash
npm run build
npm run preview
```

Hasil build berada di folder `dist`.

## Deploy ke Vercel

1. Upload/push seluruh isi folder proyek ini ke repository GitHub.
2. Masuk ke https://vercel.com dan pilih **Add New > Project**.
3. Import repository GitHub tersebut.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Klik **Deploy**.

## Catatan penting

- Form kontak membuka aplikasi email pengunjung melalui `mailto:`. Form ini belum memakai backend dan tidak mengirim pesan secara otomatis.
- Periksa kembali data kontak, IPK, sertifikasi, proyek, dan klaim pengalaman sebelum website dipublikasikan.
- Nomor telepon dan email di website akan terlihat oleh publik.
