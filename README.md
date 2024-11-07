# backoffice-frontend

This is the **Backoffice Frontend** project.

## Teknologi yang Digunakan
- **Angular 16**
- **Node.js** v16.20.0
- **npm** v8.19.4

## Cara Instalasi

### 1. Clone project dari repository:
git clone -b master https://github.com/Gigih1996/backoffice-frontend.git

### 2. Install dependencies menggunakan npm:
npm install

### 3. Jalankan aplikasi dengan perintah:
ng serve


### Fitur :

Manage Employees: Mengelola data karyawan.
Create Employee: Menambah data karyawan baru.
View Employee: Melihat detail informasi karyawan.
Delete Employee: Menghapus data karyawan (dengan konfirmasi).
markdown
Copy code

### Tambahkan "allowedCommonJsDependencies" di angular.json
apabila tidak tersedia di angular.json saat install npm

Below is an example of the project configuration for Angular, specifically for allowing CommonJS dependencies.

```json
{
  "projects": {
    "your-project-name": {
      "architect": {
        "build": {
          "options": {
            "allowedCommonJsDependencies": [
              "sweetalert2"
            ]
          }
        }
      }
    }
  }
}
