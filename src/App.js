import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserAddress from './pages/userAddress';
import AllUsers from './pages/allUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAddress />} />
        <Route path="/allUsers" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
