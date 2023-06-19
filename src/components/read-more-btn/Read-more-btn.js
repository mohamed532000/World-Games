import "./read-more-btn.css";

function ReadMoreBtn(props) {
    return (
        <>
        
            <a href={props.path} className="read-more"><h4>Read More</h4></a>

        </>
    )
}

export default ReadMoreBtn;