import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from '../model/type';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { birthDateValidator } from '../model/birth-date.validator';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  group = [
    { id: '1', name: 'HRD' },
    { id: '2', name: 'IT Support' },
    { id: '3', name: 'Infokom' },
    { id: '4', name: 'Web Application' },
    { id: '5', name: 'Mobile Application' },
    { id: '6', name: 'Network Engineer' },
    { id: '7', name: 'DevOps' },
    { id: '8', name: 'Cyber Security' },
    { id: '9', name: 'Finance' },
    { id: '10', name: 'Datawarehouse' },
  ]

  statusEmployee = [
    { id: '1', name: 'Active' },
    { id: '2', name: 'Inactive' },
  ]


  FormCreate!: FormGroup;
  filteredGroups = [...this.group];
  searchTerm = new FormControl('');
  isActive: boolean = false;
  selectedGroup: { id: string; name: string } | null = null;



  ngOnInit(): void {
    this.FormCreate = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, birthDateValidator]],
      basicSalary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      status: ['', Validators.required],
      group: new FormControl('', Validators.required),
      description: ['', Validators.required]
    });

    this.filteredGroups = [...this.group];

    // Subscribe untuk memonitor perubahan pada searchTerm
    this.searchTerm.valueChanges.subscribe(value => {
      // Pastikan value yang diterima bukan null sebelum mengirimkan ke filterGroups
      this.filterGroups(value || ''); // Gunakan '' sebagai nilai default jika value null
    });

  }
  
  CreateCompany(): void {
    // Validasi form jika valid
    if (this.FormCreate.valid) {
      const employeeData: EMPLOYEE = this.FormCreate.value;

      // Retrieve existing employees from localStorage or initialize as an empty array
      const employees: EMPLOYEE[] = JSON.parse(localStorage.getItem('employeesManage') || '[]');

      // Add the new employee data to the array
      employees.push(employeeData);

      // Save the updated array back to localStorage
      localStorage.setItem('employeesManage', JSON.stringify(employees));

      // SweetAlert2 confirmation dialog
      Swal.fire({
        title: 'Success!',
        text: 'Employee data saved successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Redirect to /employee after confirming
        this.router.navigate(['/employees']);
      });

      // Optional: Clear the form after saving
      this.FormCreate.reset();
    }
  }
  
  filterGroups(searchValue: string): void {
    // Jika tidak ada nilai pada searchTerm, tampilkan semua grup
    if (!searchValue) {
      this.filteredGroups = [...this.group];
    } else {
      // Filter grup berdasarkan nilai yang diinputkan
      this.filteredGroups = this.group.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }


  // Select a specific group and close the dropdown
  selectGroup(item: { id: string; name: string }): void {
    this.selectedGroup = item;
    this.FormCreate.get('group')?.setValue(item.id);
    this.toggleDropdownGroup(); // Close dropdown after selection
  }

  // Toggle the dropdown visibility
  toggleDropdownGroup(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      // Reset the filtered list when opening the dropdown
      this.filteredGroups = [...this.group];
    }
  }

}
