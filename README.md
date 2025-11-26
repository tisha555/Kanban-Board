
# 🌟 Kanban Board — React + Node.js Full-Stack Application

A clean, simple, and fully functional Kanban board built with **React**, **Tailwind CSS**, and a **Node.js + Express API**.  
Users can create, update, move, and delete tasks across three workflow stages.  
Tasks stay saved thanks to both **localStorage persistence** and an optional **database-backed CRUD API**.

---

## ✨ Features

### 📌 Frontend (React + Tailwind)
- Three default columns: **To Do**, **In Progress**, **Done**
- Create new tasks using a modal form
- Edit tasks directly inside the board
- Delete tasks with a single click
- Drag and drop tasks between columns
- Smooth UI with hover states and transitions
- Fully responsive layout
- LocalStorage persistence for instant load

### 🛠 Backend (Node.js + Express)
- Full CRUD REST API for task management
- Supports any database (MongoDB, PostgreSQL, etc.)
- Clean and modular structure
- Simple models and controllers for easy expansion

### 💾 Persistence
- **localStorage** ensures immediate offline persistence
- **Database API** ensures long-term storage if deployed

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript (optional if used)
- Tailwind CSS
- React DnD (or similar library for drag-and-drop)
- localStorage

### Backend
- Node.js
- Express
- MongoDB / PostgreSQL (choose depending on your setup)

---

## 📁 Project Structure

```

/client
/src
/components
/hooks
/utils
App.tsx
main.tsx

/server
/routes
/controllers
/models
server.js

README.md

````



---

## 🎨 Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔧 Backend Setup

```bash
cd server
npm install
npm start
```

Make sure to configure your environment variables if you're using a database:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📡 API Endpoints

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| GET    | /tasks     | Fetch all tasks     |
| POST   | /tasks     | Create a new task   |
| PUT    | /tasks/:id | Update task details |
| DELETE | /tasks/:id | Remove a task       |

---

## 🧠 How It Works

* The React app manages state and UI interactions.
* Tasks are stored in localStorage instantly.
* When connected to the backend, CRUD requests sync tasks with the database.
* Drag and drop updates both local state and backend status.



---

## 🤝 Contributing

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a pull request

---

## 📜 License

This project is open source under the MIT license.

