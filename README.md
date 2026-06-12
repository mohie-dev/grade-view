# Grade View 🎓

A modern, comprehensive web application designed for universities and educational institutions to efficiently manage and display student academic results. Grade View offers a seamless experience for students to query their results securely using their Seat Number and National ID.

## ✨ Features

- **Secure Student Access:** Students log in securely using their unique Seat Number and National ID.
- **Detailed Academic Dashboard:** Displays full student information, academic department, and level.
- **GPA & Performance Summary:** Visual statistic cards detailing GPA, Overall Grade, Total Points, Assigned Hours, and Passed Hours.
- **Results Table:** A clean, responsive table showing subjects, credit hours, marks, and color-coded grades.
- **Admin Excel Upload (Backend):** Seamlessly import thousands of student results via Excel sheets using a highly optimized parser.
- **Arabic-First Design:** Fully localized Right-to-Left (RTL) interface optimized for Arabic-speaking users.
- **Responsive & Animated UI:** Built with modern design principles, completely responsive for mobile devices, and enriched with subtle Framer Motion animations.

## 🛠️ Technology Stack

**Frontend:**
- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/)

**Backend:**
- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- [ExcelJS](https://github.com/exceljs/exceljs) (for parsing result sheets)
- TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally or a MongoDB Atlas URI
- npm or yarn

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the `backend` directory and add your MongoDB connection string (if not already present):
   ```env
   MONGODB_URI=mongodb://localhost:27017/grade-view
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm run start:dev
   ```
   *The backend will run on `http://localhost:3000`.*

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the `frontend` directory (it should already be created):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:3001`.*

## 📖 Usage

1. **Upload Data:** Use an API client (like Postman) to send a `POST` request with an Excel file (under the `file` form-data field) to `http://localhost:3000/upload`. The backend will parse the file and populate the database.
2. **Student Login:** Open `http://localhost:3001` in your browser. Enter a valid Seat Number and National ID to view the detailed results dashboard.

## 👨‍💻 Developed By

**Mohie**  
[Visit Portfolio](https://mohie-dev.vercel.app/)

---
*© 2026 Grade View. All rights reserved.*
