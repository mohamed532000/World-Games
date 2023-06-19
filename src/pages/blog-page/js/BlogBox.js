import ReadMoreBtn from "../../../components/read-more-btn/Read-more-btn";
// import "./css/blog.css";

function BlogBox(props) {
    return (
        <>
            <div className={props.boxClassName}>
                    <img src={props.boxImg} alt=""/>                
                <div className="box-info">
                    <p>{props.boxDate}</p>
                    <h2>{props.boxTitle}</h2>
                    <p>{props.boxInfo}</p>
                </div>
                <ReadMoreBtn path="#"/>
            </div>
        </>
    )
}

export default BlogBox;