import { createRoot } from 'react-dom/client'
import React from 'react'
import {Toaster} from "react-hot-toast"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
    <Toaster
    position="top-right"
    toastOptions={{
        duration: 3000,
        style: {
        background: "#18181b", // zinc-900
        color: "#ffffff",
        border: "1px solid #34d399", // emerald-400
        },
        success: {
        iconTheme: {
            primary: "#34d399",
            secondary: "#18181b",
        },
        },
        error: {
        iconTheme: {
            primary: "#ef4444",
            secondary: "#18181b",
        },
        },
    }}
    />
</React.StrictMode>
)
