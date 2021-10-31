const Btn = (props) => {
  return (
    <button className="Btn" onClick={props.onClick}>
      {props.title}
    </button>
  );
};
export default Btn;
