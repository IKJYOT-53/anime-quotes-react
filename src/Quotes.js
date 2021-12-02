import React from 'react'

export default function Quotes({anime,character,quote}) {
    return (
        <div>
            <h1>Anime Quotes</h1>
            
            <blockquote>"{quote}"</blockquote>
            <cite>-{character}</cite>
            <br />
            <i><span>({anime})</span></i>
        </div>
    )
}
