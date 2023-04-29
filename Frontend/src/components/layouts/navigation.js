import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>7T2</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/addmeetup"}>Content Adder</Link>
        </li>
        <li>
          <Link to={"/favourites"}>Services</Link>
        </li>
        <li>
          <Link to={"/reports"}>Reports</Link>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
