import React from 'react';
import './mail.css';


const mailer = ()=>{
    return(
        <div className="mail-container">
            <h1>Stay Connected with Fit Belive</h1>
            <p>We’d love to hear from you! Whether you have questions about memberships, classes, or your fitness journey, our team is here to help.</p>
            <form action="" method="post">
                <input type="email" placeholder='Enter your Name'  name='email'/>
                <input type="subcribe" />
            </form>
            <i>Subscribe to Newsletter</i>
        </div>
    )
}