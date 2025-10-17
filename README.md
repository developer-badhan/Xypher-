# 💬 Xypher – Real-Time Messaging Platform

**Xypher** is a modern, fast, and secure real-time messaging platform built for seamless communication. Designed with scalability, performance, and user experience in mind, Xypher offers a rich set of features powered by cutting-edge technologies in the MERN stack ecosystem.

---

## 🚀 Features

### 🔐 Authentication & Security
- **Custom JWT Authentication**: Secure login and signup flow using JSON Web Tokens. No third-party auth dependencies.
- **API Rate Limiting (via Arcjet)**: Protects against abuse with efficient rate-limiting on backend routes.

### ⚡ Real-Time Chat
- **Socket.io Integration**: Enables real-time messaging with instant updates.
- **Typing Indicators & Notification Sounds**: Enhanced UX with live typing alerts and optional sound notifications.
- **Online/Offline Status**: Realtime presence indicators to show who's online.

### 📨 Communication Enhancements
- **Welcome Emails**: Automated email greetings on signup using Resend.
- **Image Uploads**: Seamless media sharing powered by Cloudinary integration.

### 🖥️ UI/UX
- **Modern UI with Tailwind CSS + DaisyUI**: Clean, responsive, and accessible interface.
- **Theme & Notification Toggles**: User-friendly customization with sound and alert toggles.

---

## 🧰 Tech Stack

| Frontend | Backend | Database | Realtime | Auth | Cloud | State |
|----------|---------|----------|----------|------|--------|--------|
| **React.js** | **Node.js** | **MongoDB** | **Socket.io** | **JWT (Custom)** | **Cloudinary + Resend** | **Zustand** |
| **Tailwind CSS** | **Express.js** |  |  |  |  |  |

---

## 📁 Project Structure
```
xypher/
|
|__backend/
||__src/
|| |
|| |__config/
|| | |__arcjet.js
|| | |__cloudinary.js
|| | |__db.js
|| | |__env.js
|| | |__resend.js
|| | |__socket.js
|| | |__utils.js
|| |
|| |__controller/
|| |  |__auth.controller.js
|| |  |__message.controller.js
|| |
|| |__email/
|| |  |__emailHandlers.js
|| |  |__emailTemplates.js
|| |
|| |__middleware/
|| | |__arcjet.middleware.js
|| | |__auth.middleware.js
|| | |__socket.auth.middleware.js
|| |
|| |__models/
|| | |__message.model.js
|| | |__user.models.js
|| |
|| |__routes/
|| | |__auth.route.js
|| | |__message.route.js
|| |
|| |__utils/
|| |  |__auth.utils.js
||
||__package.json
||__index.js
|
|
|__frontend/
||__src/
|| |
|| |__components/
|| | |__ActiveTabSwitch.jsx
|| | |__BorderAnimatedContainer.jsx
|| | |__ChatContainer.jsx
|| | |__ChatHeader.jsx
|| | |__ChatList.jsx
|| | |__ContactList.jsx
|| | |__MessageInput.jsx
|| | |__MessagesLoadingSkeleton.jsx
|| | |__NoChatHistoryPlaceholder.jsx
|| | |__NoChatsFound.jsx
|| | |__NoConversionPlaceholder.jsx
|| | |__PageLoader.jsx
|| | |__ProfileHeader.jsx
|| | |__UsersLoadingSkeleton.jsx
|| |
|| |__hooks/
|| | |__useKeyboardSound.js
|| |
|| |__lib/
|| | |__axios.js
|| |
|| |__pages/
|| | |__ChatPage.jsx
|| | |__LoginPage.jsx
|| | |__SignUpPage.jsx
|| | |
|| |
|| |__store/
|| ||__useAuthStore.js
|| ||__useChatStore.js
|| |
|| |__App.jsx
|| |__index.css
|| |__main.jsx
|| |__eslint.config.js
|| |__index.html
|| |__package.json
|| |__taildwind.config.js
|| |__vite.config.js
```


---

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Cloudinary account
- Resend API key
- Arcjet API key

### 1. Clone the Repository

```bash ```
git clone https://github.com/developer-badhan/Xypher-.git
cd xypher


### Install Dependencies

# For backend
cd backend
npm install
npm run dev


# For frontend
cd frontend
npm install
npm run dev


