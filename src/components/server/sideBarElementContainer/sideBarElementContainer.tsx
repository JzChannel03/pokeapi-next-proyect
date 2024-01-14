import style from "./sideBarElementContainer.module.scss";

const SideBarElementContainer = ({ children }: { children: JSX.Element[] }) => {
  return <div className={style.container}>{children}</div>;
};

export default SideBarElementContainer;
