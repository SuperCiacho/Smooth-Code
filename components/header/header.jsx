import { ThemeSwitch } from "../theme-switch";
import styles from "./styles.module.css";

export const Header = () => (
  <header className={styles.app_header}>
    <p>Smooth Code | Bartosz Nowak</p>
    <ThemeSwitch />
  </header>
);