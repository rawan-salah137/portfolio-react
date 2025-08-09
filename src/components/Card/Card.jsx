import React from 'react'
import Button from '../Button/Button';

function Card({title,text,url,alt,url2, style, style2}) {
    return (
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100 project-card" style={style}>
                    <img src={url} style={style2} class="card-img-top" alt={alt}></img>
                    <div class="card-body">
                        <p class="card-text text-center fs-6 fw-bold">{text}</p>
                        <h5 class="card-title">{title}</h5>

                    </div>
                <Button text={"View it"} url={url2}/>
                </div>
            </div>
)
}

export default Card