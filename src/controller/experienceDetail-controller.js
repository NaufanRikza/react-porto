const generateExperienceDetails = (data = []) => {
  return data.map((item) => {
    return (
      <>
        <li>{item}</li>
      </>
    );
  });
};

export default generateExperienceDetails;
