import React from 'react';
import {Link} from 'react-router-dom';
import './banner.css';

export function Banner() {  

    return (            
        <section id="banner">         
            <h1>My Educational Tools</h1>                
            <Link className="styled-link" to="/tools">View list of educational tools</Link>
            <Link className="styled-link" to="/comments">See what user's are commenting</Link>

        </section>   
    )       
}

export default (Banner);
