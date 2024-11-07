import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Employee {
  id:any;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  sortKey: string = 'username';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchQuery: string = '';
  Math = Math;
  totalPages: number = 0;

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

  employee: any;


  constructor(private router: Router) { }

  ngOnInit(): void {

    // Retrieve data from localStorage if it exists
    const storedEmployees = localStorage.getItem('employeesManage');
    if (storedEmployees) {
      // Use parsed data from localStorage
      this.employees = JSON.parse(storedEmployees);
    } else {
      // If no data exists in localStorage, generate dummy data
      this.generateDummyData(100);
      // Store the newly generated data in localStorage
      localStorage.setItem('employeesManage', JSON.stringify(this.employees));
    }


    // this.generateDummyData(100); // Generate 100 dummy records
    this.filteredEmployees = [...this.employees]; // Initialize the filtered data
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  // Method to generate random data
  generateDummyData(count: number): void {
    this.employees = []; // Clear the array before generating new data
    for (let i = 1; i <= count; i++) {
      const randomStatus = this.statusEmployee[Math.floor(Math.random() * this.statusEmployee.length)];
      const randomGroup = this.group[Math.floor(Math.random() * this.group.length)];

      // Push new employee data with all fields included
      this.employees.push({
        id: `${i}`,
        username: `user${i}`,
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        email: `user${i}@example.com`,
        birthDate: new Date(1990 + (i % 10), i % 12, i % 28),
        basicSalary: Math.round(Math.random() * 5000000 + 3000000),
        status: randomStatus.name, // Use the random status name
        group: randomGroup.name,   // Use the random group name
        description: `Description for user${i}`,
      });
    }

    // Store the generated data in localStorage
    localStorage.setItem('employeesManage', JSON.stringify(this.employees));
  }


  paginate(page: number): void {
    if (page < 1 || page > this.totalPages) return; // Prevent out-of-bounds pages
    this.currentPage = page;
  }

  getPagedEmployees(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredEmployees.slice(start, end);
  }


  // Sorting function
  sort(key: string): void {
    this.sortKey = key;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.filteredEmployees.sort((a, b) => {
      let compare = 0;
      if (a[key as keyof Employee] < b[key as keyof Employee]) {
        compare = -1;
      } else if (a[key as keyof Employee] > b[key as keyof Employee]) {
        compare = 1;
      }
      return this.sortDirection === 'asc' ? compare : -compare;
    });
  }

  // Filtering function
  filterEmployees(): void {
    const query = this.searchQuery ? this.searchQuery.toLowerCase() : ''; // Ensure the query is always a string
    this.filteredEmployees = this.employees.filter(employee =>
      (employee.username.toLowerCase().includes(query)) || // Filter by username
      (employee.status && employee.status.toLowerCase().includes(query)) // Filter by status, check if status exists
    );

    // Recalculate total pages after filtering
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    this.currentPage = 1; // Reset to page 1 after filtering
  }

  // Pagination function
  changePage(page: number): void {
    this.currentPage = page;
  }

  get paginatedEmployees(): Employee[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onView(index: any): void {
    console.log("Selected index:", index);

    // Mengambil array employee yang sudah disimpan di localStorage
    const employees = JSON.parse(localStorage.getItem('employeesManage') || '[]');

    // Mengambil employee berdasarkan index yang dipilih
    const selectedEmployee = employees[index];

    if (selectedEmployee) {
      // Menyimpan objek employee yang dipilih dalam localStorage
      localStorage.setItem('selectedEmployeeIndex', JSON.stringify(selectedEmployee));
      console.log("Employee data saved to localStorage:", selectedEmployee);
      this.router.navigate(['/employees/detail', selectedEmployee.id]);

      // Jika Anda ingin melakukan navigasi ke halaman detail, Anda bisa menggunakan router
      // this.router.navigate(['/employees/detail', selectedEmployee.id]);
    } else {
      console.error('Employee not found at index:', index);
    }

    // this.router.navigate(['/employees/detail', index]);
  }

  onDelete(employee: Employee): void {
    alert(`Delete action on ${employee.username}`);
    // Code for actual delete action can be added here
  }

}
