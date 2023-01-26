import styled from "styled-components";

interface SrOnlyProps {
  isSrOnly?: boolean;
}

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  opacity: 1;
  pointer-events: visible;
  z-index: 999;
`;

export const StyledBox = styled.div`
  width: 450px;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledHeader = styled.header.attrs(
  (props: SrOnlyProps) => ({})
)<SrOnlyProps>`
  padding: 10px;
  position: ${(props) => (props.isSrOnly ? "absolute" : "")};
  width: ${(props) => (props.isSrOnly ? "1px" : "")};
  height: ${(props) => (props.isSrOnly ? "1px" : "")};
  overflow: ${(props) => (props.isSrOnly ? "hidden" : "")};
`;

export const StyledTitle = styled.h4.attrs(
  (props: SrOnlyProps) => ({})
)<SrOnlyProps>`
  font-weight: bold;
  position: ${(props) => (props.isSrOnly ? "absolute" : "")};
  width: ${(props) => (props.isSrOnly ? "1px" : "")};
  height: ${(props) => (props.isSrOnly ? "1px" : "")};
  overflow: ${(props) => (props.isSrOnly ? "hidden" : "")};
`;

export const StyledContent = styled.div`
  padding: 10px;
  margin: 10px 0px;
  text-align: center;
`;

export const StyledFooter = styled.footer`
  padding: 10px;
  text-align: center;
`;

export const StyledBtn = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: #83aa17;
  font-family: "Source Sans Pro";
  text-align: center;
  &:hover {
    background-color: #6f9112;
  }
`;
