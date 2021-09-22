import {  googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth'
import React, { useRef, useContext } from "react";
import { useEffect } from 'react/cjs/react.development';


import { Link } from 'react-router-dom';
import { UserContext } from "../userContext"
import { KernelContext } from "../kernelContext"

function Dropdown() {

    const { user, setUser } = useContext(UserContext)
    const { kernel, setKernel } = useContext(KernelContext)
    const dropBtn = useRef();
    const menuWrapper = useRef();
    const menuBar = useRef();
    const settingDrop = useRef();
    const helpDrop = useRef();
    const settingItem = useRef();
    const helpItem = useRef();
    const backSettingBtn = useRef();
    const backHelpBtn = useRef();
    const ThemeRef = useRef();
    const ThemeDropRef = useRef();


    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        setUser(res);
    }

    const handleKernelEngineChange = engine => {

        if (engine === 'google') {
            setKernel({ activeEngine: "google", currentPopup: null })
            localStorage.removeItem('kernel')
            localStorage.setItem('kernel', JSON.stringify({ activeEngine: "google", currentPopup: null }))
        } else if (engine === 'yahoo') {
            setKernel({ activeEngine: "yahoo", currentPopup: null })
            localStorage.removeItem('kernel')
            localStorage.setItem('kernel', JSON.stringify({ activeEngine: "yahoo", currentPopup: null }))
        } else if (engine === 'duckduckgo') {
            setKernel({ activeEngine: "duckduckgo", currentPopup: null })
            localStorage.removeItem('kernel')
            localStorage.setItem('kernel', JSON.stringify({ activeEngine: "duckduckgo", currentPopup: null }))
        } else if (engine === 'being') {
            setKernel({ activeEngine: "being", currentPopup: null })
            localStorage.removeItem('kernel')
            localStorage.setItem('kernel', JSON.stringify({ activeEngine: "being", currentPopup: null }))
        }
        menuBar.current.style.marginLeft = "0px";
        settingDrop.current.style.display = "none";
        closeMenu();
    }

    const openMegaQuery = () => {
        if (kernel) {
            setKernel(
                {
                    ...kernel,
                    currentPopup: 'megaQuery'
                })
            document.body.classList.add('blur');
        }
    }

    const openAddMarker = () => {
        if (kernel) {
            setKernel(
                {
                    ...kernel,
                    currentPopup: 'AddMarker'
                })
            document.body.classList.add('blur');
        }
    }


    useEffect(() => {
        const posibleUser = JSON.parse(localStorage.getItem('mew'));
        setUser(posibleUser);
    }, []);



    const logoutUser = () => {
        localStorage.removeItem('mew');
        setUser(null);
        menuWrapper.current.classList.remove('show');
        console.log("LOGOUT SUCCESS")
    }


    const openMenu = () => {
        dropBtn.current.classList.toggle('active')
        menuWrapper.current.classList.toggle('show')
    }

    const closeMenu = () => {
        dropBtn.current.classList.remove('active')
        menuWrapper.current.classList.remove('show')
    }

    const HexModeStop = () => {
        document.body.classList.remove('HEX');
        document.body.style.background = '#ececec';
        localStorage.setItem('mode','ZEN');
        menuBar.current.style.marginLeft = "0px";
        ThemeDropRef.current.style.display = "none";
        menuWrapper.current.classList.remove('show');

    }

    const HexModeOn = () => {
        document.body.classList.add('HEX');
        document.body.style.background = '#121212';
        localStorage.setItem('mode','HEX');

        menuBar.current.style.marginLeft = "0px";
        ThemeDropRef.current.style.display = "none";
        menuWrapper.current.classList.remove('show');
    }

    const reboot = () => {
        console.log("REBOOTING")
        localStorage.setItem('kernel','{"activeEngine":"google","currentPopup":null}');
        localStorage.setItem('colorScheme','#ececec');
        localStorage.setItem('mode','ZEN');
        localStorage.removeItem('mew');
        if (kernel) {
            setKernel(
                {
                    activeEngine: "google",
                    currentPopup: null
                })
        }
        window.location.reload();

        
    }


    return (<nav>

        <button ref={dropBtn} className="drop-btn " onClick={openMenu} >
            <i className="fas fa-cog"></i>
        </button>




        <div ref={menuWrapper} onMouseLeave={closeMenu} className="wrapper">
            <ul ref={menuBar} className="menu-bar">
                {
                    user ?
                        <li>
                            <a href="#" >
                                <div className="icon"> <span className="fas fa-user"></span></div>
                                {user.displayName}
                            </a>
                        </li>
                        : <li>
                            <a href="#" onClick={() => handleOnClick(googleProvider)}>
                                <div className="icon"> <span className="fas fa-user"></span></div>
                                Google Login
                            </a>
                        </li>
                }

                <li>
                    <a href="#" onClick={openMegaQuery}>
                        <div className="icon"> <span className="fas fa-globe-asia"></span></div>
                        Mega Query
                    </a>
                </li>
                <li ref={settingItem} onClick={() => {
                    menuBar.current.style.marginLeft = "-200px";
                    setTimeout(() => {
                        settingDrop.current.style.display = "block";
                    }, 100)
                }} className="setting-item">
                    <a href="#">
                        <div className="icon"> <span className="fas fa-cog"></span></div>
                        Switch engine <i className="fa fa-angle-right"></i>
                    </a>
                </li>
                <li ref={helpItem} onClick={() => {
                    menuBar.current.style.marginLeft = "-200px";
                    setTimeout(() => {
                        helpDrop.current.style.display = "block";
                    }, 100)
                }} className="help-item">
                    <a href="#">
                        <div className="icon"> <span className="fas fa-bullseye"></span></div>
                        Actions <i className="fa fa-angle-right"></i>
                    </a>
                </li>

                {/* mode */}
                <li ref={ThemeRef}
                    onClick={() => {
                        menuBar.current.style.marginLeft = "-200px";
                        setTimeout(() => {
                            ThemeDropRef.current.style.display = "block";
                        }, 100)
                    }}
                    className="help-item">
                    <a href="#">
                        <div className="icon"> <span className="fas fa-dragon"></span></div>
                        Mode <i className="fa fa-angle-right"></i>
                    </a>
                </li>
                {/* mode end */}

                <li>

                    <Link to="/overview">
                       
                            <div className="icon"> <span className="fas fa-question-circle"></span></div>
                            Overview
                       
                    </Link>


                </li>
            </ul>

            {/* <!-- setting and privacy  menu itmes--> */}

            <ul ref={settingDrop} className="setting-drop">
                <li ref={backSettingBtn} onClick={() => {
                    menuBar.current.style.marginLeft = "0px";
                    settingDrop.current.style.display = "none";
                }} className="arrow back-setting-btn"><span className="fas fa-arrow-left"></span>Switch engine </li>
                <li>
                    <a href="#" onClick={() => handleKernelEngineChange('google')}>
                        <div className="icon"> <span className="fab fa-google"></span></div>
                        google
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleKernelEngineChange('yahoo')}>
                        <div className="icon"> <span className="fab fa-yahoo"></span></div>
                        yahoo
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleKernelEngineChange('duckduckgo')}>
                        <div className="icon"> <span className="fas fa-kiwi-bird"></span></div>
                        duckduckgo
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleKernelEngineChange('being')}>
                        <div className="icon"> <span className="fab fa-microsoft"></span></div>
                        being
                    </a>
                </li>

            </ul>

            {/* <!--Actions--> */}

            <ul ref={helpDrop} className="help-drop">
                <li ref={backHelpBtn} onClick={() => {
                    menuBar.current.style.marginLeft = "0px";
                    helpDrop.current.style.display = "none";
                }} className="arrow back-help-btn"><span className="fas fa-arrow-left"></span>Actions </li>
                <li onClick={reboot} >
                    <a href="#">
                        <div className="icon"> <span className="fas fa-power-off"></span></div>
                        Reboot
                    </a>
                </li>
              
                {user && <li>
                    <a href="#" onClick={openAddMarker}>
                        <div className="icon"> <span className="fas fa-bookmark"></span></div>
                        Add Mark
                    </a>
                </li>}

                {user && <li>
                    <a href="#" onClick={() => {
                        logoutUser();
                        menuBar.current.style.marginLeft = "0px";
                        helpDrop.current.style.display = "none";
                        menuWrapper.current.classList.remove('show');
                    }}>
                        <div className="icon"> <span className="fas fa-sign-out-alt"></span></div>
                        Log Out
                    </a>
                </li>}
            </ul>

            {/* <!-- Mode--> */}

            <ul ref={ThemeDropRef} className="theme-drop">
                <li
                    onClick={() => {
                        menuBar.current.style.marginLeft = "0px";
                        ThemeDropRef.current.style.display = "none";
                    }}
                    className="arrow back-theme-btn"><span className="fas fa-arrow-left"></span>Themes </li>
                <li  >
                    <a href="#" onClick={HexModeStop}>
                        <div className="icon"> <span className="fas fa-sun"></span></div>
                        Zen
                    </a>
                </li>
                <li >
                    <a href="#" onClick={HexModeOn}>
                        <div className="icon"> <span className="fas fa-biohazard"></span></div>
                        Hex
                    </a>
                </li>
            </ul>
        </div>
    </nav >
    )
}

export default Dropdown
