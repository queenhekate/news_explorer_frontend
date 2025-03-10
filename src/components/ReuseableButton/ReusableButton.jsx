const ReusableButton = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ReusableButton;
