import { useState } from 'react';
import Counter1 from './Counter1';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // Increase the count by 1
  }

  return (
    <div>
      <button onClick={handleClick}>
        Clicked {count}times
      </button>
      <Counter1 count={count} />
    </div>
  );
}

export default Counter;
