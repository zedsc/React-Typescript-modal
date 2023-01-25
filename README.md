# React Typescript modal

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

Basic reusable and customizable modal for React apps.

## Installation

- Install [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) on your system
- Run `npm i @zious/react-typescript-modal`
- Import

```js
import { Modal } from "@zious/react-typescript-modal";
```

## Configuration

Required props:

- `showModal`: boolean from a useState
- `hideModal`: function to set boolean from useState in order to close or hide modal

Optional props:

- `srDisplay`: boolean to set title and header visibility
- `title`: string to add title
- `content`: string or ReactNode to add content
- `btnContent`: string or ReactNode to add button content
- `headerStyle`: object with css styles to custom header
- `titleStyle`: object with css styles to custom title
- `boxStyle`: object with css styles to custom container
- `modalStyle`: object with css styles to custom wrapper including background effects
- `contentStyle`: object with css styles to custom content
- `footerStyle`: object with css styles to custom footer
- `btnStyle`: object with css styles to custom button

## Example

```jsx
const YourComponent = () => {
  const [show, setShow] = React.useState<boolean>();

  return (
    <>
      <button onClick={() => setShow(true)}>Show modal</button>
      <Modal
        showModal={show}
        title="Your modal title"
        content="Your modal content"
        btnContent="Next ➡ "
        hideModal={() => setShow(false)}
      />
    </>
  );
};

export default YourComponent;
```

## Built with

[React](https://reactjs.org/)

A JavaScript library for building user interfaces
