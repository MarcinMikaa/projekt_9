import "./Container.css";
import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";
import { useState } from "react";

function Container() {
  const [data, setData] = useState("");
  const [first, setFirst] = useState(0);
  const [operator, setOperator] = useState("");

  const getValue = (value) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value + operator);
      setFirst(parseInt(data, 10));
      setData("");
    } else if (value === "=") {
      setData(parseInt(data, 10) + first);
    } else if (value === "DEL") {
      setData("");
      setFirst(0);
    } else {
      setData(data + value);
      console.log(first);
      console.log(data);
    }
  };

  console.log(first);
  console.log(data);

  return (
    <div className="container">
      <Display data={data} />
      <Buttons getValue={getValue} />
    </div>
  );
}

export default Container;
