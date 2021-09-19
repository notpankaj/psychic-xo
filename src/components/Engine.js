import React, {useEffect,useRef,useContext} from "react"
import {KernelContext} from '../kernelContext';

function Engine() {

    
    const search = useRef();
    const searchInput = useRef();

    const {kernel} = useContext(KernelContext);

    
    const searchOpen = () => {
        search.current.classList.add("search-open");
        searchInput.current.focus();
    }
    const searchClose = () => {
        search.current.classList.remove("search-open");
        searchInput.current.value = "";
    }
    const searchDelete = () => {
        searchInput.current.value = "";
        searchInput.current.focus();
    }

    const redirectPage = () => {
       const query = searchInput.current.value;
        
       if(query){
           if(kernel){
            if(kernel.activeEngine === "google"){
                window.location.href = `https://www.google.com/search?q=${query}`
            }else  if(kernel.activeEngine === "yahoo"){
                window.location.href = `http://search.yahoo.com/search?p=${query}`
            }else  if(kernel.activeEngine === "being"){
                window.location.href = `https://www.bing.com/search?q=${query}`
            }else if(kernel.activeEngine === "duckduckgo"){
                window.location.href = `https://duckduckgo.com/?q=${query}`
            }else{
                window.location.href = `https://www.google.com/search?q=${query}`
            }
           }else{
               console.warn('unknow error found ,Please HIT REBOOT , [menu -> action -> reboot]');
           }

        }else{
            console.warn('search value must not be whitespace or empty! ')
        }
    }
    
    useEffect(()=> {
        searchOpen();
        searchInput.current.addEventListener('keydown' , e => {
            if(e.keyCode == 13){
                redirectPage();
            }
        });
    })

    
    

    return (
        <div className="engine">
    
        <div className="engine__container">        
            <div className="search" ref={search}>
                {/* svg */}
                <svg className="search__icon" onClick={ searchOpen } viewBox="0 0 512 512" width="95" title="search">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                
                {/* input */}
                <input type="text" ref={searchInput} className="search__input" autoFocus  placeholder=" " />

                {/* svg */}
                <svg className="search__close" onClick={ searchClose } viewBox="0 0 352 512" width="100" title="times">
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
                <svg className="search__delete" onClick={ searchDelete } viewBox="0 0 640 512" width="100" title="backspace">
                    <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z" />
                </svg>
            </div>   
        </div>
        </div>
    )
}


export default Engine
