import React from "react";
import '../CSS/footer.css'
import logo from '../pics/benjaskya.png'

 const Footer = () =>{
    return(
        // <div className="footer">
        //     <ul className="footer-row">
        //         <li className="main-list"> Working hours
        //             <div className="class-flex">
        //                 <ul className="footer-sublist">
        //                     <li className="sublist-li"> Monday </li>
        //                     <li className="sublist-li"> Tuesday </li>
        //                     <li className="sublist-li"> Wenesday </li>
        //                     <li className="sublist-li"> Thursday </li>
        //                     <li className="sublist-li"> Friday </li>
        //                     <li className="sublist-li"> Saturday </li>
        //                     <li className="sublist-li"> Sunday </li>
        //                 </ul>
        //                 <ul className="footer-sublist">
        //                     <li className="sublist-li"> 8:00 AM - 6:00 PM</li>
        //                     <li className="sublist-li"> 8:00 AM - 6:00 PM</li>
        //                     <li className="sublist-li"> 8:00 AM - 6:00 PM</li>
        //                     <li className="sublist-li"> 8:00 AM - 6:00 PM</li>
        //                     <li className="sublist-li"> 8:00 AM - 6:00 PM</li>
        //                     <li className="sublist-li"> 8:00 AM - 6:00 PM</li>
        //                     <li className="sublist-li"> 9:00 AM - 5:00 PM</li>
        //                 </ul>
        //             </div>
        //         </li>
                    
        //         <li className="main-list"> Get in touch
        //             <div className="class-flex">
        //                 <ul className="footer-sublist">
        //                     <li className="sublist-li">Ben the cleaner</li>
        //                     <li className="sublist-li">Banta rd, Indianoplis IN 46227</li>
        //                     <li className="sublist-li">786-247-2127</li>
        //                 </ul>
        //             </div>
        //         </li>

        //         <li className="main-list"> Payment accepted
        //             <div className="class-flex">
        //                 <ul className="footer-sublist">
        //                     <li className="sublist-li">Cash</li>
        //                     <li className="sublist-li">CashApp</li>
        //                     <li className="sublist-li">Zelle</li>
        //                     <li className="sublist-li">Check</li>
        //                 </ul>
        //             </div>
        //         </li>
        //         <li className="main-list"> Social media</li>
        //     </ul>
        // </div>
        <div className="footer-container">
            <div className="footer-top flex-container">
                <div className="block-container">
                    <div className="top-list">
                        <p><img src={logo} alt="Benjaskya Logo" /></p>
                    </div>
                    <div className="footer-list">
                        <p>Contact us</p>
                        <p>tel: 786-247-2127</p>
                        <p>Send us an email:</p>
                        <p>benskya@gmail.com</p>
                    </div>
                    <div>
                        twitter logo, facebook, linkedIn
                    </div>
                </div>
                <div className="block-container">
                    <div className="top-list">
                        <p>Important links</p>
                    </div>
                    <div className="footer-list">
                        <p>Home</p>
                        <p>About Benskya</p>
                        <p>Book now</p>
                        <p>Services</p>
                        <p>Leave a comment</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="block-container">
                    <div className="top-list">
                        <p>Need to know</p>
                    </div>
                    <div className="footer-list">
                        <p>Cancelation policy</p>
                        <p>FAQ</p>
                        <p>Why Benskya</p> 
                        <p>File a complaint</p>                       
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2022 BENJASKYA. All rights reserved | Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Footer;