import React from "react"
import twitterIcon from '../images/twittericon.png'
import fbIcon from '../images/fbicon.png'
import igIcon from '../images/igicon.png'
import githubIcon from '../images/githubicon.png'

export default function Footer() {
    return (
        <div className="footer">
            <a href="#"><img src={twitterIcon} /></a>
            <a href="#"><img src={fbIcon} /></a>
            <a href="#"><img src={igIcon} /></a>
            <a href="#"><img src={githubIcon} /></a>
        </div>
    )
}