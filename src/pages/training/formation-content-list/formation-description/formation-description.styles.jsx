import styled from "styled-components"


export const FormationDescriptionContainer = styled.div `
    
    min-height: var(--ul-height) ;
    width:100%;
    padding-bottom: 20px ;

    background-color:var(--white);
    border-radius:0;
    transition: all ease-in 0.4s ;
`

export const ContentOverviewContainer = styled.div `
    width: 100%;
    padding: 20px 0;
    
    display: flex;
    flex-direction: row;
    
    justify-content: space-evenly;
    background-color: white;

    @media screen and (max-width: 800px){
        flex-direction: column-reverse;
        align-items:center ;
        text-align: center;
    }

    & img{
        max-width: 250px;
        height: 250px;
        margin: auto 5%;
        
        
        object-fit: contain;

        /* border: solid 2px var(--greenLeaf); */
        box-shadow: 0px 0px 15px 0 #ccc;
        border-radius: 50%;

        @media screen and (max-width: 800px){
            margin-bottom: 20px;
            display: none;
        }
    }


    
`

export const LeftSide = styled.div `
    max-width: 600px;
    box-shadow: 0 0 20px #ccc;

    
    & p{
            border: none;
            width: 100%;
            margin: 10px 0 5px 0;
            @media screen and (max-width: 800px){
                
            }   
    }
    & strong {
        width: 30%;
        padding: 10px ;
        display: flex;
        margin-right:20px ;
        text-align: center;
        @media screen and (max-width: 800px){
                display: block;
                width: 100%;
                max-width: 200px;
            }   
        & h4{
            white-space: nowrap;
            max-height: 70px;
            margin: auto 0;
            padding: 5px;
            display: flex;

            text-align: center;
            
            border-radius: 5px;
            border-bottom: solid 2px var(--green);
            @media screen and (max-width: 800px){
                display: block;
            }   
            &:hover{
                background-color: var(--green); 
            }
            transition: all ease-in 0.1s ;

            
        }
    }
    & span{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 20px auto;
        
        justify-content: flex-start;
        text-align: center;
        align-items: center;
        
        @media screen and (max-width: 800px){
            padding: 0 20px;
            flex-direction: column;
        }
        
    }
`

export const HeadTitleCourse = styled.div `
    background-color: var(--e-color-4);
    padding: 20px 0;

    & span{
        margin: 0 ;
        padding: 5px;
        border: 1px solid var(--white);
    }
    & h1{
        margin: 10px;
        font-size:40px;
    }
`
export const SpanInfoCourse = styled.div `
    min-width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    margin:  auto;
    
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    box-shadow: 0 0 20px #ddd;
    
    & strong {
        display: flex;
        height: 120px;
        width: 100%;
        flex-direction: column;
        padding: 10px ;
        text-align: center;     
    }


    & p{
        width: 300px;
        text-align: left;

        font-size: 13px;
            
    }
`
export const SpanInfoModalidad = styled.div`
    min-width: 350px;
    
    ${({itemVisible}) => itemVisible ? '' :'height:150px'};
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    padding: 5px 10px 20px 10px;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    box-shadow: 0 0 20px #ddd;
    transition: all 0.2s ease-out;
    & strong {
        display: flex;
        height: 120px;
        width: 100%;
        flex-direction: column;
        padding: 10px ;
        text-align: center;     
        transition: all 0.4s ease-out;      
    }


    & p{
        width: 375px;

        text-align: left;
        ${({itemVisible}) => itemVisible ? '' :'height:100px'};
        font-size: 13px;
        overflow-y:hidden;
        transition: all 0.4s ease-out;
        box-shadow:${({itemVisible, isItemLarge}) => itemVisible ? 'none' : isItemLarge? 'inset 0px -15px 15px -20px rgba(0,0,0,0.75) ':'none'}; 

        & a{
            margin-left: 10px ;
            text-decoration:none ;
        }
        @media screen and (max-width: 400px){
            width: 330px;
        }
    }
`

export const IconInfoCourseContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

`


export const ContentInformationContainer = styled.div `

    display: flex;
    flex-wrap: wrap;
    margin-top:20px;
    gap: 10px;

    @media screen and (max-width: 800px){
                gap: 40px;
    }   


    & h4{
        display: flex;
        margin: 10px auto;
        text-align: center;
        height: 50px;

        

        border-radius: 5px;
        
        
    }
`

export const ExtraInfoContent = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 20px ;
`

export const SpanExtraInfo = styled.div `
        width: 100%;
        box-shadow: 0 0 20px #eee;
            & h4{
                height: 80px;
                margin: 5px;
                align-items: center;
            }


`

export const ExtraInfoTitle = styled.div `
    width: 100%;

    display: flex;  
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border: 1px solid var(--greenLeaf);
    box-shadow: 0 0 10px #ddd;
    &:hover{
            box-shadow: 0 0 5px var(--green); 
        }
    transition: all ease-in 0.1s ;
`
export const ArticulatedCoursesList = styled.div `

    text-align: left;
    list-style:none;

    padding-left:5px;
    margin-top:10px;
    
     
    ${({itemActive})=> itemActive ? 
            `
            height: 100% ;
            padding-top: 10px;
            padding-bottom:10px;
            `: 
                        `
            height: 0;
            padding-top: 0;
            padding-bottom:0px;
            `};
    overflow-y: hidden;

    transition: all 0.2s ease-in;

    & li{
        align-items: left;
        margin: 10px 10px ;
        display: flex;
        padding: 5px;
        align-items: center;
        & h5{
            height: 20px;
            margin: 0;
            display: flex;
            padding: 5px 10px ;
            align-items: center;
            border-radius: 5px;
            text-decoration: underline var(--green) 2px;
            cursor: pointer;
            &:hover{
                background-color: var(--green);
            }
            &:active{
                background-color: var(--greenLeaf);
            }
        }
    }

`

export const TeachersListCourse = styled.ul `
    
    list-style:none;
    
    padding-left:5px;
    margin-top:10px;
    
     
    ${({itemActive})=> itemActive ? 
            `
            height: 100% ;
            padding-top: 10px;
            padding-bottom:10px;
            `: 
                        `
            height: 0;
            padding-top: 0;
            padding-bottom:0px;
            `};
    overflow-y: hidden;

    transition: height 0.2s ease-in;

    & li{
        margin: 10px 10px ;
        display: flex;
        padding: 5px;
        
    }
`