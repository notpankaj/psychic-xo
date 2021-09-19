import React, { useState, useContext ,useEffect } from 'react';
import { KernelContext } from "./kernelContext"
import { db } from "./config/firebase-config";
import { collection, onSnapshot } from '@firebase/firestore';

function MegaQuery() {
    
    const { kernel, setKernel } = useContext(KernelContext)
    const [megaQueryList, setMegaQueryList] = useState([]);

    const closeMegaQuery = () => {
        if (kernel) {
            setKernel({
                ...kernel,
                currentPopup: null
            })
        }
        document.body.classList.remove('blur');
    }


    useEffect(()=>{
        const unsub = onSnapshot(collection(db, 'megaqueries'), (snapshot) => {
            setMegaQueryList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }) ))            
          })
          return unsub;
    },[])
    



    function handleKeyDown (e) {
        const redirectUrl = e.target.dataset.redirect;
        if(!redirectUrl) return;
        const query = e.target.value;
        if(query && e.keyCode === 13){
            e.target.value = '';
            window.location.href = `${redirectUrl}${query}`;
        }
    }


    return (
        <div className="mega__query">

            <div className="mq__head">
                <span className="title"> Mega Queries </span>
                <button onClick={closeMegaQuery} className="close-btn"> x </button>
            </div>

            <div className="mq__container">

                {
                    megaQueryList.map(mq => (
                        <section key={mq.id}  className="query__box">
                            <div className="query__box-search">
                                {mq.icon ?  
                                <img src={mq.icon} alt="Logo" /> : 
                                <span className="mq__logo-text">{ mq.title ? mq.title[0]  : "!" }</span>  }
                               
                                <div className="info">
                                    <h6>{mq.title ? mq.title : 'no title' }</h6>
                                    <input onKeyDown={handleKeyDown} type="text" data-redirect={mq.url} placeholder=" search or paste url.. " />
                                </div>
                            </div>
                            <p className="query__box-dis"> <b>Description</b>: {mq.info}</p>
                        </section>
                    ))
                }

            </div>



        </div>
    )
}

export default MegaQuery
