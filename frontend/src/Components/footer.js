import React from "react";

 const Footer = () =>{
    return(
        <div className="footer">
            <ul className="footer-row">
                <li className="main-list"> Working hours</li>
                    <div className="class-flex">
                        <ul className="footer-sublist">
                        <li> Monday </li>
                        <li> Tuesday </li>
                        <li> Wenesday </li>
                        <li> Thursday </li>
                        <li> Friday </li>
                        <li> Saturday </li>
                        <li> Sunday </li>
                    </ul>
                    <ul className="footer-sublist">
                        <li> 8:00 AM - 6:00 PM</li>
                        <li> 8:00 AM - 6:00 PM</li>
                        <li> 8:00 AM - 6:00 PM</li>
                        <li> 8:00 AM - 6:00 PM</li>
                        <li> 8:00 AM - 6:00 PM</li>
                        <li> 8:00 AM - 6:00 PM</li>
                        <li> 9:00 AM - 5:00 PM</li>
                    </ul>
                    </div>
                <li className="main-list"> Get in touch</li>
                    <div className="class-flex">
                        <ul className="footer-sublist">
                            <li>Ben the cleaner</li>
                            <li>Banta rd, Indianoplis IN 46227</li>
                            <li>786-247-2127</li>
                        </ul>
                    </div>
                <li className="main-list"> Payment accepted</li>
                <li className="main-list"> Social media</li>
            </ul>
        </div>
    )
}

export default Footer;