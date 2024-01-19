# CleanCodeAPI-ExpressJS

Repository นี้แสดงตัวอย่างการใช้หลักการเขียน Clean code ในการสร้าง RESTful API ด้วย ExpressJS 
โดย API นี้ทำหน้าที่เป็นระบบจัดการข้อมูลลูกค้าง่ายๆ ซึ่งสามารถทำงานต่างๆ 
เช่น การดึงข้อมูล, เพิ่มข้อมูล, ปรับปรุงข้อมูล และการลบข้อมูลลูกค้า

## คุณสมบัติ

- โค้ดที่เขียนอย่างชัดเจน, สามารถบำรุงรักษาได้ง่าย
- การแยกความรับผิดชอบ: แยกเป็นชั้นโครงสร้างต่างๆ สำหรับการเข้าถึงข้อมูล, บริการ, และการกำหนดเส้นทาง
- การทำ CRUD operations สำหรับการจัดการข้อมูลลูกค้า
- ใช้ ExpressJS เพื่อการกำหนดเส้นทางที่มีประสิทธิภาพ

Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
2. Navigate to the project directory: cd CleanCodeAPI-ExpressJS
3. Install dependencies: npm install

### Running the Application

Start the server by running: npm start


The server will start on `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- `GET /customers`: Retrieve all customers.
- `POST /customers`: Add a new customer.
- `PATCH /customers/:id`: Update a specific customer.
- `DELETE /customers/:id`: Delete a specific customer.



