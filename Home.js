// Home.js
import React from 'react';
import { Outlet, Link} from "react-router-dom";
function Home () {
    return (
            <>
              <nav>
                <ul>
                <li>
                    <Link to="About"  className="link">About</Link>
                  </li>
                  <li>
                    <Link to="/Projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/Resume">Resume</Link>
                  </li>
                  <li>
                    <Link to="/Forms">Forms</Link>
                  </li>
                </ul>
              </nav>
             <Outlet/> 
           </>   
 );
};
export default Home;
