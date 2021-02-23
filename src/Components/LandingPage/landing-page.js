import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import '../LandingPage/styles.css';
import Image from './picture.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={Image} alt="My picture" className="picture"/>

                        <div className="banner-text">
                            
                            <h1>Hello World! I'm Verónica Alcaraz</h1>

                            <h4>Women Techmakers Ambassador · Frontend Apprentice · Philosophy Student · Illustrator</h4>

                            <hr/>

                            <p>HTML | CSS | JavaScript | React | Git | Photoshop | Clip Studio Paint</p>

                            <div className="social">

                                <a href="https://twitter.com/Lukaina_co" rel="noopener noreferrer" target="_blank">
                                    <TwitterIcon color="primary" aria-label="Twitter" style={{ fontSize: 50 }} />
                                </a>

                                <a href="https://www.linkedin.com/in/ver%C3%B3nica-alcaraz-machado-5114561aa/" rel="noopener noreferrer" target="_blank">
                                    <LinkedInIcon color="primary" aria-label="LinkedIn" style={{ fontSize: 50 }} />
                                </a>

                                <a href="https://github.com/Lukaina" rel="noopener noreferrer" target="_blank">
                                    <GitHubIcon color="primary" aria-label="GitHub" style={{ fontSize: 50 }} />
                                </a>
                            
                                <a href="https://codepen.io/veroalcaraz" rel="noopener noreferrer" target="_blank">
                                    <CodeSharpIcon color="primary" aria-label="CodePen" style={{ fontSize: 50 }}/>
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
