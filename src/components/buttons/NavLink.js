import classnames from "classnames";
import Link from "./Link";
import styles from "./NavLink.module.css";

export default function NavLink({ className, children, onClick, active, ...rest }) {
  return (
    <Link
      className={classnames(styles.link, active && styles.active, className)}
      unstyled={true}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
