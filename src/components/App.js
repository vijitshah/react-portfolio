import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';
import profile from '../assets/profile.jpg';

class App extends Component {
    state = {displayBio : false};

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio});
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!!</h1>
                <p>My name is Vijit.</p>
                <Title/>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I'm always looking forward to working on meaningful projects. Looking forward to hear from you soon.</p>
                            <p>Skillset: Python, Javascript, React, Shell scripting</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>

                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>

                        </div>
                    )
                } 
                <hr />
                <Projects /> 
                <hr />
                <SocialProfiles /> 
                <hr/>
                <Jokes/>
            </div>
        )
    }

}
export default App;