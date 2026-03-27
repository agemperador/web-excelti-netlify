import React from 'react'
import styles from './redes-sociales.module.scss'
import {SocialIcon} from 'react-social-icons'

const RedesSociales = () => {

    return (
        <div className = {styles.container}>
            <SocialIcon className={styles.socialIcon} url="https://www.facebook.com/excelti.traduccion/" network='facebook'  fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} url="mailto:info@excelti.com.ar" network="mailto" fgColor="#000" bgColor='white'/>
            <SocialIcon className={styles.socialIcon} url="https://twitter.com/ExceltiT" network="twitter" fgColor="#fff" />
            <SocialIcon className={styles.socialIcon} url="https://www.instagram.com/excelti_traduccion/" network='instagram' fgColor="#fff"/>
            
        </div>
    )
}

export default RedesSociales
