import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly validUsername = 'admin';
  private readonly validPassword = 'admin1234';

  constructor() {}

  // Metode untuk mengecek apakah pengguna sudah login (memeriksa sessionStorage)
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('AccountLogin'); // Cek apakah ada sesi yang valid
  }

  // Metode untuk login menggunakan username dan password hardcoded
  login(username: string, password: string): boolean {
    // Cek kecocokan username dan password dengan data hardcoded
    if (username === this.validUsername && password === this.validPassword) {
      // Simpan informasi login di sessionStorage
      sessionStorage.setItem('AccountLogin', JSON.stringify({ username, password }));
      return true; // Login berhasil
    } else {
      return false; // Login gagal
    }
  }

  // Metode untuk logout
  logout(): void {
    sessionStorage.removeItem('AccountLogin'); // Menghapus sesi login
  }
}
