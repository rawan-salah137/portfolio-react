import React from "react";
function Contact({text,children,url}) {
    return (
      <>
        <div className="ps-4 light-button">
          <a href={url} target="_blank" rel="noopener noreferrer" className=" text-decoration-none" >
            <button className="bt" type="button" onClick={() => {}}>
              <div className="light-holder">
                <div className="dot"></div>
                <div className="light"></div>
              </div>
              <div className="button-holder">
                {children}
                <p>{text}</p>
              </div>
            </button>
          </a>
        </div>
      </>
    );
}

export default Contact;