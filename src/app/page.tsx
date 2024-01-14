import NavBar from "@/components/server/navBar/navBar";
import styles from "./page.module.css";
import SideBar from "@/components/server/sideBar/sideBar";

export default async function Home() {
  return (
    <main className={styles.main}>
      <SideBar></SideBar>
      <NavBar></NavBar>
    </main>
  );
}
