import { useState,useEffect } from "react";
import a from "./assets/Isolation_Mode.png";
import b from "./assets/Vector.png";
import c from "./assets/Frame427322189.png";
import d from "./assets/message-question.png";
import e from "./assets/1_17243468979511.png";
import f from "./assets/3_17243468916241.png";
import g from "./assets/2_17243468949601.png";
import h from "./assets/7_17243468464901.png";
import i from "./assets/5_17243468846451.png";
import j from "./assets/4_17243468885751.png";
import k from "./assets/6_17243468498321.png";
import l from "./assets/423_17243468431051.png";
import m from "./assets/Frame1171275630.png";
import n from "./assets/Isolation_Mode.png";
import o from "./assets/Buttons.png";
import p from "./assets/Buttons1.png";
import q from "./assets/Buttons2.png";
import r from "./assets/Buttons3.png";
import s from "./assets/uiwiki.svg";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scale,setScale]=useState(0);

  useEffect(()=>{
    setScale(screenWidth/1440);
  },[screenWidth])
  // Function to update width on screen resize
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add resize listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      
      <nav  style={{width:`${scale*1440}px`}}>
        <div id="navbar">
            <div className="left">
                <div>
                    <img src={a} alt="" />
                </div>
                <h3>Explore</h3>
                <h3>FAQ`s</h3>
                <h3>Pricing</h3>
            </div>
            <div className="right" style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px"}}>
                <img src={b} alt="" style={{display:"block"}}/>
                <img src={c} alt="" style={{display:"block"}}/>
            </div>
        </div>
        <div className="header">
            <h1>Pixel Bloom:AI Website Agency</h1>
            <button style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src={d} alt="" style={{display:"block"}}/><p style={{display:"block"}}>Give feedback</p></button>
            <button style={{display:"block"}}>Add to Cart $20</button>
        </div>
      </nav>
      <main>
        <img src={e} alt="" className="card" />
        <img src={f} alt="" className="card" />
        <img src={g} alt="" className="card" />
        <img src={h} alt="" className="card" />
        <img src={i} alt="" className="card" />
        <img src={j} alt="" className="card" />
        <img src={k} alt="" className="card" />
        <img src={l} alt="" className="card" />
      </main>
      <div id="middle-section">
        <div className="description">
          <h1>Description</h1>
          <p>Hello Friends 👋🏻</p>
          <p>
            Achieving your goals is now simpler than ever with Beetroot. Take
            control of your habits by setting personalized goals, receiving
            timely reminders, and effortlessly tracking your progress. The app
            records your journey and provides insights to help you build a
            healthier, more organized life. It addresses several challenges,
            from maintaining consistency to monitoring your overall progress.
            Your path to a better you has never been this straightforward!I
            also want to share my exploration of our app`s features. You can set
            specific quitting goals, find tips for overcoming cravings, and
            access support resources whenever you need them. I hope you guys
            find it useful.Feel free to comment!
          </p>
          <p>🔥 Checkout our other product
          -https://ui8.net/omega-orion/products/forgo---quit-smoking-app✉️</p>
        </div>
        <div className="features">
          <h1>Features</h1>
          <ul>
            <li>120+ Screens</li>
            <li>Fully customizable designs</li>
            <li>Organised Design system</li>
            <li>Light & Dark mode</li>
            <li>Customised Illustration</li>
            <li>Neatly Organised layer</li>
          </ul>
          <h1>Format</h1>
        </div>
      </div>
      <div id="comment-card">
        <h1>Comments</h1>
        <img src={m} alt="" />
        <div style={{display: "inline-block"}}>
          <h3>Kristen Robsen</h3>
          <p>Gave feedback on 17th Sept 2024</p>
        </div>
        <p>
          The template I bought looked great in the preview, but the actual file
          was poorly designed and hard to customize. Definitely not worth the
          price
        </p>
        <div>
            <input type="text" name="" id="" placeholder="Drop a comment, be helpful" style={{display:"block",flexGrow:"1"}}></input>
            <button style={{display:"block"}}>Submit</button>
        </div>
      </div>
      <footer>
        <div id="footer-section">
            <div className="left">
                <div>
                    <div>
                        <img src={n} />
                    </div>
                    <div>
                        <h3>Explore</h3>
                        <h3>FAQ</h3>
                        <h3>Pricing</h3>
                    </div>
                    <div>
                        <h3>Licensing</h3>
                        <h3>Terms of use</h3>
                        <h3>Privacy policy</h3>
                    </div>
                </div>
                <p style={{textAlign:"center"}}>2024, Omega Orion Pvt. Ltd.</p>
            </div>
            <div className="right">
                <h2>Join our monthly newsletter</h2>
                <div>
                    <input type="text" name="" id="" placeholder="designer@example.com"/>
                    <button>-</button>
                </div>
                <h2>Connect with us</h2>
                <div>
                    <img src={o} alt=""/><img src={p} alt=""/><img src={q} alt=""/><img src={r} alt=""/>
                </div>
            </div>
        </div>
        <img src={s} style={{paddingLeft:"40px"}}/>
      </footer>
    </>
  )
}

export default App
