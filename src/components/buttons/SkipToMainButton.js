import Button from "./Button";
import styles from "./SkipToMainButton.module.css";

function onClick(e) {
  e.preventDefault();
  window.document.querySelector("#main").scrollIntoView();
}

export default function SkipToMainButton() {
  return (
    <Button className={styles.button} href="#main" onClick={onClick}>
      Skip to Main Content
    </Button>
  );
}
