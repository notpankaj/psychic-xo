import React,{useContext} from 'react'
import Dropdown from '../components/Dropdown'

import { KernelContext } from "../kernelContext"

function Header() {
    const { kernel } = useContext(KernelContext)


    return (
        <header className="header">
            <div className="header__logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} className="header__logo-img" alt="logo" />
                <span className="header__logo-title">Psychic</span>
            </div>
            <span className="header__active-eingne"> {kernel?.activeEngine}</span>
            <div className="dropdown__container">
                <Dropdown/>
            </div>

        </header>
    )
}

export default Header
