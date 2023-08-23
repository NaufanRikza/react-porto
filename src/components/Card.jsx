function card(props) {
  switch (props.type) {
    case "detailInfo":
      return (
        <div className="porto-detail-card">
          <div className="porto-detail-container">
            <div className="porto-detail-items">{props.items}</div>
          </div>
        </div>
      );

    case "interest":
      return (
        <div className="porto-interest-card">
          <div className="porto-interest-container">
            <div className="porto-interest-items">{props.items}</div>
          </div>
        </div>
      );

    default:
      return;
  }
}

export default card;
