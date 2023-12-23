"use server";
import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFileDownload,
} from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { menuItemClick } from "@/slice/menuSlice";
const Menu = () => {
  const dispatch = useDispatch();

  const handleItemClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper} onClick={handleItemClick("Pencil")}>
        <FaPencilAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={handleItemClick("Eraser")}>
        <FaEraser className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={handleItemClick("Undo")}>
        <FaUndoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={handleItemClick("Redo")}>
        <FaRedoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={handleItemClick("Download")}>
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
