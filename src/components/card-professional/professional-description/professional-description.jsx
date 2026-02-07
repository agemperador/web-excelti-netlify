import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const ProfessionalDescription = ({professions}) =>{
    const { t } = useTranslation();

    const colors ={
        [t("traductora")]:'var(--blue)',
        [t("interpreter")]:'var(--parrotGreen)',
        [t("teacher")]: 'var(--green)',
        [t("leader")]: '#959500',
        [t("traductor")]:'var(--blue)',
    }
      

    return (
        <ProfessionlDefinition>
            {
                professions.map((profession, i) =>(
                    (i + 1 == professions.length) ? <Color key={profession} 
                                                           type={colors[profession]}>
                                                           {` ${profession}.`}
                                                    </Color>
                                                    :<Color key={profession}
                                                            type={colors[profession]}>
                                                            {` ${profession},`}
                                                    </Color>
                ))
            }
        </ProfessionlDefinition>
    )
}

export default ProfessionalDescription;

const ProfessionlDefinition =  styled.span`
    display:flex;
    flex-direction:row;   
    flex-wrap:wrap ;
    text-align: center ;
    justify-content: center ;
`
const Color =  styled.div`
    color:${(props) => props.type};
    font-weight:400;
    font-size:15px;
    margin:auto;
    margin:2px;
    text-align: center ;
`