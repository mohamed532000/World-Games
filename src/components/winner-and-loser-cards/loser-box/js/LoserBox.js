import "../../winner-and-loser.css";
function LoserBox(props) {
    return (
        <>
            <div className="card loser">
                <img src={props.loserImg} alt=""/>
                <h3>{props.loserName}</h3>
                <h4>{props.loserScore}</h4>
            </div>

        </>
    )
}

export default LoserBox;