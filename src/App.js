import React from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
//import Footer from './components/footer.js';
import Contact from './components/contact';

function App() {
  return (

    <Layout fixedHeader className = "main">
        <Header className="header-color" title={<span><span style={{ color: '#000' }}> </span></span>}>
            <Navigation >
                 <Link to="/">Home</Link>
              
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
            </Header>


    <Main/>

</Layout>

    


  );

}


export default App;
