function header(props) {
  return (
    <div className="porto-section-container">
      <div className="porto-section-value">
        <p>{props.value}</p>
        <div className="porto-section-underline"></div>
      </div>
    </div>
  );
}

export default header;
