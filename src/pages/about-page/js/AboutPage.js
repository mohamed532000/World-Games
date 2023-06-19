import "../css/about.css";
import "../../../globaly-styles.css";
import Ul from "../../../components/ul-list/js/Ul";
import ReadMoreBtn from "../../../components/read-more-btn/Read-more-btn";
import { useEffect } from "react";
import HeadingOfSections from "../../../components/head-of-section/js/Head-of-section";
import { Swiper , SwiperSlide } from "swiper/react";
import PersonCard from "./PersonCard";
import WideBox from "../../../components/wide-box/js/WideBox";
import moment1 from "../../../media/images/moment-1.jpeg";
import moment2 from "../../../media/images/moment-2.jpeg";
import moment3 from "../../../media/images/moment-3.jpeg";
import moment4 from "../../../media/images/moment-4.jpeg";
import CounterBox from "../../../components/counter-box/js/CounterBox";
import 'swiper/css';
import 'swiper/css/navigation';     
function AboutPage(props) {

    useEffect(()=>{
        let list = document.querySelectorAll("ul.ulForAbout li");

        let allAboutTextBoxes = document.querySelectorAll(".text-boxes .text-box");

        list.forEach(li => {

            li.onclick = () => {

                let allActiveTextBoxes = document.querySelectorAll(`.${li.textContent}`);

                list.forEach(li => {
                    li.classList.remove("active");
                });
                li.classList.add("active");

                allAboutTextBoxes.forEach(aboutTextBox => {

                    aboutTextBox.classList.remove("active");

                });
                allActiveTextBoxes.forEach(activeTextBox => {
                    activeTextBox.classList.add("active");
                });
            }
        });
    });


    const params = {
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop : true,
        breakpoints: {
            540: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };

        return (
            <>
                <section className="About-section">
                    <HeadingOfSections title="ABOUT Us" info="You Can Read Some Inforamtion ABout US Here."/>

                    <div className="container">
                        <div className="about-img">
                            <img src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>

                        <div className="parent-text-boxes-and-switch">

                            <Ul ulClassName="ulForAbout" li1="ABOUT" li2="SHEDULE" li3="LOCATION"/>

                            <div className="text-boxes">

                                <div className="text-box one ABOUT active">
                                    <h2>Just design & compose,
                                        cooperating with clients who
                                        want the best for their business
                                    .</h2>
                                    <p>We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years, we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands, Our premise is to always drive a positive change in people, companies and organizations.</p>
                                    <ReadMoreBtn path="#"/>
                                </div>

                                <div className="text-box two SHEDULE active">
                                    <h2>Just design & compose,
                                        cooperating with clients who
                                        want the best for their business
                                    .</h2>
                                    <p>We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years, we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands, Our premise is to always drive a positive change in people, companies and organizations.</p>
                                    <ReadMoreBtn path="#"/>
                                </div>

                                <div className="text-box three LOCATION active">
                                    <h2>Just design & compose,
                                        cooperating with clients who
                                        want the best for their business
                                    .</h2>
                                    <p>We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years, we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands, Our premise is to always drive a positive change in people, companies and organizations.</p>
                                    <ReadMoreBtn path="#"/>
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    <div className="container boxes-container">
                        <CounterBox className="about-box" icon={<i className="fa-brands fa-twitch"></i>} title={`${1300}+`} info="TWITCH STREAMS"/>
                        <CounterBox className="about-box" icon={<i className="fa-brands fa-youtube"></i>} title={`${1050}+`} info="YOUTUBE STREAMS"/>
                        <CounterBox className="about-box" icon={<i className="fa-brands fa-playstation"></i>} title={`${850}+`} info="PAST GAMES"/>
                        <CounterBox className="about-box" icon={<i className="fa-solid fa-people-group"></i>} title={`${350}+`} info="PRO TEAMS"/>
                    </div>

                    <div className="container swiper-container">

                        <HeadingOfSections title="Our Team"/>

                        <Swiper className="about-swiper-line"
                            {...params}
                        >
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/7773807/pexels-photo-7773807.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="BISHO" profileLink={"jack"}/>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/7774032/pexels-photo-7774032.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="JANE MONGE" profileLink={"jack"}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/9071739/pexels-photo-9071739.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="ANDRW" profileLink={"jack"}/>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/7849515/pexels-photo-7849515.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="JACK" profileLink={"jack"}/>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/9072339/pexels-photo-9072339.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="TIM GAREN" profileLink={"jack"}/>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/9071746/pexels-photo-9071746.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="ZACKERY" profileLink={"jack"}/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/7776858/pexels-photo-7776858.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="ANDRY LINCOLN" profileLink={"jack"}/>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/7862239/pexels-photo-7862239.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="DORA SOREN" profileLink={"jack"}/>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <PersonCard img={"https://images.pexels.com/photos/7776850/pexels-photo-7776850.jpeg?auto=compress&cs=tinysrgb&w=600"} personName="TONY JOHANS" profileLink={"jack"}/>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    <div className="container best-moments-container">

                        <HeadingOfSections title="Best Moments"/>

                        <WideBox wideBoxClass="All CS-GO active" matchName={"ESPORT LEAGUE - CS GO DIVISION"} matchDate={"DEC.06.2019 - 02:30 PM"} momentImg={moment1} onImg={true}/>

                        <WideBox wideBoxClass="All CS-GO active" matchName={"ESPORT LEAGUE - CS GO DIVISION"} matchDate={"APR.03.2020 - 10:26 AM"} momentImg={moment4} onImg={true}/>

                        <WideBox wideBoxClass="All CS-GO active" matchName={"ESPORT LEAGUE - FORTNITE"} matchDate={"FEB.13.2020 - 10:26 AM"} momentImg={moment2} onImg={true}/>

                        <WideBox wideBoxClass="All CS-GO active" matchName={"ESPORT LEAGUE - DOTA 2"} matchDate={"DEC.27.2019 - 10:26 AM"} momentImg={moment3} onImg={true}/>
                    </div>
                </section>
            </>
        )
}

export default AboutPage;