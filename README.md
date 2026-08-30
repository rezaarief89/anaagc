# ANA Agency Retina assets

Versi ini memperbaiki blur dengan aset 2x (1728 px lebar) dan `srcset` untuk layar Retina/HiDPI. Tampilan CSS tetap maksimal 864 px, jadi browser tidak memperbesar source.

- Gunakan `index.html` + `styles.css` langsung.
- WebP 1x dipakai layar biasa, WebP 2x dipakai layar Retina.
- PNG 2x disediakan sebagai fallback kualitas tertinggi.
- Jangan menaikkan `.page` melewati 864 px. Referensi asli hanya 864 px, jadi lebar lebih besar akan kembali terlihat lembut.
