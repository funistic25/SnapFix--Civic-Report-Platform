import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TechnicianProvider } from './contexts/TechnicianContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById("root")).render(
  <TechnicianProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </TechnicianProvider>
);
