import "./share.css";
import { Swiper , SwiperSlide } from "swiper/react";
import HeadingOfSections from "../head-of-section/js/Head-of-section";
import ShareBox from "./Share-box";

function ShareLine() {


    const params = {
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop : true,
        breakpoints: {
            420: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            670: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        }
};


    return (
        <>
            <div className="share-section">
                <div className="container share-container">
                    <HeadingOfSections title={<h2>Share With <span className="player-word">#Player</span></h2>}/>
                </div>
                <Swiper {...params} className="share-line-swiper">

                    <SwiperSlide >
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img3.jpg"} className="share-box"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img4.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img5.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img6.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img8.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img9.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img10.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img11.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img12.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img13.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img14.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img15.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img16.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img17.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img18.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img19.jpg"} className="share-box"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShareBox img={"https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img20.jpg"} className="share-box"/>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default ShareLine;