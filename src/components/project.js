import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { Card, CardTitle, CardActions} from 'react-mdl';
class Project extends Component {

    render () {
        return (
            <div className ="project">
               <h3 className="h1-responsive font-weight-bold  my-4">Projects</h3>
            <ul>
                <li>
                    <a href="countr.html">Country Project</a>
                </li>
                <li>
                    <a href="countr.html">SSD Front end Project</a>
                </li>
                <li>
                    <a href="countr.html">.Net Project</a>
                </li>
            </ul>
            </div>

        )
    }
}
export default Project;