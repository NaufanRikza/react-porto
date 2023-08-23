import ExperienceInfo from "../components/ExperienceInfo";

const generateExperience = (data = []) =>
  data.map((item) => {
    return (
      <>
        <ExperienceInfo content={item} />
      </>
    );
  });

export default generateExperience;
