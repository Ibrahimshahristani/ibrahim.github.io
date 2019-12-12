import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import {Grid, Cell } from 'react-mdl';
//import { section, CardTitle, CardActions} from 'react-mdl';
class Contact extends Component {

    render () {
        return (
          
<div className="contact">
<section className="mb-4">

    <h3 className="h1-responsive font-weight-bold  my-4">Contact me</h3>
    <p class=" w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. 
        a matter of hours to help you.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="name" className="lb">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                           
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="email" className="lb">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                            
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                        <label for="subject" className="lb">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                           
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                        <label for="message"className="lb">Your message</label>
                            <textarea type="text" id="message" name="message" rows="8" class="form-control md-textarea"></textarea>
                          
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
                <br/>
                <a className="btn btn-primary">Send</a>
            </div>
          
        </div>
        
        

    </div>

    </section>
    </div>
        )
    }
}
export default Contact;