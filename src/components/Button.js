const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }} className="btn"></button>
    </div>
  );
};

export default Button;
