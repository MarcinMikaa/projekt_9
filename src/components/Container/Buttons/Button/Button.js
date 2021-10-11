import "./Button.css";

function Button({ value, getValue }) {
  const onClick = () => {
    getValue(value);
  };

  return (
    <div className="button">
      <button value={value} onClick={onClick}>
        <h1>{value}</h1>
      </button>
    </div>
  );
}

export default Button;
