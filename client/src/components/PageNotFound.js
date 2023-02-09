import React from 'react'
import nf from '../assets/nf.png'
import { Link } from 'react-router-dom'
import './nf.css'

export const PageNotFound = () => {
    return (
        <div className='nf-container h-screen'>
            <div className='nf-title'>
                <h1>Page not Found!</h1>
            </div>

            <span>Go back to <Link className='gback' to="/">Home</Link></span>

            <div className='nf-image'>
                <img src={nf}></img>
            </div>
        </div>
    )
}
