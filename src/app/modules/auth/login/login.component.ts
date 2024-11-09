import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';  // Import SweetAlert2

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormLogin!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) {}

  ngOnInit(): void {
    this.FormLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login(): void {
    const username = this.FormLogin.get('username')?.value;
    const password = this.FormLogin.get('password')?.value;

    // Cek login menggunakan AuthService
    const isLoginSuccess = this.authService.login(username, password);

    if (isLoginSuccess) {
      // Jika login berhasil, simpan session dan redirect ke halaman employees
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      this.router.navigate(['/employees']); // Redirect ke /employees setelah login
    } else {
      // Jika login gagal, tampilkan pesan error dengan SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Incorrect username or password',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  // Toggle visibility of the password
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
