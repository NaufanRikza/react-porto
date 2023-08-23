import ExperienceIcon from "./ExperienceIcon";
import ExperienceDetails from "./ExperienceDetails";

function experience(props) {
  return props.content.id !== 4 ? (
    <div className="porto-experience-container">
      <ExperienceIcon
        imgSrc={props.content.icon.imgSrc}
        name={props.content.icon.name}
      />
      <ExperienceDetails
        posName={props.content.posName}
        companyName={props.content.companyName}
        workTime={props.content.workTime}
        details={props.content.details}
      />
    </div>
  ) : (
    <div
      className="porto-experience-container"
      id="porto-experience-detail-last"
    >
      <ExperienceIcon
        imgSrc={props.content.icon.imgSrc}
        name={props.content.icon.name}
      />
      <ExperienceDetails
        posName={props.content.posName}
        companyName={props.content.companyName}
        workTime={props.content.workTime}
        details={props.content.details}
      />
    </div>
  );
}

export default experience;
