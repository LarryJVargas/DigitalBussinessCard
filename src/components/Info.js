import React from "react"
import profileImg from '../images/husky.png'
import mailImg from '../images/Mail.png'
import linkedinImg from '../images/linkedin.png'


export default function Info() {
    return (
        <div className="info">
            <img className="profile-pic" src={profileImg} />
            <h2>Larry Vargas</h2>
            <h4>Frontend Developer</h4>
            <h5>larryvargas.website</h5>
            <button className="email-btn"><img ssrc={mailImg} />Email</button>
            <button className="linkedin-btn"><img src={linkedinImg} />Linkedin</button>
        </div>
    )
}
 
