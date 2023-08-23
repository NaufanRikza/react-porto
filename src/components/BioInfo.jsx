function bio(props) {
    return(
        <div className="porto-bioinfo-container">
            <p className="porto-bioinfo-header">{props.header}</p>
            <p className="porto-bioinfo-value">{props.value}</p>
        </div>
    );
}

export default bio