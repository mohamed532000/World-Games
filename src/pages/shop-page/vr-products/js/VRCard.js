import "../css/vr-card.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../project-state-and-actions/AddToCartActions";

function VRCard(props) {
    let vrCard = props;
    let dispatch = useDispatch();
    return (
        <>
        
        <div className={`${vrCard.cetogryClass} VR-card`} >
            <div className="VR-img">
                <img src={vrCard.image2} alt="" className="first-img"/>
                <img src={vrCard.image} alt="" className="second-img"/>
                <div className="VR-cover">
                    <i className="fa-solid fa-magnifying-glass search-icon" 
                    onMouseOver={()=>{
                        document.querySelectorAll(".search-icon").forEach(icon => icon.onclick = () => document.querySelector(".search-div").classList.add("active"));
                    }}></i>
                    <i className="fa-solid fa-heart love" 
                    onMouseOver={()=>{
                        document.querySelectorAll(".love").forEach(icon => icon.onclick = () => icon.classList.toggle("active"))
                    }}></i>
                </div>
            </div>

            <div className="VR-info">
                <h2 className="vr-name">{vrCard.title}</h2>
                <p className="vr-rate">Rating: {vrCard.rate}</p>
                <p className="vr-about">{vrCard.description}</p>
                <div className="price-and-add-to-cart">
                    <h3 className="vr-price">{vrCard.price}</h3>
                    <button className="add-to-cart" onClick={()=>{

                        dispatch(addProduct({
                                            id : vrCard.id ,
                                            title : vrCard.title ,
                                            description : vrCard.description , 
                                            price : vrCard.price
                                            }));
                                    
                    }}>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default VRCard;