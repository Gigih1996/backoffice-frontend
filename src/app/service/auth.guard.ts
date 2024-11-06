import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Izinkan akses jika pengguna sudah login
  } else {
    router.navigate(['/login']); // Redirect ke login jika belum login
    return false;
  }
};
