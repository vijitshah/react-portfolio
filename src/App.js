import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg'

// class RegularClass {}

// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    state = {displayBio : false};

    // constructor(){
    //     super();
    //     this.state = {displayBio : false};
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio});
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!!</h1>
                <p>My name is Vijit Shah.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I work as a Software Engineer.</p>
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
            </div>
        )
    }

}
export default App;