function circularProgress(props) {
  //   return props.id !== 8 ? (
  //     <div className="porto-skills-container">
  //       <div className="porto-skills-progress">
  //         <span className="porto-skills-value">{props.name}</span>
  //       </div>
  //     </div>
  //   ) : (
  //     <div className="porto-skills-container">
  //       <div className="porto-skills-progress">
  //         <p className="porto-skills-value">{props.name}</p>
  //       </div>
  //     </div>
  //   ) ;
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "190px",
    height: "190px",
    borderRadius: "50%",
    color: "#fafafa",
    fontSize: "18px",
    textAlign: "center",
    background: `radial-gradient(closest-side, var(--bg-color) 79%, transparent 80% 100%),
  conic-gradient(var(--primary-color) ${props.value}%, var(--progress-bg) 0)`,
  };

  return (
    <div className="porto-skills-container">
      <div style={style}>
        <p className="porto-skills-value">{props.name}</p>
      </div>
    </div>
  );
}

export default circularProgress;
