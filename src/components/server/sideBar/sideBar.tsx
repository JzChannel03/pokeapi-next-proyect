import styles from "./sideBar.module.scss";
import MaterialIcon from "../materialIcon/materialIcon";
import SideBarElement from "../sideBarElements/sideBarElements";
import { randomUUID } from "crypto";
import SideBarElementContainer from "../sideBarElementContainer/sideBarElementContainer";
import Image from "next/image";
import PokedexImage from "@/assets/icons/pokeball_287221.png";

const SideBar = () => {
  const sideBarElements = [
    { icon: <MaterialIcon name="chat" />, text: "Talk with a Pokemon" },
    { icon: <MaterialIcon name="tv" />, text: "PokeTV" },
    { icon: <MaterialIcon name="star" />, text: "Favorites" },
    { icon: <MaterialIcon name="upcoming" />, text: "Coming soon..." },
  ];

  return (
    <aside className={styles.sideBar}>
      <div className={styles.title}>
        <Image src={PokedexImage} quality={100} width={25} alt="PokeImg" />
        <h4>Pokemon</h4>
      </div>

      <SideBarElementContainer>
        {sideBarElements.map((element) => (
          <SideBarElement
            icon={element.icon}
            text={element.text}
            key={randomUUID()}
          ></SideBarElement>
        ))}
      </SideBarElementContainer>
    </aside>
  );
};

export default SideBar;
