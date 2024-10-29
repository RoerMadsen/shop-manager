import { useState } from "react";
import EffectHook from "./EffectHook";

function testReact() {
  const minInfo = {
    firstName: "Amanda"
  };
  return (
    //call-er childcomponent
    <>
      <TestPropsKomponent propName={minInfo.firstName} />
      <hr />
      <TestState />
      <hr />
      <EffectHook />
    </>
  );
}

function TestPropsKomponent({ propName }) {
  return (
    <>
      <h1>Mit Navn er {propName}</h1>
      <h2>Test af props</h2>
    </>
  );
}

function TestState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Test af useState med knap</h2>
      <button onClick={() => setCount(count + 1)}>
        Du har klikket {count} gange!
      </button>
    </>
  );
}

export default testReact;
