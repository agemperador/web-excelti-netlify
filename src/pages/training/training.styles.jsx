import styled from "styled-components";


export const TrainingContainer = styled.div `

    margin-top: 80px;
    padding: 30px 10px;

    &.subtitle{
        display: flex ;
        margin: auto ;
    }
    
    & p{
        font-size:14px; 
        overflow-wrap: break-word; 
    }

    @media screen and (max-width: 700px){
        padding:0
    }
    `

export const CoachingList = styled.ul `
    list-style:none;
    margin-top:40px;
    width:100%;
    `

export const CoachingItem = styled.li `
    padding:20px;
    margin: 40px auto;
    background-color:var(--blue);
    text-align:center;
    width:80%;
    cursor:pointer;
    
    @media screen and (max-width:400px){
        width:100%;
        margin: 40px 0;
    }
    
    &:hover{
        background-color: var(--greenLeaf);
    }
    
    & span{
        margin:auto;
        background-color: white;
        display:flex;
        font-size:14px;
        height:${({itemActive})=> itemActive ? '50px': '0'};
        overflow-y:hidden;
        transition: 0.2s ease-in all;
    }
`

    
export const TrainingSliderContainer =styled.div`
        /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
    display: flex;
    width:100% ;
    height: 300px;
    gap: 10px;
    justify-content: center;
    padding: 0 0 8% 0;
    margin: auto;
    margin-bottom: 200px;
    @media screen and (max-width: 700px) {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr ;
        flex-direction: column;
        width:100% ;
        height: auto ;
        padding: auto ;
        margin-bottom: 50px ;
    }
`