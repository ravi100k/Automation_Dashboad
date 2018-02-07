import React from 'react';
import { NavLink,Link } from 'react-router-dom'



function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const NavBar= ()=>{
	return <div>
			    <div className="mdl-layout__header-row demo-layout-transparent">
			      <Link to="/"  className="mdl-layout-title">Automation Dashboard</Link>
			      
			      <div className="mdl-layout-spacer"></div>

			      <nav className="mdl-navigation">
			        <NavLink to="/instance/Jira" className="mdl-navigation__link" href="">Jira</NavLink>
			        <NavLink to="/instance/Confluence" className="mdl-navigation__link" href="">Confluence</NavLink>
			        <NavLink to="/instance/Devtrack" className="mdl-navigation__link" href="">Devtrack</NavLink>
			      </nav>
			    </div>
			</div>
}

export default NavBar;