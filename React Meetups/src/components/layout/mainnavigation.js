import { Link } from "react-router-dom";

import Mainnavcss from "./mainnavigation.module.css"

function Mainnavigation() {
  return (
    <header className={Mainnavcss.header}>
      <div className={Mainnavcss.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Mainnavigation;
