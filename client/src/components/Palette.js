import { send } from "../socketApi";
import { useState } from "react";
function Palette({ activeColor }) {
  const [color, setColor] = useState(activeColor);
  return (
    <>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Select</button>
    </>
  );
}
export default Palette;
