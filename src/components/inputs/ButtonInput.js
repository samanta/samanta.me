import React, { forwardRef, useEffect, useState } from "react";
import classnames from "classnames";

import Button, { ButtonVariant } from "components/buttons/Button";
import styles from "./ButtonInput.module.css";

const ButtonInput = forwardRef(
  (
    {
      className,
      onChange,
      onClick,
      autoFocus = false,
      showValidationMessages = false,
      hasErrorState = false,
      disableValidation = false,
      serverValidationMessage,
      style,
      children,
      buttonText,
      inputType = "text",
      buttonType = "button",
      ...rest
    },
    ref
  ) => {
    const [validationMessage, setValidationMessage] = useState(null);

    useEffect(() => {
      if (autoFocus === true && ref?.current) {
        ref.current.focus();
      }
    }, [autoFocus, ref]);

    useEffect(() => {
      if (showValidationMessages && !disableValidation && ref?.current) {
        setValidationMessage(ref.current.validationMessage);
      }
    }, [showValidationMessages, disableValidation, ref]);

    useEffect(() => {
      if (typeof serverValidationMessage === "string" && !!serverValidationMessage) {
        setValidationMessage(serverValidationMessage);
      }
    }, [serverValidationMessage]);

    const handleChange = (e) => {
      if (typeof onChange === "function") {
        onChange(e);
      }
      setValidationMessage(e.target.validationMessage);
    };

    const handleClick = (e) => {
      if (typeof onClick === "function") {
        onClick(e);
      }
    };

    return (
      <>
        <div
          className={classnames(
            styles.textInput,
            className,
            (!!validationMessage || hasErrorState) && styles.hasValidationMessages
          )}
          style={style}
        >
          <input maxLength={255} onChange={handleChange} ref={ref} type={inputType} {...rest} />
          <Button variant={ButtonVariant.tertiary} onClick={handleClick} type="buttonType">
            {buttonText}
          </Button>
        </div>
        {children}
      </>
    );
  }
);

export default ButtonInput;
