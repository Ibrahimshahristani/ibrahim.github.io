import React, { Component} from 'react';
import { Card, CardTitle, CardActions} from 'react-mdl';
class Project extends Component {

    render () {
        return (
        
<Card shadow={0} style={{width: '256px', height: '256px',  margin: '50px, 40px, 60px'}}>
    <CardTitle expand />
    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Image.jpg
        </span>
    </CardActions>
</Card>

        )
    }
}
export default Project;