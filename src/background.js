import React from 'react'
import topBack from './top-background.png'
import bottomBack from './bottom-background.png'

export default function Background(props) {
    return (
        <>
            <img src={bottomBack} className={`background bottom-background shrink--${props.shrink}`} alt="background" />
            <img src={topBack} className={`background top-background shrink--${props.shrink}`} alt="background" />
        </>
    )
}