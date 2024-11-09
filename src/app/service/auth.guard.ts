import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Pastikan ada AuthService jika diperlukan

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService jika diperlukan
  const router = inject(Router);

  // Mengecek apakah ada session storage 'AccountLogin'
  const isLoggedIn = sessionStorage.getItem('AccountLogin') !== null;

  if (isLoggedIn) {
    return true; // Izinkan akses jika sudah login
  } else {
    router.navigate(['/login']); // Redirect ke halaman login jika belum login
    return false; // Akses dibatasi
  }
};
