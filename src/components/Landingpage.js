import React, { Component} from 'react';
import {Grid, Cell } from 'react-mdl';
import myimage from '../images/myimg.jpg';

class Landingpage extends Component {

    render () {
        return (
           <div style = {{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                        
                    
                    <img src = {myimage}
                        alt="myimage"
                     
                        className="myimage"
                        />
       

        
                        <div className="banner-text">
                            <h1>Ibrahim Shahristani</h1> 
                            <p>// Full Stack Developer </p>

                            
                            <p>/** C# | React | Sql Server | HTML | CSS | Angular **/ </p>
                            <br/>   <br/>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/shahristani/" rel=" noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/Ibrahimshahristani" rel=" noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel=" noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>
                    
                    

                   </Cell>
            
               </Grid>

           </div>
         
        )
       
    }
}
export default Landingpage;