interface NavBarProps {
    currentPage: string
    setPage: (page: string) => void
}

export const NavBar = ({currentPage, setPage}: NavBarProps) => {
    return (<div className="NavBar">
      <a href="/users" 
        className={currentPage === 'users' ? 'selected-page-link' : ''} 
        onClick={() => setPage('users')}>Users</a>
      <a href="/careers" 
        className={currentPage === 'careers' ? 'selected-page-link' : ''} 
        onClick={() => setPage('careers')}>Careers</a>
    </div>)
  }