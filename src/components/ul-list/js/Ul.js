import "../css/ul.css";
import "../../../globaly-styles.css"

function Ul(props) {
    
    return (
        <>
            <ul className={props.ulClassName}>
                <li className="active">{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>
                <li>{props.li5}</li>
                <li>{props.li6}</li>
            </ul>
        </>
    );
}
export default Ul;