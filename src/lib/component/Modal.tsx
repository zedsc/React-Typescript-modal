import React, { ReactNode } from "react";
import { useEffect } from "react";
import styles from "./modal.module.css";

type ModalProps = {
  srDisplay?: boolean;
  title?: string;
  content?: string | ReactNode;
  btnContent?: string | ReactNode;
  headerStyle?: object;
  titleStyle?: object;
  boxStyle?: object;
  modalStyle?: object;
  contentStyle?: object;
  footerStyle?: object;
  btnStyle?: object;
  showModal: boolean | undefined;
  hideModal: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({
  srDisplay,
  showModal,
  hideModal,
  title,
  content,
  btnContent,
  headerStyle,
  titleStyle,
  boxStyle,
  modalStyle,
  contentStyle,
  footerStyle,
  btnStyle,
}: ModalProps) => {
  const [isSrOnly, setIsSrOnly] = React.useState<boolean | undefined>(true);
  const [titleClass, setTitleClass] = React.useState<string>(
    styles.modalTitle + " " + styles.srOnly
  );
  const [headerClass, setHeaderClass] = React.useState<string>(
    styles.modalHeader + " " + styles.srOnly
  );

  useEffect(() => {
    setIsSrOnly(srDisplay);
    if (isSrOnly === false) {
      setTitleClass(styles.modalTitle);
      setHeaderClass(styles.modalHeader);
    } else {
      setTitleClass(styles.modalTitle + " " + styles.srOnly);
      setHeaderClass(styles.modalHeader + " " + styles.srOnly);
    }
  }, [isSrOnly, srDisplay]);

  return showModal ? (
    <>
      <div className={styles.modal} style={modalStyle}>
        <div className={styles.modalBox} style={boxStyle}>
          <header className={headerClass} style={headerStyle}>
            <h4 className={titleClass} style={titleStyle}>
              {title}
            </h4>
          </header>
          <div className={styles.modalBody} style={contentStyle}>
            {content}
          </div>
          <footer className={styles.modalFooter} style={footerStyle}>
            <button
              className={styles.btnModal}
              style={btnStyle}
              onClick={hideModal}
            >
              {btnContent}
            </button>
          </footer>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
