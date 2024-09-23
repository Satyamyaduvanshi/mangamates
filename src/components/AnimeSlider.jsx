import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {fetchTopAnime} from "../rtk/slices/anime-top-slice"