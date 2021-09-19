import {Link} from 'react-router-dom';

function OverviewPage() {
    return (
        <div className="fullpage">
    
            <Link to="/">    
            <div className="gohome__box">
            <img src={process.env.PUBLIC_URL + '/logo.png'} className="header__logo-img" alt="logo" />
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)",transform: '' , msFilter: '' }}><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669zM12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg> */}
                <span className="gohome__btn">GO HOME</span>
            </div>
            </Link>
            

        <div className="fullpage__wrapper">
           
            <section className="intro__head">
                <h4>
                    Psychic <br /> Search Engine
                </h4>
                
                <p>
                search engine with superpowers. hmm, is it a search engine, actually it's not but it is.  what!? psychic is a mimic of a search engine, built for optimizing and quick searching. 
                </p>
                
            </section>
            
            <section className="manual__conatiner">
                
                <section className="manual__header">
                        <p>This page is an overview of the usage of Psychic Search Engine.</p>
                </section>

                <article className="manual__article">
                    <h3># FAQ: Psychic is a replacement for Google?</h3> 
                    <p>No its is not a replacement or competitive of google or and other respected search engines. is meant to be used with other engines like being, yahoo, and duckduckgo (recommended).</p>
                </article>

                <article className="manual__article">
                    <h3># Why You should use Psychic</h3>
                    <p> 1. psychic has the 4 most powerful and popular search engines, you can use these alongside psychic, and switch between those engines with short-cuts eg. [ CTRL + ALT + G ] sets Google as the default engine  (check # shortcuts for more).</p>
                    <p>2.no annoying ads on the Homepage and clean interface with dark and light mode.</p> 
                    <p>3. mega query (hard to explain - just try 😗 ).</p> 
                </article>
              
                   <article className="manual__article">
                    <h3># Installation / Setup  Guide [ 💻 DESKTOP 💻 ]</h3>
                    <p> the only thing we need is an extension called New Tab Redirect <pre>[ <a href="https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna">click here</a> ]</pre> .  </p>
                    <div className="article__with-img" >
                        <span>1.install "New Tab Redirect" on any browser (recommended: Edge).</span>
                        <img src={process.env.PUBLIC_URL + 'help1.jpg'}/>
                        <span>2. goto three dot menu and then inside extension , enable "New Tab Redirect" and hit setup options </span>
                        <img style={{ width: "250px", height: "auto" }}  src={process.env.PUBLIC_URL + 'help2.1.jpg'}/>
                        <img style={{ width: "250px", height: "auto" }} src={process.env.PUBLIC_URL + 'help2.2.jpg'}/>
                        <span>3.paste this url <pre> https://psychic-xo.web.app </pre> on Redirect URL input then hit save and restart browser.</span>
                        <img style={{ width: "250px", height: "auto" }} src={process.env.PUBLIC_URL + 'help3.jpg'}/>
                        <span>4. That is it. Peace ✌</span>
                    </div>
                   </article>


                   <article className="manual__article">
                    <h3># Installation / Setup  Guide [📱  MOBILE 📱]</h3>
                    <p> we need somthing fast and light for mobile, <br /> we recommended "via browser" ( less than 0.5m in size)   <pre>[ <a href="https://play.google.com/store/apps/details?id=mark.via.gp">click here</a> ]</pre> .  </p>
                    <div className="article__with-img" >
                        <span>1. open "via browser" goto <pre> [ Settings -> General -> Homepage ]</pre> select webpage option.</span>
                        <img style={{ width: "250px", height: "auto" , borderRadius: "5px" }} src={process.env.PUBLIC_URL + 'mobile1.jpg'}/>
                    </div>
                    <div className="article__with-img" >
                        <span>2. paste this url <pre> https://psychic-xo.web.app </pre> on custom homepage input then hit OK and restart. </span>
                        <img style={{ width: "250px", height: "auto" , borderRadius: "5px" }} src={process.env.PUBLIC_URL + 'mobile2.jpg'}/>
                    </div>
                    <span>3. That is it. Peace ✌</span>
                   </article>

                   <article className="manual__article">
                    <h3># Psychic doesn't have suggestions on search</h3>
                    <p>you can still use your browsers core functionality 
                    like. your search bar, downloads bookmarks, and history manager  </p>
                    <div className="article__with-img" >
                        <span>[ if you like to have suggestions you can use your search bar ]</span>
                        <img src={process.env.PUBLIC_URL + 'suggesstion.png'}/>
                    </div>
                   </article>

                   <article className="manual__article">
                    <h3># Adding query to Mega Queries </h3>
                    <p> Query inside Mega Queries Section are Global Query these cannot be edited or created by user [Reason:  if we give the ability to create a mega query to users, since mega queries are global so anyone can see and access theme, the user may create a query which contains adult content or a redirect link to some malicious site that can inject malware or virus into your device].  </p>
                    <div className="submmition__box">
                        <p>so you have to submit your query/site link, if it is safe to use it will be added in mega queries within 24 hours.</p>
                        <span>SUBMITION: at <b>npm.send.mail@gmail.com</b> OR DM on <a href="https://www.instagram.com/imnotpankaj/">Instagram</a>. </span>
                    </div>
                   </article>
                 
                   <article className="manual__article">
                    <h3># [ REBOOT ] physchic</h3>
                    <p>Reboot will reset the physchic kernel from  localStorage of your device to fix any glitch's and bug's.</p>
                    </article>


                   <article className="manual__article">
                    <h3># Short-cuts</h3> 
                    <div className="shortcut__list">
                        <div className="shortcut__box">
                            <span>Change default search engine</span>
                            <p><pre>[ CTRL + ALT + G ] </pre> google</p>
                            <p><pre>[ CTRL + ALT + Y ] </pre> yahoo</p>
                            <p><pre>[ CTRL + ALT + D ] </pre> duckduckgo</p>
                            <p><pre>[ CTRL + ALT + B ] </pre> being</p>
                        </div>
                        <div className="shortcut__box">
                            <span>Toggle Mega Queries</span>
                            <p><pre>[ CTRL + ALT + O ] </pre> Drowsiness (open)</p>
                            <p><pre>[ CTRL + ALT + C ] </pre> Drowsiness (close)</p>
                        </div>
                        <div className="shortcut__box">
                            <span>Toggle Drowsiness</span>
                            <p><pre>[ CTRL + ALT + A ] </pre> Drowsiness (add)</p>
                            <p><pre>[ CTRL + ALT + R ] </pre> Drowsiness (remove)</p>
                        </div>
                        <div className="shortcut__box">
                            <span>Change Theme Mode</span>
                            <p><pre>[ CTRL + ALT + L ] </pre> Zen (Lignt)</p>
                            <p><pre>[ CTRL + ALT + D ] </pre> Hex (Dark)</p>
                        </div>
                    </div>
                </article>
            </section>
            

            <section className="about__conatiner">
                <div className="one">
                    <h6>DEVELOPED BY</h6>
                    <h4>PanKaj</h4>
                    <p>© 2015 – 2021  FUTURE SIGHT POLICY </p>
                </div>
                <div className="two">
                    <h5>CONTACT</h5>
                    <div>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">iampankaj0409@gmail.com</a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">npm.send.mail@gmail.com</a>
                        <a href="https://www.instagram.com/imnotpankaj/">Instagram</a>
                        <a href="https://codepen.io/pankaj-the-scripter">Codepen</a>
                        <a href="https://github.com/notpankaj">Github</a>
                    </div>
                </div>
    
                <div className="three">
                    <h5>ABOUT</h5>
                    <p>
                        a noob web developer based in chandigarh,india. want more... check out my [ <a href="https://notpankaj.github.io/">PORTFOLIO</a> ] .     
                    </p>
                </div>
    
                <div className="four">
                    <h5>UNOFFICAL PARTNER SITES</h5>
                    <div>
                        <a href="#">GOOGLE</a>
                        <a href="#">YAHOO!</a>
                        <a href="#">DUCKDUCKGO</a>
                        <a href="#">BEING</a>
                    </div>
                </div>
    
            </section>
    
        </div>
        
    </div>
    )
}

export default OverviewPage;




    

    
