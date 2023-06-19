import "../css/gellary.css";

function GellaryBox(props) {
    return (
        <>
            <div className={props.boxClassName}>
                <img src={props.boxImg} alt=""/>                
                <div className="box-info">
                    <p>{props.boxDate}</p>
                    <h2>{props.boxTitle}</h2>
                    <p>{props.boxInfo}</p>
                </div>
            </div>
        </>
    )
}

export default GellaryBox;