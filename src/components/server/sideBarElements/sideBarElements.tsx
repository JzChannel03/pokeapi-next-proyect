import style from "./sideBarElements.module.scss";

const SideBarElement = ({
  icon,
  text,
}: {
  text: string;
  icon: JSX.Element;
}) => {
  return (
    <div className={style.sideBarElement}>
      {icon}
      <span className={style.text}>{text}</span>
    </div>
  );
};

export default SideBarElement;
