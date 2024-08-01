import { useEffect, useRef } from "react";
export function InputWithLabel(props) {
  const inputRef = useRef();
  console.log(inputRef.current);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="todoType">{props.children}</label>
      <input
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        name="title"
        id="todoTitle"
        ref={inputRef}
      />
    </>
  );
}
