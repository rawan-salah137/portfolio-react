import React from "react";
import './Education.css'
function Education() {
    return (
        <>
        <h2 className="text-center mb-4 mt-4">Education</h2>
        <div id="Education" class="container">
                    <div class="d-flex justify-content-around">
                    <div class="school">
                        <div class="sparkle sparkle-1"></div>
                        <p class="ms-3 p-3">Graduated from Elwessam Language School (2010-2023)</p>
                    </div>
                    <div class="uni">
                        <div class="sparkle sparkle-2"></div>
                        <p class="ms-3 p-3">Currently studying Bachelor of computer science in Software Engineering (2023-2027).Achieved GPA of 3.5</p>
                    </div>
                    </div>
                </div>
                </>
    );
}

export default Education;