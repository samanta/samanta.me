import classnames from "classnames";

import Link from "./Link";
import styles from "./Button.module.css";

export const ButtonVariant = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  quaternary: "quaternary",
};

export default function Button({
  className,
  type = "button",
  children,
  href,
  variant = ButtonVariant.primary,
  onClick,
  ...rest
}) {
  const Tag = !!href ? Link : "button";
  const tagProps = !!href ? { href, unstyled: true } : { type };

  return (
    <Tag
      className={classnames(styles.button, !!href && styles.link, styles[variant], className)}
      onClick={onClick}
      {...tagProps}
      {...rest}
    >
      {children}
    </Tag>
  );
}
