import "../css/gellary.css";
import "../../../globaly-styles.css";
import GellaryBox from "./GellaryBox";
import ReadMoreBtn from "../../../components/read-more-btn/Read-more-btn";
import { useEffect } from "react";
import Ul from "../../../components/ul-list/js/Ul";


function Gellary() {

    useEffect(()=>{

        let list = document.querySelectorAll("ul.ulForGellary li");
        let allGellary = document.querySelectorAll(".gellary-container .gellary-box")

        list.forEach(li => {
            li.onclick = ()=>{

                let activeGellary = document.querySelectorAll(`.${li.textContent}`)

                list.forEach(li => {
                    li.classList.remove("active");
                })
                li.classList.add("active");

                allGellary.forEach(gellaryBox => {
                    gellaryBox.classList.remove("active");
                });
                activeGellary.forEach(activeGellary => {
                    activeGellary.classList.add("active")
                })
            };
        });
    },[]);


    return (
        <>
            <section className="gellary-section" id="gellary-section">

                <Ul ulClassName="ulForGellary" li1="All" li2="CS-GO" li3="DOTA-2" li4="FORTNITE" li5="FIFA"/>
                

                <div className="container gellary-container">

                    <GellaryBox boxClassName="All box CS-GO gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img3.jpg"} boxTitle="The last men" boxInfo="At the end of last year"/>

                    <GellaryBox boxClassName="All box CS-GO gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img4.jpg"} boxTitle="The Bridge" boxInfo="At the end of last year"/>

                    <GellaryBox boxClassName="All box DOTA-2 gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img5.jpg"} boxTitle="Sky fall" boxInfo="April 22,2020"/>

                    <GellaryBox boxClassName="All box gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img6.jpg"} boxTitle="Power" boxInfo="At the end of last year"/>
                    
                    <GellaryBox boxClassName="All box gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img8.jpg"} boxTitle="Obpimistc" boxInfo="At the end of last year"/>

                    <GellaryBox boxClassName="All box FORTNITE gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img9.jpg"} boxTitle="Find Bride" boxInfo="At the end of last year"/>

                    <GellaryBox boxClassName="All box FIFA gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img13.jpg"} boxTitle="FIFA Player" boxInfo="At the end of last year"/>

                    <GellaryBox boxClassName="All box CS-GO gellary-box active" boxImg={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img11.jpg"} boxTitle="Games Designer" boxInfo="At the end of last year"/>

                </div>
                <ReadMoreBtn path="#"/>
            </section>
        </>
    )
}


export default Gellary;