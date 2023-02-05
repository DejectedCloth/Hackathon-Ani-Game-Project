import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <div class="content">
            <div>
                <Link to="">Swap!!!</Link>
            </div>
            <ul class="nav-links">
            <li>
                    <Link to="/popular">Popular</Link>
                </li>
                <li>
                    <Link to='/search'>Add</Link>
                </li>

                <li>
                    <Link to='/'>WatchList</Link>
                </li>

                <li>
                    <Link to='/watched'>Watched</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
