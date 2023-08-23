import experienceDetailsGenerator from "../controller/experienceDetail-controller";

function experienceDetails(props) {
  return (
    <div className="porto-experience-details-container">
      <div className="porto-experience-position-name">
        <p>{props.posName}</p>
      </div>

      <div className="porto-experience-company-name">
        <p>{props.companyName}</p>
      </div>

      <div>
        <p>{props.workTime}</p>
      </div>

      <div>
        <ul>{experienceDetailsGenerator(props.details)}</ul>
      </div>
    </div>
  );
}

export default experienceDetails;
