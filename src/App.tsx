import { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { CareersPage } from './pages/CareersPage';
import { UsersPage } from './pages/UsersPage';

function App() {
  const [page, setPage] = useState('users')
  return (
    <div className="App">
      <h1 className="AppHeader">Flytrex demo App!</h1>

      <NavBar currentPage={page} setPage={setPage}/>
      
      { page === 'users' ? <UsersPage /> : <CareersPage /> }
    </div>
  )
}

export default App;
