import React, { useState, useRef, useContext, useEffect } from "react";
import { db } from "../config/firebase-config";
import { collection, doc, onSnapshot, addDoc, deleteDoc, updateDoc ,query ,where } from '@firebase/firestore';

import { UserContext } from "../userContext"
import marks from "../marks"


function Tray() {

  const { user } = useContext(UserContext)
  const [authUsersMark, setAuthUsersMark] = useState([]);
  const [isBookmarkActive, setIsBookmarkActive] = useState(true);

  const bookmarkConatinerRef = useRef();
  const bookmarkManageRef = useRef();
  const bookmarkManageErrorRef = useRef();

  const inputUrlRef = useRef();
  const inputNameRef = useRef();
  const inputcolorRef = useRef();


  function showError(msg) {
    bookmarkManageErrorRef.current.textContent = msg;
    bookmarkManageErrorRef.current.style.display = 'block';
    setTimeout(() => {
      bookmarkManageErrorRef.current.textContent = "";
      bookmarkManageErrorRef.current.style.display = 'none';
    }, 2500);

  }






  useEffect(() => {
    if (!user) return;
    // const unsub = onSnapshot(collection(db, 'bookmarks'), (snapshot) => {
      // 
    const unsub = onSnapshot(query(collection(db, 'bookmarks'), where("email", "==", user.email)), (snapshot) => {

      // console.log(snapshot.docs)
      setAuthUsersMark(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    })
    return unsub;
  }, [user]);


  const importDefaultMarks = () => {
    if (!user.email) return;

    marks.forEach(mark => {

      addDoc(collection(db, "bookmarks"), {
        ...mark,
        email: user.email,
        uid: user.uid,
        username: user.displayName
      });

    })

  }


  const openBookmarkManage = (mark) => {
    inputNameRef.current.value = mark.name;
    inputUrlRef.current.value = mark.url;
    inputcolorRef.current.value = mark.color;
    bookmarkManageRef.current.dataset.markId = mark.id
    bookmarkManageRef.current.classList.add('active');
  };
  const closeBookmarkManage = () => {
    inputNameRef.current.value = '';
    inputUrlRef.current.value = '';
    inputcolorRef.current.value = '';
    bookmarkManageRef.current.removeAttribute('data-mark-id');
    bookmarkManageRef.current.classList.remove('active')
  };

  const deleteMark = () => {
    const markId = bookmarkManageRef.current.dataset.markId;
    if (markId) {
      deleteDoc(doc(db, "bookmarks", markId));
    }
    closeBookmarkManage();

  }

  const updateMark = () => {
    const markId = bookmarkManageRef.current.dataset.markId;
    if (markId) {

      const url = inputUrlRef.current.value;
      const name = inputNameRef.current.value;
      const color = inputcolorRef.current.value;

      if (url && name && color) {
        if (url.includes("https://") || url.includes("http://")) {
          const markRef = doc(db, "bookmarks", markId);
          updateDoc(markRef, { name, url, color });
          closeBookmarkManage();
        } else {
          showError('make sure URL begin with "http://" or "https://"');
        }

      } else {
        showError('please add all value');
      }

    } else {
      closeBookmarkManage();
    }


  }

  const handleRedirect = (e) => {
    e.preventDefault();
    const uri = e.target.dataset.redirectUrl;
    if (!uri) return;

    if (uri.includes('https://') || uri.includes('http://')) {
      window.location.href = uri;
    }

  }

  return (
    <div className="tray">

      <section className="bookmarktoggle">
        <button onClick={() => setIsBookmarkActive(!isBookmarkActive)}>
          {isBookmarkActive ? <span >
            &times;
          </span > : <span >
            &minus;
          </span>}
        </button>
      </section>
      <div className={`tray__container ${isBookmarkActive || "hide"}`}>

        <section ref={bookmarkManageRef} className="bookmark__manage">

          <div className="bookmark__manage-head">
            <h6>Edit Marker</h6>
            <button onClick={closeBookmarkManage} className="close-btn" >x</button>
          </div>

          <div className="bookmark__manage-body">

            <div className="boolmark__manage-inputbox">
              <label > name</label>
              <input ref={inputNameRef} type="text" placeholder="enter marker name.." />
            </div>

            <div className="boolmark__manage-inputbox">
              <label > url</label>
              <input ref={inputUrlRef} type="text" placeholder="enter marker url.." />
            </div>

            <div className="boolmark__manage-inputbox">
              <label >color</label>
              <input ref={inputcolorRef} type="text" placeholder="enter color code.." />
            </div>
            <span ref={bookmarkManageErrorRef} className="boomark__manage-error"></span>

          </div>
          <button onClick={updateMark} className="bookmark__manage-btn">update</button>
          <button onClick={deleteMark} className="bookmark__manage-btn delete" >delete</button>



        </section>


        <div ref={bookmarkConatinerRef} className="bookmark__conatiner ">
          {
            user ?

              (authUsersMark.length > 0) ?
                authUsersMark.map(mark => (
                  <a key={mark.id} style={{ "--markColor": mark.color }} href="#" data-redirect-url={mark.url} onClick={handleRedirect} className="bookmark__link">
                    <button className="bookmark__menu" onClick={() => { openBookmarkManage(mark) }}>
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <span style={{ "--markColor": mark.color }} data-redirect-url={mark.url} >{mark.name.substring(0, 10)}</span>
                  </a>
                ))
                : <div className="bookmark__import">
                  <p>
                  oops empty list, create a bookmark <pre>{`[ menu > Actions > Add mark ]`}</pre>, or import some default bookmark's
                  </p>
                  
                  <a  onClick={importDefaultMarks} className="bookmark__link">
                  <span  >import</span>
                </a>
                </div>

              : marks.map(mark => (
                <a key={mark.id} style={{ "--markColor": mark.color }} href={mark.url} className="bookmark__link">
                  {/* <button className="bookmark__menu" onClick={openBookmarkManage}>
                    <i className="fas fa-ellipsis-v"></i>
                  </button> */}
                  <span style={{ "--markColor": mark.color }} >{mark.name}</span>
                </a>
              ))
          }

        </div>


      </div>

    </div>
  )
}

export default Tray;



