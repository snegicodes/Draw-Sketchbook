import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFileDownload,
} from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { MENU_ITEMS } from "@/constants";
import { menuItemClick } from "@/slice/menuSlice";
const Menu = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FaPencilAlt className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FaEraser className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaUndoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaRedoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
