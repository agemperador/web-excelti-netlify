import React,{useRef,useEffect,useState} from 'react';
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useOnScreen from '../../../hooks/intersectionObserver';

const InterpretationBanner = ({title,content,image,alt,order,key,extraContent}) => {
    const [ sign,setSign ] = useState((order % 2 === 1) ? {sign:'',orientation:'right'} : {sign:'-',orientation:'left'});
    const { t } = useTranslation();
    const refContainer = useRef();
    const onScreen = useOnScreen(refContainer,'');
    useEffect(()=>{
        if(onScreen){
            refContainer.current.style.transition = '1000ms ease-out all';

            refContainer.current.style.transform = `translateX(0)`;
            refContainer.current.style.opacity = 1;
            
            const transitionON = () =>{
                refContainer.current.style.opacity = 1;
                refContainer.current.style.transition = 'none';
            
                refContainer.current.style.transform = `translateX(0)`;
            }

            refContainer.current.addEventListener('transitionend',transitionON);
        }else{

            refContainer.current.style.transition = '2000ms ease-out all';

            refContainer.current.style.transform = `translateX(${sign.sign}50%)`;
            
            refContainer.current.style.opacity = 0;

            const transitionON = () =>{
                refContainer.current.style.opacity = 0;

                refContainer.current.style.transition = 'none';
            
                refContainer.current.style.transform = `translateX(${sign.sign}50%)`;
            }

            refContainer.current.addEventListener('transitionend',transitionON);    
        }

    },[onScreen])

    return <InterpretationBannerContainer orientation={sign.orientation} underline={order} direction={sign.sign} ref={refContainer}>
            <h2>{title}</h2>
            <img src={image} alt={alt} />
            <Info orientation={sign.orientation} underline={order} >{content} <i>{extraContent}</i></Info>     
        </InterpretationBannerContainer>;
};

export default InterpretationBanner;

const InterpretationBannerContainer = styled.div`
    transform:${props => `translateX(${props.direction}50%)`};
    width: 100%;
    padding: 1% 5%  5% 5%;
    opacity:0;
    
    img{
        margin-top: 5px;
        max-width:100%;
        margin-bottom:5px;
        
        @media (min-width: 1100px) {
            width:  500px;
            max-height: 500px;
            justify-self: center;
            // grid-area: 
            grid-column: ${props => props.orientation == 'right' && '2' || '1'};
            grid-row:1/3; 
            
        }
        object-fit: cover;
        object-position: left top;

    }
    h2{
        text-decoration: ${props => props.underline == 1 && `underline var(--parrotGreen)`};
    }
    @media (min-width: 1100px) {
        display: grid;
        h2{
            grid-column: ${props => props.orientation == 'right' && '1 / 1' || '2/ 2'};
            align-self: end;
            padding-left:10px;
            font-size:2.5em;
            justify-self: center;
        }
    }
`

const Info = styled.div`
    text-align: left;
    line-height:1.5;
    @media (min-width: 1100px) {
        grid-column: ${props =>  props.orientation == 'right' && '2 / 1' || '2/ 2'};
        align-self: start;
        justify-self: center;
        padding-left:10px;
        max-width:700px;
    }
`