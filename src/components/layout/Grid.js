import classnames from "classnames";
import styles from "./Grid.module.css";

export function Grid({ type: Tag = "div", className, children, ...rest }) {
  return (
    <Tag className={classnames(styles.grid, className)} {...rest}>
      {children}
    </Tag>
  );
}

export function Column({
  type: Tag = "div",
  start,
  end,
  row,
  lgStart,
  lgEnd,
  lgRow,
  mdStart,
  mdEnd,
  mdRow,
  smStart,
  smEnd,
  smRow,
  grid = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={classnames(
        grid === true && styles.grid,
        styles.column,
        styles[`col-start-${start}`],
        styles[`col-end-${end}`],
        styles[`row-${row}`],
        styles[`lg--col-start-${lgStart}`],
        styles[`lg--col-end-${lgEnd}`],
        styles[`lg--row-${lgRow}`],
        styles[`md--col-start-${mdStart}`],
        styles[`md--col-end-${mdEnd}`],
        styles[`md--row-${mdRow}`],
        styles[`sm--col-start-${smStart}`],
        styles[`sm--col-end-${smEnd}`],
        styles[`sm--row-${smRow}`],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
