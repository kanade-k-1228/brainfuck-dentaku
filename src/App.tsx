import { useState } from "react";
import { BrainFuck } from "./brainfuck";

const bf = new BrainFuck();

export function App() {
  const [update, setUpdata] = useState<boolean>(false);
  return (
    <div>
      <button>,</button>
      <button>.</button>
      <button
        onClick={() => {
          bf.increment();
          setUpdata(update ? false : true);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          bf.decrement();
          setUpdata(update ? false : true);
        }}
      >
        -
      </button>
      <div>
        <div>{bf.memLeft}</div>
        <button
          onClick={() => {
            bf.left();
            setUpdata(update ? false : true);
          }}
        >
          &gt;
        </button>
        <div>{bf.register}</div>
        <button
          onClick={() => {
            bf.right();
            setUpdata(update ? false : true);
          }}
        >
          &lt;
        </button>
        <div>{bf.memRight}</div>
      </div>
    </div>
  );
}
