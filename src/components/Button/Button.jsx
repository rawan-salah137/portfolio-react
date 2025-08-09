import React from 'react'

function Button({text,url}) {
    return (
        <div class="card-footer text-center">
            <a href={url} target="_blank" class="btn button">{text}</a>
        </div>
    )
}

export default Button