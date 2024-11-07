import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, // Untuk mengambil URL params
    private fb: FormBuilder, // Untuk membuat FormGroup
    private router: Router,
  ) { }

  FormView!: FormGroup; // Form untuk menampilkan detail
  employee: any; // Menyimpan data employee
  employeeId: string = '';

  ngOnInit(): void {
    // Ambil ID dari URL params
    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
      console.log("Employee ID from URL params:", this.employeeId);

      // Ambil array employees dari localStorage
      const employees = JSON.parse(localStorage.getItem('employeesManage') || '[]');

      // Cari employee berdasarkan ID yang diterima dari URL
      this.employee = employees.find((emp: any) => emp.id === this.employeeId);
      console.log("Employee data:", this.employee);
      // Convert birthDate to the required format (YYYY-MM-DD)
      if (this.employee?.birthDate) {
        this.employee.birthDate = this.convertToDate(this.employee.birthDate);
      }

      // Format basicSalary using the convertToBasicSalary function
    if (this.employee?.basicSalary) {
      this.employee.basicSalary = this.convertToBasicSalary(this.employee.basicSalary);
    }

      if (this.employee) {
        // Jika ditemukan, buat form dengan data employee
        this.createForm();
      } else {
        console.error('Employee not found!');
      }
    });
  }

  createForm(): void {
    // Membuat form dengan data employee yang sudah ada
    this.FormView = this.fb.group({
      username: [{ value: this.employee?.username, disabled: true }],
      firstName: [{ value: this.employee?.firstName, disabled: true }],
      lastName: [{ value: this.employee?.lastName, disabled: true }],
      email: [{ value: this.employee?.email, disabled: true }],
      birthDate: [{ value: this.employee?.birthDate, disabled: true }],
      basicSalary: [{ value: this.employee?.basicSalary, disabled: true }],
      status: [{ value: this.employee?.status, disabled: true }],
      group: [{ value: this.employee?.group, disabled: true }],
      description: [{ value: this.employee?.description, disabled: true }]
    });
  }

  // Function to convert ISO string to YYYY-MM-DD
  convertToDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero
    return `${year}-${month}-${day}`;
  }

  convertToBasicSalary(amount: number): string {
    if (amount == null || isNaN(amount)) {
      return '';
    }
    // Format angka dengan pemisah ribuan dan desimal
    const formattedAmount = amount.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `Rp. ${formattedAmount}`;
  }

}
