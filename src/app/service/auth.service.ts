import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Contoh sederhana, misal menggunakan token di localStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Akan mengembalikan true jika token ada
  }

  // Contoh metode untuk login dan logout
  login(token: string): void {
    localStorage.setItem('authToken', token);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
