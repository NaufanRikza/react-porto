import "./App.css";
import portoImage from "./assets/cv-photo.jpg";
import Card from "./components/Card";
import Education from "./components/EducationInfo";
import bioItemsGenerator from "./controller/detailInfo-controller";
import SectionHeader from "./components/sectionHeader";
import interestItemGeneartor from "./controller/interest-controller";
import utils from "./utilities/utils";
import experienceGenerator from "./controller/experience-controller";
import skillsItemGenerator from "./controller/skillInfo-controller";

function App() {
  return (
    <div className="porto-app">
      <div className="porto-app-header">
        <p>ABOUT ME</p>
      </div>

      <div class="porto-who-am-i">
        <p>Who Am I?</p>
      </div>

      <div className="porto-photo-container">
        <img src={portoImage} alt="porto-images" />
      </div>

      <div className="porto-introduction">
        <p>
          Driven by a curiosity for technology and a passion for programming,
          <br />I am an aspiring software engineer with two years of
          professional experience.
        </p>
      </div>

      <div className="porto-detail-info">
        <Card type="detailInfo" items={<Education />} />
        <Card type="detailInfo" items={bioItemsGenerator(utils.bioItems)} />
      </div>

      <div className="porto-section-header">
        <SectionHeader value="INTEREST" />
      </div>

      <div className="porto-interest">
        {interestItemGeneartor(utils.interestItems)}
      </div>

      <div className="porto-section-header">
        <SectionHeader value="EXPERIENCE" />
      </div>

      <div className="porto-experience">
        {experienceGenerator(utils.experienceItem)}
      </div>

      <div className="porto-section-header">
        <SectionHeader value="SKILLS" />
      </div>

      <div className="porto-skills">
        {skillsItemGenerator(utils.skillsItem)}
      </div>
    </div>
  );
}

export default App;
