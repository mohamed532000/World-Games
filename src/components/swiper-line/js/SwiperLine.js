import React from 'react';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Pagination , Navigation} from 'swiper';
import StreamCard from '../../stream-card/js/SwiperCard';


function StreamCardsSwiper () {
    const params = {
        spaceBetween: 10,
        slidesPerView: 1,
        loop : true,
        modules : [Navigation , Pagination],
        
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
        <Swiper {...params}>
            <SwiperSlide className='my-slide'>
                <StreamCard img={"https://images.pexels.com/photos/7047002/pexels-photo-7047002.jpeg?auto=compress&cs=tinysrgb&w=600"} title="eSports League - CS GO Division" groubsCount={8} playersCount={72} prize="Prize Pool" prizeCount={"7500$"} streamDate={"NOV.27.2022-02:12 PM"}/>
            </SwiperSlide>

            <SwiperSlide className="slide-box">
                <StreamCard img={"https://images.pexels.com/photos/7047302/pexels-photo-7047302.jpeg?auto=compress&cs=tinysrgb&w=600"} title="eSports League - CS GO Division" groubsCount={8} playersCount={72} prize="Prize Pool" prizeCount={"7500$"} streamDate={"NOV.27.2022-02:12 PM"}/>
            </SwiperSlide>

            <SwiperSlide className="slide-box">
                <StreamCard img={"https://images.pexels.com/photos/7848992/pexels-photo-7848992.jpeg?auto=compress&cs=tinysrgb&w=600"} title="Team League - Fortnite Game" groubsCount={6} playersCount={52} prize="Prize Pool" prizeCount={"2200$"} streamDate={"MAR.30.2020-06:12 PM"}/>
            </SwiperSlide>

            <SwiperSlide className="slide-box">
                <StreamCard img={"https://images.pexels.com/photos/7858750/pexels-photo-7858750.jpeg?auto=compress&cs=tinysrgb&w=600"} title="Club League - PUPG Game" groubsCount={5} playersCount={39} prize="Prize Pool" prizeCount={"6000$"} streamDate={"OCT.24.2021-10:12 AM"}/>
            </SwiperSlide>

            <SwiperSlide className="slide-box">
                <StreamCard img={"https://images.pexels.com/photos/9072371/pexels-photo-9072371.jpeg?auto=compress&cs=tinysrgb&w=600"} title="Club League - Free Fire Game" groubsCount={5} playersCount={38} prize="Prize Pool" prizeCount={"5100$"} streamDate={"SEP.22.2021-05:12 PM"}/>
            </SwiperSlide>
                
            <SwiperSlide className="slide-box">
                <StreamCard img={"https://images.pexels.com/photos/7773393/pexels-photo-7773393.jpeg?auto=compress&cs=tinysrgb&w=600"} title="eSports League - FIFA Game" groubsCount={3} playersCount={22} prize="Prize Pool" prizeCount={"3200$"} streamDate={"ABR.22.2021-05:12 PM"}/>
            </SwiperSlide>
        </Swiper>
        </>
    );
};

export default StreamCardsSwiper;




















