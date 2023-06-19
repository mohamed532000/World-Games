import '../css/loading-element.css';
import preloaderImg from "../../../media/images/prloader.gif";

function LoadingElement() {
    return (
        <>
        
        <div className="lazy-load-div">
            <img src={preloaderImg} alt="" />
            <h1 className='loading-text'> loading... </h1>
        </div>
        
        </>
    )
}

export default LoadingElement;