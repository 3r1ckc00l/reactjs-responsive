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
          <div className="overview_nogrid half-screen">
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

          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid">

          </div>
          <div className="overview_nogrid half-screen">
            <h2 className="main-heading black">The Campaign Challenge</h2>
            <p className="paragraph">
              From digital presence to boots on the ground, we deliver the tools, technology, and expertise that modern campaigns need to connect with voters and secure victory.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview_nogrid half-screen">
            <h2 className="main-heading black">The Campaign Butler Solution</h2>
            <p className="paragraph">
              We've created the first truly integrated campaign platform that handles everything from your domain name to your door-knocking strategy. Our unified approach eliminates communication gaps, reduces costs, and dramatically increases your campaign's effectiveness.
            </p>
          </div>
          <div className="overview">

          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h1>Why Winning Campaigns Choose Campaign Butler</h1>
          </div>
        </div>

        <div className="container">
          <div className="overview">
            <h2 className="heading2">Image</h2>
            <p className="paragraph">
              Just content sections, we can give our own content here.
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Unified Strategy, Maximum Impact</h2>
            <p className="paragraph">
              Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h1>Trusted by Winning Candidates</h1>
          </div>
        </div>

        <div className="container">
          <div className="overview">
            <h2 className="heading2">"The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers."</h2>
            <p className="paragraph">
              Michael Thompson | County Commissioner
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h1>Your Complete Campaign Toolkit</h1>
          </div>
        </div>

        <div className="container">
          <div className="overview">
            <h2 className="heading2">Digital Presence</h2>
            <p className="paragraph">
              Official .Vote Domain — Secure instant credibility with a trusted .vote domain that voters recognize and trust Professional Campaign Website — Launch a mobile-friendly, conversion-focused site that tells your story and drives action
              Official .Vote Email — Create a professional, branded email address that enhances your campaign's legitimacy
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Image</h2>
            <p className="paragraph">
              Just content sections, we can give our own content here.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent black_bg">
        <div className="container">
          <div className="overview_nogrid half-screen">
            <h2 className="second-heading">30+ Years of Campaign Victory Experience</h2>
            <p className="paragraph">
              Campaign Butler combines decades of political expertise with cutting-edge marketing technology. We've helped candidates at every level—from school board to statewide office—connect with voters and win elections. Our team understands that exposure wins elections, but only when it's strategic, consistent, and targeted. That's why we've built the only truly integrated campaign marketing platform that unites traditional outreach with digital essentials.
            </p>
          </div>

          <div className="overview_nogrid">

          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h1>Serving Campaigns Nationwide</h1>
          </div>
        </div>

        <div className="container">
          <div className="overview">
            <h2 className="heading2">All 50 States</h2>
            <p className="paragraph">
              Compliant solutions for campaigns anywhere in America
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Every Race Level</h2>
            <p className="paragraph">
              From city council to congressional campaigns
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Specialized Knowledge</h2>
            <p className="paragraph">
              Expertise in school board, judicial, and other specialized races
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Partisan & Non-Partisan</h2>
            <p className="paragraph">
              Solutions for every type of campaign
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h1>Campaign Solutions for Every Budget</h1>
          </div>
        </div>

        <div className="container">
          <div className="overview">
            <h2 className="heading2">À La Carte Services</h2>
            <p className="paragraph">
              Build your custom campaign toolkit Starting at $99/month
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Full Suite Package</h2>
            <p className="paragraph">
              Everything you need to launch and run a professional campaign $500/month
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Custom Solutions</h2>
            <p className="paragraph">
              For larger campaigns with specialized needs
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h2 className="heading2">Ready to Launch Your
              Winning Campaign?</h2>
            <p className="paragraph">
              Get started today with Campaign Butler and receive:
              First Name
              Last Name
              Email
              Same-day domain and email setup Professional website within 72 hours Dedicated campaign strategist Complete onboarding and training
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Form Submit</h2>
            <p className="paragraph">
              Just content sections, we can give our own content here.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h2 className="heading2">Image</h2>
            <p className="paragraph">
              Just content sections, we can give our own content here.
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Visibility Starts Here. Victory Follows.</h2>
            <p className="paragraph">
              Don't leave your campaign success to chance. Partner with the experts who understand what it takes to win in today's complex political landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="overAllcontent">
        <div className="container">
          <div className="overview">
            <h2 className="heading2">Campaign Butler</h2>
            <p className="paragraph">
              Win Your Next Election with Campaign Butler's All-in-One Solution
            </p>
          </div>
          <div className="overview">
            <h2 className="heading2">Footer Link</h2>
            <p className="paragraph">
              Don't leave your campaign success to chance. Partner with the experts who understand what it takes to win in today's complex political landscape.
            </p>
          </div>
        </div>
      </div>

      {/*
Footer: Displays a footer with a copyright notice and social media icons (ex. Google, Facebook, Twitter, Instagram).
*/}
      <footer className="footer">
        <div>
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
