import React from 'react';
import {connect} from 'react-redux';
import './footer.css';

export class Footer extends React.Component {
	render() {
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
}

const mapStateToProps = (state) => {
    return {
      tools: state.toolsReducer.tools
    }
  }
  
export default connect(mapStateToProps)(Footer);
  