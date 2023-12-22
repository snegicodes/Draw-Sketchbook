import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFileDownload,
} from "react-icons/fa";
import styles from "./index.module.css";
const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FaPencilAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
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
