import React, { useState } from "react";
import "./Project.css";
import recipe from '../../bootstrap/images/recipe.png';
import profileLinks from '../../bootstrap/images/profile-links.png';
import socialProof from '../../bootstrap/images/Socialproof.png';
import contactUs from '../../bootstrap/images/contact.png';

import Button from '../Button/Button';
import Card from '../Card/Card';

export default function Portfolio() {
  // const [selected, setSelected] = useState(null);

  return (
    <div className="space-container">
      {/* Background stars */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      <h2 className="portfolio-title">
        Explore My Universe
        </h2>
      <div id="portfolio" className="container mt-5">
            <div class="row">
            {/* One */}
            <Card text={"Recipe Page"} url={recipe}
            alt={"Project 1"}
            title={"Minders Store is an elegant and fully functional online bookstore designed and developed as part of a team project during a web development workshop.The goal was to create a seamless and user-friendly platform for book lovers to browse, search, and purchase their favorite books online."} 
            url2={"https://rawan-salah137.github.io/Recipe-Page/"}
            style={{ borderRadius: "20px 20px 70px 70px" }}
            style2={{ borderRadius: "20px 20px 0px 0px" }}/>
            {/* Two */}
            <Card text={"Social Links Page"} url={profileLinks}
            alt={"Project 2"}
            title={"Minders Store is an elegant and fully functional online bookstore designed and developed as part of a team project during a web development workshop.The goal was to create a seamless and user-friendly platform for book lovers to browse, search, and purchase their favorite books online."} 
            url2={"https://rawan-salah137.github.io/Social-links-profile/"}
            />
            {/* Three */}
            <Card text={"Social Proofs Page"} url={socialProof}
            alt={"Project 1"}
            title={"Minders Store is an elegant and fully functional online bookstore designed and developed as part of a team project during a web development workshop.The goal was to create a seamless and user-friendly platform for book lovers to browse, search, and purchase their favorite books online."} 
            url2={"https://rawan-salah137.github.io/Social-proof-section/"}
            style={{ borderRadius: "20px 20px 70px 70px" }}
            style2={{ borderRadius: "20px 20px 0px 0px" }}/>
            {/* Four */}
            <Card text={"Contact Us Form"} url={contactUs}
            alt={"Project 1"}
            title={"Minders Store is an elegant and fully functional online bookstore designed and developed as part of a team project during a web development workshop.The goal was to create a seamless and user-friendly platform for book lovers to browse, search, and purchase their favorite books online."} 
            url2={"https://rawan-salah137.github.io/Contact-us-form/"}
            style={{ borderRadius: "20px 20px 70px 70px" }}
            style2={{ borderRadius: "20px 20px 0px 0px" }}
            />
            {/* Five */}
            
           {/* Six */}
           

            </div>
            </div>
      {/* {selected && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selected.name}</h2>
            <img src={selected.image} alt={selected.name} />
            <p>{selected.description}</p>
            <a href={selected.link} target="_blank" rel="noreferrer">
              🌌 Visit Project
            </a>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
}
