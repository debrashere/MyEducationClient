import React from 'react';
import './footer.css';

export function Footer() {     
    return (
    <footer id="footer">
    <div className="container">
        <section className="links">
            <div className="row flex-container">
                <section className="flex-item-footer">          
                    <ul className="horizontal">
                        <li><a href="/toolsOverview">About My Educational Tools</a></li>
                        <li><a href="/terms"> Terms and Conditions</a></li>
                        <li><a href="/contacts"> Contacts</a></li>
                    </ul>
                </section>                    
            </div>
        </section>
        <div className="row">
            <div className="footer">
                <ul className="copyright">
                    <li>&copy; MyEducation. All rights reserved.</li>
                    <li>Author: Debra O.</li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
    )    
}
export default (Footer);
  