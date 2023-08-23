import Card from "./Card";

function interest(props) {
  const interestBody = (
    <>
      <div className="porto-interest-image">
        <img src={props.imgSrc} alt={props.imgName} />
      </div>

      <div className="porto-interest-value">
        <p>{props.value}</p>
      </div>
    </>
  );
  return (
    <div>
      <Card type="interest" items={interestBody} />
    </div>
  );
}

export default interest;
