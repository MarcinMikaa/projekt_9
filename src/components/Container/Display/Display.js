import "./Display.css";

function Display({ data }) {
  return (
    <div className="display">
      <span>{data}</span>
    </div>
  );
}

export default Display;
