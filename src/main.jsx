import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './sass/index.scss';
import { AccessProvider } from "./components/AccessProvider.jsx";

createRoot(document.getElementById('root')).render(
    <AccessProvider>
        <App />
    </AccessProvider>
)
