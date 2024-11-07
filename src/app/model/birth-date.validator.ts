// birth-date.validator.ts

import { AbstractControl, ValidationErrors } from '@angular/forms';

// Fungsi Validator untuk memeriksa apakah tanggal lebih besar dari hari ini
export function birthDateValidator(control: AbstractControl): ValidationErrors | null {
  const today = new Date();
  const selectedDate = new Date(control.value);

  // Jika tanggal yang dipilih lebih besar dari hari ini, validasi gagal
  if (selectedDate > today) {
    return { futureDate: true }; // Mengembalikan error jika tanggal lebih besar dari hari ini
  }

  return null; // Tidak ada error jika valid
}
