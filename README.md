
# 🌟 Kanban Board — Full-Stack React + Node.js App

A simple, clean, and fully functional Kanban board built with **React**, **Tailwind CSS**, and **Node.js + Express**.  
Users can add, edit, delete, and drag tasks between workflow columns.  
Tasks are saved automatically using **localStorage**, and you can also connect to a backend **CRUD API** for database persistence.

---

## ✨ Features

### 🖥 Frontend (React + Tailwind)
- Three default columns: **To Do**, **In Progress**, and **Done**
- Add new tasks through a modal form
- Edit tasks directly on the board
- Delete tasks instantly
- Drag and drop tasks between columns
- Smooth interactions with clean UI animations
- Fully responsive for both mobile and desktop
- Tasks stored in **localStorage** for instant persistence

### 🛠 Backend (Node.js + Express)
- Full CRUD API for managing tasks
- Supports any database (MongoDB, PostgreSQL, etc.)
- Organized routes, controllers, and models
- Easy to extend or integrate with your deployment stack

### 💾 Persistence Options
- **localStorage**: Frontend-only mode, fast and offline-friendly  
- **Database API**: Long-term storage through a backend

---

## 📚 Tech Stack

### Frontend
- React  
- Tailwind CSS  
- React DnD (or similar drag-and-drop library)  
- localStorage  

### Backend
- Node.js  
- Express  
- MongoDB / PostgreSQL (depending on your setup)  

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

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board
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

If you're using a database, create a `.env` file in the **server** folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📡 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /tasks     | Get all tasks     |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |
| DELETE | /tasks/:id | Delete a task     |

---

## 🧠 How It Works

* React handles all UI logic and drag-and-drop interactions.
* Tasks are saved to localStorage so nothing disappears after refresh.
* If the backend is connected, the app syncs changes through the CRUD API.
* The backend can store tasks in any database of your choice.


## 🤝 Contributing

Feel free to contribute:

1. Fork this repo
2. Create a new branch
3. Add your changes
4. Submit a pull request

---

## 📜 License

This project is licensed under the MIT License.

---

