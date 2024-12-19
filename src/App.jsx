import { useState,useEffect } from "react";

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
                    <img src="./src/assets/Isolation_Mode.png" alt="" />
                </div>
                <h3>Explore</h3>
                <h3>FAQ`s</h3>
                <h3>Pricing</h3>
            </div>
            <div className="right" style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px"}}>
                <img src="./src/assets/Vector.png" alt="" style={{display:"block"}}/>
                <img src="./src/assets/Frame 427322189.png" alt="" style={{display:"block"}}/>
            </div>
        </div>
        <div className="header">
            <h1>Pixel Bloom:AI Website Agency</h1>
            <button style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="./src/assets/message-question.png" alt="" style={{display:"block"}}/><p style={{display:"block"}}>Give feedback</p></button>
            <button style={{display:"block"}}>Add to Cart $20</button>
        </div>
      </nav>
      <main>
        <img src="./src/assets/1_1724346897951 1.png" alt="" className="card" />
        <img src="./src/assets/3_1724346891624 1.png" alt="" className="card" />
        <img src="./src/assets/2_1724346894960 1.png" alt="" className="card" />
        <img src="./src/assets/7_1724346846490 1.png" alt="" className="card" />
        <img src="./src/assets/5_1724346884645 1.png" alt="" className="card" />
        <img src="./src/assets/4_1724346888575 1.png" alt="" className="card" />
        <img src="./src/assets/6_1724346849832 1.png" alt="" className="card" />
        <img src="./src/assets/423_1724346843105 1.png" alt="" className="card" />
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
        <img src="./src/assets/Frame 1171275630.png" alt="" />
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
                        <img src="./src/assets/Isolation_Mode.png" />
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
                    <img src="./src/assets/Buttons.png" alt=""/><img src="./src/assets/Buttons(1).png" alt=""/><img src="./src/assets/Buttons(2).png" alt=""/><img src="./src/assets/Buttons(3).png" alt=""/>
                </div>
            </div>
        </div>
        <img src="./src/assets/uiwiki.svg" style={{paddingLeft:"40px"}}/>
      </footer>
    </>
  )
}

export default App
