import React, {useContext, useRef} from "react";
import { db } from './config/firebase-config';
import { collection, addDoc } from '@firebase/firestore';
import { KernelContext } from "./kernelContext"
import {UserContext} from "./userContext"

function AddMarkerPopup() {

    const { user } = useContext(UserContext)
    const { kernel,setKernel } = useContext(KernelContext)

    const inputNameRef = useRef(null);
    const inputUrlRef = useRef(null);
    const inputColorRef = useRef(null);
    const errorMsgRef = useRef(null);
    
    function showError(msg){
        errorMsgRef.current.textContent = msg ;  
        setTimeout(()=>{
            errorMsgRef.current.textContent = "" ;  
        },2500);

    }

    const createMarker = (e) => {
        e.preventDefault();
        if(!user){
            showError('you sholud login first!');
        }

        const name = inputNameRef.current.value;
        const url = inputUrlRef.current.value;
        const color = inputColorRef.current.value;


        if(name && url && color){

            if(url.includes("https://") || url.includes("http://")){
               
                const marker = ({
                    name,
                    url,
                    color,
                    email: user.email,
                    uid: user.uid,
                    username: user.displayName
                });
                
                addDoc(collection(db, "bookmarks"), marker)
                .then( res => res)
                .catch(err => console.err(err))

                inputNameRef.current.value = '';
                inputUrlRef.current.value = '';
                inputColorRef.current.value = '';
                
                closeAddMarkerPopup();

            }else{
                showError('😡 Ahhhh, Read Note.. ');
            }

        }else{
            showError('please fill all details');
        }
        


      
      }

      
    const closeAddMarkerPopup = () => {
        setKernel({
            ...kernel,
            currentPopup: null
        })
        document.body.classList.remove('blur');
    }



    return (
        <div className='add__marker'>

            <div className="add__marker-head">
                <h4>Create  Marker</h4>
            <button onClick={ closeAddMarkerPopup }  className="close-btn"> x </button>
            </div>

            <section className="add__marker-form">
                <form >
                <div className="input__box">
                    <label> Mark Name </label>
                    <input ref={inputNameRef} type="text" placeholder="Enter marker name..." />
                    <div className="input__box-note" style={{ background: "#fff6c2", borderLeft:  "5px solid #ffef5d" }}>
                         <p> name has character limit of 10, exceeding word will auto cliped !  </p>
                    </div>
                </div>

                <div className="input__box">
                    <label> url </label>
                    <input ref={inputUrlRef} type="text" placeholder="Enter color code..." />
                    
                    <div className="input__box-note">
                         <p><b>note:</b>  while edit or create marker's make sure URL begin with "http://" or "https://"   <i>"example: https://xzy.com/"</i> ! </p>
                    </div>

                </div>

                <div className="input__box">
                    <label> Color Code </label>
                    <input ref={inputColorRef} type="text" placeholder="Enter color name or hex/rgba code..." />
                </div>
                <span ref={errorMsgRef}></span>
                <button onClick={createMarker}>submit</button>

                </form>

            </section>
        

        </div>
    )
}

export default AddMarkerPopup
