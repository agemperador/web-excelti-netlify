import React from 'react'
import CardProfessional from '../../components/card-professional/card-professional'
import './professionals.scss'
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";



const Professionals = () => {
    const { t } = useTranslation();

    return (
        <div className='professionals-container'>
            <Banner src={'header/home-banner.jpg'} title={t("ourProfessionals").toUpperCase()} />
            <h2>Tu vieja</h2>

            
            <div className='card-professionals-container'>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
            </div>
        </div>
    )
}

export default Professionals
