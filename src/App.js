import './App.css';
import { Routes , Route } from 'react-router-dom';
import { useEffect } from 'react';
import { lazy , Suspense } from 'react';
import LoadingElement from './components/loading-element/js/LoadingElement';
import Nav from './components/nav-bar/js/NavBar';
import Footer from './components/footer/js/Footer';
import ToTopBTN from './components/to-top-btn/js/ToTopBtn';
let Home = lazy(()=> import("./pages/home-page/js/Home"))
let AboutPage = lazy(()=> import("./pages/about-page/js/AboutPage"))
let Gellary = lazy(()=> import("./pages/gellary-page/js/Gellary-page"))
let BlogPage = lazy(()=> import("./pages/blog-page/js/BlogPage"))
let ShopPage = lazy(()=> import("./pages/shop-page/js/ShopPage"))
let ContactPage = lazy(()=> import("./pages/contact-page/js/Contactpage"))
let CartPage = lazy(()=> import("./pages/cart-page/js/CartPage"));
let CheckoutPage = lazy(()=> import("./pages/checkout-page/js/CheckoutPage"));
let ComplatedPage = lazy(()=> import("./pages/complated-order-page/js/ComplatedOrder"));

function App() {

  useEffect(()=>{
    let pathName = (window.location.pathname).split("").filter(el => {
      return el !== "/"
    }).join("");

    let nav = document.querySelector(".nav");
    let toTopBtn = document.querySelector(".to-top");

    let allRoutes = document.querySelectorAll(".nav .container ul li a");
    let listOfLinks = document.querySelector(".nav .container ul")

    allRoutes.forEach(route => {
        route.onclick = ()=>{
            allRoutes.forEach(route => {
            route.classList.remove("active");
            });
            listOfLinks.classList.remove("active");
            route.classList.add("active");
            document.querySelector(".nav-icons i.cart-icon").classList.remove("active");
        }
    });

    window.onload = ()=>{
      pathName !== "" 
      ? 
      document.querySelector(`.${pathName}`).classList.add("active")
      :
      document.querySelector(".Home").classList.add("active")
    };

    window.onscroll = ()=>{
      window.scrollY >= 100 
      ?
      nav.classList.add("on-scrolling")
      :
      nav.classList.remove("on-scrolling");

      window.scrollY >= 200 
      ?
      toTopBtn.classList.add("active")
      :
      toTopBtn.classList.remove("active");
    
    }
    toTopBtn.onclick = () => {
        window.scroll({
          top : 0
        });
    }
    
  },[])
  return (
    <>
      <Nav/>
      <Suspense fallback={<LoadingElement/>}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='About' element={<AboutPage/>} />
          <Route path='Gellary' element={<Gellary/>} />
          <Route path='Blog' element={<BlogPage/>} />
          <Route path='Contact' element={<ContactPage/>} />
          <Route path='Cart' element={<CartPage/>} />
          <Route path='Shop' element={<ShopPage/>} />
          <Route path='Cart/CheckoutPage/Shop' element={<ShopPage/>} />
          <Route path='Cart/CheckoutPage' element={<CheckoutPage/>} />
          <Route path='Cart/CheckoutPage/ComplatedOrder' element={<ComplatedPage/>} />
        </Routes>
      </Suspense>
      <Footer/>
      <ToTopBTN/>
    </>
  );
}
export default App;