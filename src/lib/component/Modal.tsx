import React, { ReactNode } from "react";
import {
  StyledBox,
  StyledBtn,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledModal,
  StyledTitle,
} from "./modal.styled";

type ModalProps = {
  showModal: boolean | undefined;
  hideModal: React.MouseEventHandler<HTMLButtonElement>;
  srOnly?: boolean;
  title?: string;
  content?: string | ReactNode;
  btnContent?: string | ReactNode;
  modalStyle?: object;
  boxStyle?: object;
  headerStyle?: object;
  titleStyle?: object;
  contentStyle?: object;
  footerStyle?: object;
  btnStyle?: object;
  modalClassName?: string;
  boxClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  btnClassName?: string;
};

const Modal = ({
  srOnly,
  showModal,
  hideModal,
  title,
  content,
  btnContent,
  modalStyle,
  boxStyle,
  headerStyle,
  titleStyle,
  contentStyle,
  footerStyle,
  btnStyle,
  modalClassName,
  boxClassName,
  headerClassName,
  titleClassName,
  contentClassName,
  footerClassName,
  btnClassName,
}: ModalProps) => {
  return showModal ? (
    <>
      <StyledModal className={modalClassName} style={modalStyle}>
        <StyledBox className={boxClassName} style={boxStyle}>
          <StyledHeader className={headerClassName} style={headerStyle}>
            <StyledTitle
              className={titleClassName}
              style={titleStyle}
              isSrOnly={srOnly}
            >
              {title}
            </StyledTitle>
          </StyledHeader>
          <StyledContent className={contentClassName} style={contentStyle}>
            {content}
          </StyledContent>
          <StyledFooter className={footerClassName} style={footerStyle}>
            <StyledBtn
              className={btnClassName}
              style={btnStyle}
              onClick={hideModal}
            >
              {btnContent}
            </StyledBtn>
          </StyledFooter>
        </StyledBox>
      </StyledModal>
    </>
  ) : (
    <></>
  );
};

export default Modal;
