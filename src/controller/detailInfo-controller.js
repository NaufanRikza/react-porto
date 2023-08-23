import Biodata from "../components/BioInfo";

const generateBioInfo = (data = []) => {
    const finalData = data.map((item) => {
        return <Biodata header={item.header} value={item.value}/>
    });

    return finalData;
}

export default generateBioInfo;
