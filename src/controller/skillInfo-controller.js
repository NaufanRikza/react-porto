import Skill from "../components/SkillCircularProgress";

const generateSkills = (data = []) => data.map((item) => {
    return (
        <>
            <Skill name = {item.name} id={item.id} value = {item.value}/>
        </>
    )
});

export default generateSkills