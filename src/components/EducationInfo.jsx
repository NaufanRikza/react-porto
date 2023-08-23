function education() {
  const imgLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/2036px-Logo_Universitas_Brawijaya.svg.png";
  return (
    <div>
      <div className="porto-detail-education-header">
        <p>Education</p>
      </div>
      <div className="porto-detail-education-campus-logo">
        <img src={imgLink} alt="campus logo"></img>
      </div>
      <div className="porto-detail-education-campus-name">
        <p>
          Bachelor's degree
          <br />
          in Electrical Engineering <br />
          Brawijaya University
        </p>
      </div>
    </div>
  );
}

export default education;
