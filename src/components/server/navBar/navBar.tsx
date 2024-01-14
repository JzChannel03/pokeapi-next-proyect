import Link from "next/link";
import styles from "./navBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/server/commands">Commands</Link>
        </li>
        <li>
          <Link href="/server/permissions">Permissions</Link>
        </li>
        <li>
          <Link href="/server/roles">Roles</Link>
        </li>
        <li>
          <Link href="/server/audit">Audit</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
