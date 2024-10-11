import Dashboard from "./pages/Dashboard";
import './App.css';
import Switch from '@mui/material/Switch';
import { useContext } from "react";
import { AccessContext } from "./components/AccessProvider.jsx";

function App() {
  const accessContext = useContext(AccessContext);
  return (
    <div className="App">
      <div className="nav-bar">
        <p>admin</p>
        <Switch onChange={(e) => accessContext.updateUserAccess()} checked={!accessContext.userAccess} color="warning" />
        <p>user</p>
      </div>
      <Dashboard />
    </div>
  )
}

export default App;