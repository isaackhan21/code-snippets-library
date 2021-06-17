const Button = ({ color, text, onClick }) => {
  return (
    <div className="button">
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
