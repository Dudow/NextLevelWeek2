import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={Logo} alt="Logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} alt="" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-class" className="give-classes">
                    <img src={giveClasses} alt="Dar aulas"/>
                    Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões realizadas 
                    <img src={purpleHeart} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing