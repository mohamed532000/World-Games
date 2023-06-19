import "../css/head-of-section.css"
function HeadingOfSections(props) {
    
    return (
        <>
            <div className="heading ">
                <h2 className="section-title">{props.title}</h2>
                <p className="section-info">{props.info}</p>
            </div>

        </>
    )
}

export default HeadingOfSections;