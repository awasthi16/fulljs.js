// Child.js
export default function Child({ onSend }) {
  return (
    <button onClick={() => onSend("Hello from Child!")}>
      Send Message to Parent
    </button>
  );
  
}



  // Parent.js
import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child onSend={handleMessage} />
      <p>Message from child: {message}</p>
    </div>
  );
}








