import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import './styles.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}>Project 1</CardTitle>
                            <CardText>
                                lorem impsuhkhjjhj hjhghjghjg gjgjhgjhghj
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Codepen</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}>Project 1</CardTitle>
                            <CardText>
                                lorem impsuhkhjjhj hjhghjghjg gjgjhgjhghj
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Codepen</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}>Project 1</CardTitle>
                            <CardText>
                                lorem impsuhkhjjhj hjhghjghjg gjgjhgjhghj
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Codepen</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is HTML & SASS</h1></div>
            )
        }else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is JavaScript</h1></div>
            )
        }else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is React</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>HTML & CSS</Tab>
                    <Tab>HTML & SASS</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
            </div>
        )
    }
}

export default Projects;