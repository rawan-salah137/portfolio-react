import React from 'react';
import roro from '../bootstrap/images/roro.jpg';
function About() {
    return (
        <>
        <div id="about" className="about pt-auto">
                <div className="container">
                    <div className="row container">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                <img className="my-img" src={roro} alt="Roro's profile photo" />

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-3 d-flex align-items-center justify-content-center flex-column">
                            <div className="position">
                                <h1>Hi, It's Rawan Salah</h1>
                                <h2>I'm a</h2>
                                <div className="flip">
                                    <div>
                                        <div>Software Engineer</div>
                                    </div>
                                    <div>
                                        <div>Web Developer</div>
                                    </div>
                                    <div>
                                        <div>Web Designer</div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                I am a 21 years old Software Engineering student who achieved a 3.5 GPA. Am an efficient and hard working person,
                                and am willing to discover and accept new ideas which can be put into practice effectively.
                                I am a good learner, able to communicate well with a group and on an individual level.
                                I am able to motivate and direct my talents and skills to meet objectives.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default About