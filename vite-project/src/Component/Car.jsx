import React, { useRef } from "react";

function InputFocusExample() {
  const inputRef = useRef(null); // 1️⃣ useRef से reference बनाया

  function handleFocus() {
    inputRef.current.focus(); // 2️⃣ current से input को access किया
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocusExample;
