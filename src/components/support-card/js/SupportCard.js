import "../css/support-card.css";
function SupportCard(props) {
    return (
        <>
            <div className={`support-card ${props.className}`}>
                <img src={props.img} alt=""/>
                <div className="icon">{props.icon}</div>
                <h3 className="box-title">{props.title}</h3>
                <p className="box-info">{props.info}</p>
            </div>
        </>
    )
}
export default SupportCard;