import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchLatestEpiodes } from "../rtk/Slices/LatestEpisodes-Slice";

import { Swiper,SwiperSlide } from "swiper/react";

function LatestEpisodes(){
    const dispatch = useDispatch()

    const {}= useSelector((state)=>state.animeLatestEp)


    return(
        <></>
    )
}