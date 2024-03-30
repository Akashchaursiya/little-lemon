import React from "react"
import img1 from "./img1.jpg";

const Footer = () => {
    return(
        <footer>
            <section>
           <div>
            <img src={img1.jpg} alt="img1"/>
           </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;