import "./Buttons.css";
import Button from "./Button/Button";
// import { useState } from "react";

function Buttons({ getValue, getAction }) {
  return (
    <div className="buttons">
      <div className="row">
        <Button value="DEL" getValue={getValue} />
        <Button value="x" getValue={getValue} />
        <Button value="x" getValue={getValue} />
        <Button value="/" getValue={getValue} />
      </div>

      <div className="row">
        <Button value="1" getValue={getValue} />
        <Button value="2" getValue={getValue} />
        <Button value="3" getValue={getValue} />
        <Button value="*" getValue={getValue} />
      </div>
      <div className="row">
        <Button value="4" getValue={getValue} />
        <Button value="5" getValue={getValue} />
        <Button value="6" getValue={getValue} />
        <Button value="+" getValue={getValue} />
      </div>
      <div className="row">
        <Button value="7" getValue={getValue} />
        <Button value="8" getValue={getValue} />
        <Button value="9" getValue={getValue} />
        <Button value="-" getValue={getValue} />
      </div>
      <div className="row">
        <Button value="." getValue={getValue} />
        <Button value="0" getValue={getValue} />
        <Button value="," getValue={getValue} />
        <Button value="=" getValue={getValue} />
      </div>
    </div>
  );
}

export default Buttons;
