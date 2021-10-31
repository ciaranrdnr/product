const Indicator = (props) => {
  return (
    <div className={`Indicator ${props.outline} ${props.fill}`}>
      {props.titleFront} {props.num} {props.titleBack}
    </div>
  );
};
export default Indicator;
