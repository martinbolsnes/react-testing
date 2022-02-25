import React, { useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState();
  return (
    <>
      <h1>Hello World</h1>
      {isOpen ? <p>Open is true</p> : <p>Not open</p>}
      <button onClick={() => setOpen(!isOpen)}>Click me</button>
    </>
  );
}

export default Header;
