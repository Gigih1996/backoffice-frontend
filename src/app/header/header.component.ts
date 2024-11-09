import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  constructor(
    public router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    
  }

  // Fungsi logout: hapus sessionStorage dan redirect ke login
  logout(): void {

    Swal.fire({
      title: 'Are your sure logout?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if(result.isConfirmed){
        console.log('ok')
        this.authService.logout(); // Hapus session dengan AuthService

        Swal.fire(
          'Logout!',
          'Thanks you!'
        );
        this.router.navigate(['/login']); // Redirect ke halaman login

      }
    })

    // console.log('ok')
    // this.authService.logout(); 
    // this.router.navigate(['/login']); 
  }
}
