import { Link as RouterLink } from "react-router-dom";

import classnames from "classnames";

import styles from "./Link.module.css";

export default function Link({ className, unstyled = false, href, children, ...rest }) {
  const classNames = classnames(styles.link, !!unstyled && styles.unstyled, className);
  if (href.startsWith("http")) {
    return (
      <a className={classNames} href={href} rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink className={classNames} to={href} {...rest}>
      {children}
    </RouterLink>
  );
}
