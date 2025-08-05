import "./App.css";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  {/* 
To track the window dimensions:
Window Dimensions Tracking Function : getCurrentDimension() retrieves the current window width and height. 
*/}
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  {/* 
Window Resize Listener using useEffect : useEffect updates screenSize on window resize, ensuring responsiveness.
*/}
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <div>

      {/* 
Desktop Navigation: 
The code employs conditional rendering to display a navigation bar exclusively for screens wider than 750 pixels, ensuring an optimized layout for desktop users.
*/}
      {screenSize.width > 750 && (
        <div className="navBarContainer">
          <div>
            <a href="#home"><h3 className="logo">Campaign<span class="second-text">Butler</span></h3></a>
          </div>
          <div className="topnav">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#quickstart">Quick Start</a>
            <a href="#support">Support</a>
            <a href="#blog">Blog</a>
            <a href="#contact" class="contact-nav">Contact&nbsp;<i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      )}

      {/*
Mobile Navigation: 
For screens 750 pixels or narrower, an alternate navigation bar is rendered, featuring a menu icon that, when clicked, reveals a popupContainer for improved mobile usability.
*/}
      {screenSize.width <= 750 && (
        <div>
          <div className="navBarContainer">
            <div>
              <a href="#home"><h3 className="logo">CampaignButler</h3></a>
            </div>
            <div className="topnav">
              <div className="topnav" onClick={handleMenuOpen}>
                <a>
                  <MenuIcon style={{ fontSize: "200%" }} />
                </a>
              </div>
            </div>
          </div>
          {/*  
The below code helps to toggles the visibility of a vertical popupContainer with navigation links (ex. Services, Pricing, Quick Start, Support, Blog, Contact) when the menu is open. The menu can be closed using a MenuIcon button.
*/}
          {menuOpen ? (
            <div>
              <div className="popupContainer">
                <div className="dialogStyle">
                  <div className="boxStyle">
                    <div className="mainContent">
                      <div className="popupHeader">
                        <button
                          className="closeButton"
                          onClick={handleMenuOpen}
                        >
                          <a>
                            <MenuIcon
                              style={{ fontSize: "250%", color: "white" }}
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="verticalNav">
                      <a href="#services">Services</a>
                      <a href="#pricing">Pricing</a>
                      <a href="#quickstart">Quick Start</a>
                      <a href="#support">Support</a>
                      <a href="#blog">Blog</a>
                      <a href="#contact">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      {/* 
Overview Content: Displays list of sections within a container.
*/}
      <div className="overAllcontent black_bg">
        <div className="container">
          <div className="overview_nogrid">
            <h2 className="main-heading">Win Your Next Election <br />
              with Campaign Butler's <br />
              All-in-One Solution</h2>
            <p className="paragraph">
              From digital presence to boots on the ground, we deliver the tools,
              technology, and expertise that modern campaigns need to connect
              with voters and secure victory.
            </p>
          </div>

          <div className="overview_nogrid">
            <img src="images/image1.png" className="image-content" />
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid">
            <img src="images/image2.png" className="image-content" />
          </div>
          <div className="overview_nogrid">
            <h2 className="main-heading black">The Campaign Challenge</h2>
            <p className="paragraph">
              From digital presence to boots on the ground, we deliver the tools, technology, and expertise that modern campaigns need to connect with voters and secure victory.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid">
            <h2 className="main-heading black">The Campaign Butler Solution</h2>
            <p className="paragraph">
              We've created the first truly integrated campaign platform that handles everything from your domain name to your door-knocking strategy. Our unified approach eliminates communication gaps, reduces costs, and dramatically increases your campaign's effectiveness.
            </p>
          </div>
          <div className="overview_nogrid">
            <img src="images/image3.png" className="image-content" />
          </div>
        </div>
      </div>

      <div className="overAllcontent black_bg">
        <div className="container">
          <div className="overview_nogrid center">
            <h2 className="main-heading white">Why Winning Campaigns Choose <br /> Campaign Butler</h2>
          </div>
        </div>

        <div className="container">
          <div className="overview_nogrid">
             <img src="images/image4.png" className="image-content" />
          </div>
          <div className="overview_nogrid">
            <h2 className="main-heading white secondary">Unified Strategy, Maximum Impact</h2>
            <p className="paragraph">
              Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid center">
            <h2 className="main-heading black">Trusted by Winning Candidates</h2>
          </div>
        </div>

        <div className="container">
          <div className="overview_nogrid">
            <h2 className="heading2">"The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers."</h2>
            <p className="paragraph">
              Michael Thompson | County Commissioner
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid">
            <h2 className="main-heading black">Your Complete<br /> Campaign Toolkit</h2>
          </div>
        </div>

        <div className="container">
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">Digital Presence</h2>
            <p className="paragraph">
              <strong>Official .Vote Domain —</strong> Secure instant credibility with a trusted .vote domain that voters recognize and trust<br /> 
              <strong>Professional Campaign Website —</strong> Launch a mobile-friendly, conversion-focused site that tells your story and drives action<br />
              <strong>Official .Vote Email —</strong> Create a professional, branded email address that enhances your campaign's legitimacy
            </p>
          </div>
          <div className="overview_nogrid">
            <img src="images/image5.png" className="image-content" />
          </div>
        </div>
      </div>

      <div className="overAllcontent black_bg">
        <div className="container">
          <div className="overview_nogrid">
            <h2 className="main-heading white">30+ Years of Campaign Victory Experience</h2>
            <p className="paragraph">
              <strong>Campaign Butler</strong> combines decades of political expertise with cutting-edge marketing technology. We've helped candidates at every level—from school board to statewide office—connect with voters and win elections. Our team understands that exposure wins elections, but only when it's strategic, consistent, and targeted. That's why we've built the only truly integrated campaign marketing platform that unites traditional outreach with digital essentials.
            </p>
          </div>

          <div className="overview_nogrid">

          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid center">
            <h2 className="main-heading black">Serving Campaigns Nationwide</h2>
          </div>
        </div>

        <div className="container">
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">All 50 States</h2>
            <p className="paragraph">
              Compliant solutions for campaigns anywhere in America
            </p>
          </div>
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">Every Race Level</h2>
            <p className="paragraph">
              From city council to congressional campaigns
            </p>
          </div>
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">Specialized Knowledge</h2>
            <p className="paragraph">
              Expertise in school board, judicial, and other specialized races
            </p>
          </div>
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">Partisan & Non-Partisan</h2>
            <p className="paragraph">
              Solutions for every type of campaign
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid center">
            <h2 className="main-heading black">Campaign Solutions for Every Budget</h2>
          </div>
        </div>

        <div className="container">
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">À La Carte Services</h2>
            <p className="paragraph">
              Build your custom campaign toolkit Starting at $99/month
            </p>
            <a href="#option" class="option-nav">See Options&nbsp;<i class="bi bi-arrow-up-right"></i></a>
          </div>
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">Full Suite Package</h2>
            <p className="paragraph">
              Everything you need to launch and run a professional campaign $500/month
            </p>
            <a href="#option" class="option-nav">Get Started&nbsp;<i class="bi bi-arrow-up-right"></i></a>
          </div>
          <div className="overview_nogrid">
            <h2 className="heading2 no-line">Custom Solutions</h2>
            <p className="paragraph">
              For larger campaigns with specialized needs
            </p>
            <a href="#option" class="option-nav">Request Quote&nbsp;<i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </div>

      <div className="overAllcontent black_bg">
        <div className="container">
          <div className="overview_nogrid">
            <h2 className="main-heading white">Ready to Launch Your<br />
              <span className="red">Winning Campaign?</span></h2>
            <p className="paragraph">
              <h2>Get started today with Campaign Butler and receive:</h2>
              <strong>Same-day</strong> domain and email setup<br /> 
              <strong>Professional</strong> website within 72 hours<br /> 
              <strong>Dedicated</strong> campaign strategist<br /> 
              <strong>Complete</strong> onboarding and training
            </p>
          </div>
          <div className="overview_nogrid">
            <p className="paragraph">
              I agree to recived text messages from CampaignButler. By checking this box and providing your phone number, Read more...
            </p>
            <a href="#option" class="option-nav white">Launch My Campaign&nbsp;<i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </div>

      <div className="overAllcontent blue_bg">
        <div className="container">
          <div className="overview_nogrid">
            <img src="images/image6.png" className="image-content" />
          </div>
          <div className="overview_nogrid">
            <h2 className="heading2 no-line white">Visibility Starts Here. Victory Follows.</h2>
            <p className="paragraph">
              Don't leave your campaign success to chance. Partner with the experts who understand what it takes to win in today's complex political landscape.
            </p>
            <a href="#option" class="option-nav white">Get Started Today&nbsp;<i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </div>

      <div className="overAllcontent black_bg">
        <div className="container">
          <div className="overview_nogrid">
            <h2 className="main-heading no-line white">Campaign<span className="red">Butler</span></h2>
            <p className="paragraph">
              Win Your Next Election with Campaign Butler's<br /> All-in-One Solution
            </p>
          </div>
          <div className="overview_nogrid">
            <div className="overview_split">
              <p className="paragraph">Privacy Policy</p>
              <p className="paragraph">Terms & Conditions</p>
              <p className="paragraph">Contact Us</p>
            </div>
            <div className="overview_split">
              <p className="paragraph">Support Center</p>
              <p className="paragraph">Campaign Resources</p>
              <p className="paragraph">Blog</p>
            </div>
          </div>
        </div>
      </div>

      {/*
Footer: Displays a footer with a copyright notice and social media icons (ex. Google, Facebook, Twitter, Instagram).
*/}
      <footer className="footer">
        <div className="copyright">
          <p>&copy; 2025 Campaign Butler. All Rights Reserved.</p>
        </div>
        <div className="icons">
          <span>
            <GoogleIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
