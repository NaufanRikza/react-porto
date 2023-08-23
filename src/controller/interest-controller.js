import Interest from "../components/InterestInfo";

const generateInterest = (data = []) => {
  const finalData = data.map((item) => {
    const { imgSrc, imgName, value } = item;
    return <Interest imgSrc={imgSrc} imgName={imgName} value={value} />;
  });

  return finalData;
};

export default generateInterest;
