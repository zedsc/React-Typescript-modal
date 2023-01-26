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

- `srOnly`: boolean to set title and header visibility
- `title`: string to add title
- `content`: string or ReactNode to add content
- `btnContent`: string or ReactNode to add button content

### Customization/styling

With classnames:

- `modalClassName`: custom wrapper (including background effects) with your own classnames
- `boxClassName`: custom container with your own classnames
- `headerClassName`: custom header with your own classnames
- `titleClassName`: custom title with your own classnames
- `contentClassName`: custom modal content with your own classnames
- `footerClassName`: custom footer with your own classnames
- `btnClassName`: custom button with your own classnames

With inline styles:

- `modalStyle`: object with css styles to custom wrapper (including background effects)
- `boxStyle`: object with css styles to custom container
- `headerStyle`: object with css styles to custom header
- `titleStyle`: object with css styles to custom title
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

### Overriding existing styles

If styling with classnames doesn't seem to work properly, you can try to bump specificity as follow:

```css
.yourClassName.yourClassName {
  background-color: blue;
}
```

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
        btnClassName="yourClassName"
      />
    </>
  );
};

export default YourComponent;
```

## Built with

[React](https://reactjs.org/)

A JavaScript library for building user interfaces
