import { NavLink } from 'react-router-dom'


function Header(props) {



  return (
    <>
      <header className='row justify-between align-center'>
        <NavLink className="Name" to="/">{props.title}</NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    </>

  )
}

export default Header;

