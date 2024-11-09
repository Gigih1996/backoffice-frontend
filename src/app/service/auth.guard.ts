import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Pastikan AuthService tersedia jika diperlukan

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService jika ada
  const router = inject(Router);

  // Mengecek apakah session storage 'AccountLogin' ada
  const isLoggedIn = sessionStorage.getItem('AccountLogin') !== null;

  if (isLoggedIn) {
    // Jika pengguna sudah login, izinkan akses ke halaman yang dilindungi
    return true;
  } else {
    // Jika pengguna belum login, arahkan ke halaman login
    router.navigate(['/login']);
    return false;
  }
};
