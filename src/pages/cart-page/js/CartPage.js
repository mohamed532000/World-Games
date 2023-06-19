import "../css/cart-page.css";
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../project-state-and-actions/AddToCartActions";

function CartPage() {

    let myState = useSelector(state => state);
    let dispatch = useDispatch()

    let totalPrice = myState.AddToCartWorker.reduce((acc , produc)=>{
        produc.price ? acc += produc.price * produc.quantity : acc += produc.id + 200 * produc.quantity
        return acc
    } , 0);

    return(
        <>
            <section className="section-cart">
                <div className="container container-cart">
                    { myState.AddToCartWorker.length !== 0 
                        ? 
                        <>
                            <div className="total-price-and-cheacout-div">
                                <div className="total-price-div">
                                    <h2 className="total-price">Total price:<span>{totalPrice}$</span></h2>
                                </div>
                                <div className="chickout-div">
                                    <Link to="CheckoutPage">Chickout <i className="fa-solid fa-money-check-dollar"></i></Link>
                                </div>
                            </div>
                            <table className="products-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Id</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        myState.AddToCartWorker.map(produc => {
                                                return (
                                                    <>
                                                        <tr key={produc.id}>
                                                            <td>{produc.title}</td>
                                                            <td>{produc.id}</td>
                                                            <td>{produc.description ? produc.description : produc.short_description}</td>
                                                            <td>{produc.price ? produc.price : produc.id + 200} $</td>
                                                            <td>{produc.quantity}</td>
                                                            <td>
                                                                <button className="delete-btn" onClick={()=>{
                                                                    document.querySelector(".popup-deleting").classList.add("active");
                                                                    let agreeBtn = document.querySelector("button.agree-btn");
                                                                    let canselBtn = document.querySelector("button.cansel-btn");
                                                                    
                                                                    agreeBtn.onclick = ()=>{
                                                                        dispatch(deleteProduct(produc));
                                                                    }
                                                                    canselBtn.onclick = ()=>{
                                                                        document.querySelector(".popup-deleting").classList.remove("active");
                                                                    }

                                                                }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>

                            </table>
                        </>

                        : 
                        <>
                            <table className="products-table empty-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Id</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                            </table>
                            <Link to="Shop" className="going-shop-btn" onClick={()=>{
                                document.querySelector(".nav-icons i.cart-icon").classList.remove("active");
                                window.location.pathname = "/Shop"
                            }}>Return To Shop</Link>         
                        </>
                        
                    }
                </div>

                <div className="popup-deleting">
                    <div className="popub-box">
                        
                        <h3 className="deleting-text">delete this product ?</h3>

                        <div className="popub-box-btns">
                            <button className="agree-btn" onClick={()=>{

                                document.querySelector(".popup-deleting").classList.remove("active");
                            }}
                            >Delete</button>

                            <button className="cansel-btn" onClick={()=>{
                                document.querySelector(".popup-deleting").classList.remove("active");
                            }}
                            >cansel</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;