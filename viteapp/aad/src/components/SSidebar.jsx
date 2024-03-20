import React from 'react'
import '../assets/css/SSidebar.css';
import { Link } from 'react-router-dom';
export default function SSidebar() {
  return (
    <div><>
    <ul className="sidebar-admin">
      <li className="sidebar-brand">
        <a href="">SIDEBAR</a>
      </li>
      <li>
        <a href="#">Dashboard</a>
      </li>
      
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <Link to='/User_Login'>Logout</Link>
      </li>
    </ul>
  </>
  </div>
  )
}
