import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import minders from '../../bootstrap/images/Minders-Store.png';
import project2 from '../../bootstrap/images/project-2.png';
import project3 from '../../bootstrap/images/project-3.png';
import Button from '../Button/Button';
import Card from '../Card/Card';

function Portfolio() {
    return (
        <>
        <div id="portfolio" className="container mt-5">
            <h2 className="text-center mb-4">My Projects</h2>
            <div class="row">
                <Card text={"Minders Store"} url={minders} alt={"Project 1"} title={"Minders Store is an elegant and fully functional online bookstore designed and developed as part of a team project during a web development workshop. The goal was to create a seamless and user-friendly platform for book lovers to browse, search, and purchase their favorite books online."} url2={"https://shady2405.github.io/Minders-Store/"}/>
            <Card text={"Single Price Grid Component"} url={project2} alt={"Project 2"} title={"The Single Price Grid Component is a clean, modern, and minimalist design layout created as part of a front-end challenge. It showcases a pricing section for subscription plans, utilizing a simple and visually appealing card structure to present the pricing options effectively"} url2={"https://shady2405.github.io/Single-Price-Grid-Component/"}/>
            <Card text={"FAQ Accordion Component"} url={project3} alt={"Project 3"} title={"The FAQ Accordion Component is a simple, interactive, and responsive feature designed to display frequently asked questions. It allows users to click on a question to reveal or hide the corresponding answer, enhancing the user experience by keeping content concise and organized."} url2={"https://shady2405.github.io/FAQ-Accordion-Component/"}/>
            </div>
            <Link to="/projects">
                <Button text={"Explore More"}/>
            </Link>
            </div>
        </>
        //     {/* <div className="text-center mt-4">
        //     {/* Centered button */}
        //     {/* <div className="more-button-container d-flex justify-content-center align-items-center w-100">
        //         <Link to="/projects">
        //             <div className="main more-button">
        //                 <div className="rings" id="ring1"></div>
        //                 <div className="rings" id="ring2"></div>
        //                 <div className="asteriods-large" id="asteriod1"></div>
        //                 <div className="asteriods-large" id="asteriod2"></div>
        //                 <div className="asteriods-large" id="asteriod3"></div>
        //                 <div className="asteriods-large" id="asteriod4"></div>
        //                 <div className="asteriods-large" id="asteriod5"></div>
        //                 <div className="asteriods-small" id="asteriod6"></div>
        //                 <div className="asteriods-small" id="asteriod7"></div>
        //                 <div className="asteriods-small" id="asteriod8"></div>
        //                 <div className="asteriods-small" id="asteriod9"></div>
        //                 <div className="asteriods-small" id="asteriod10"></div>
        //                 <div id="saturn"></div>
        //                 <div id="explore">Explore</div>
        //                 <div id="more">More</div>
        //             </div>
        //         </Link>
        //     </div> */}
        // </div>
    );
}

export default Portfolio;
