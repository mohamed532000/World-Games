import "../../winner-and-loser.css";
function WinnerBox(props) {
    return (
        <>
            <div className="card win">
                <img src={props.winnerImg} alt=""/>
                <h3>{props.winnerName}</h3>
                <h4>{props.winnerScore}</h4>
            </div>

        </>
    )
}

export default WinnerBox;
