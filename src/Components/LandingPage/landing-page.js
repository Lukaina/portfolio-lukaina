import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import '../LandingPage/styles.css';
import Image from './picture.jpg';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={Image} alt="My picture" className="picture"/>

                        <div className="banner-text">
                            <h1>Women Techmakers Ambassador · Frontend Apprentice · Philosophy Student · Illustrator</h1>

                            <hr/>

                            <p>HTML | CSS | JavaScript | React | Git | Photoshop | Clip Studio Paint</p>

                            <div className="social">

                                <a href="https://twitter.com/Lukaina_co" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.linkedin.com/in/ver%C3%B3nica-alcaraz-machado-5114561aa/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/Lukaina" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-alt" aria-hidden="true" />
                                </a>

                                <a href="https://codepen.io/veroalcaraz" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-codepen" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
