import React from 'react'

import './Developers.css'
import Layout from '../components/layout';
import { useSpring, animated as a } from "react-spring";

const App = () => {
  const [greetingStatus, displayGreeting] = React.useState(false);
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -300
  });
  return (
    <div className="contain">
      <div className="button-container">
        <button onClick={() => displayGreeting(a => !a)} className="button">
          info
        </button>
      </div>
      {!greetingStatus ? (
        <div className="intro"> Role in the team<br/>
        Developer</div>
      ) : (
        <a.div className="box" style={contentProps}>
          <h4>Hey there ! React Spring is awesome.</h4>
        </a.div>
      )}
    </div>
  );
};


const url= 'https://jardin.ee/wp-content/uploads/2014/08/No-profile-LinkedIn-e1566456325422-320x320.jpg';
const Developers = (props) => {
   return (
      <Layout>
          <div>
             <ul className='team' >
                <li className='team-list' >
                   <div>
                   <img src={url} />
                   <h2><a href="https://github.com/Asindeton" className='team-link' >Dmitry Legankov</a></h2>
                   <App />
                   </div>
                </li>
                <li className='team-list' >
                   <img src={url} />
                   <h2><a href="https://github.com/shebekocom" className='team-link' >Nikolay Shebeko</a></h2>
                   <App />
                </li>
                <li className='team-list' >
                   <img src={url} />
                   <h2><a href="https://github.com/Kr-Mx" className='team-link' >Maksim Kryshneu</a></h2>
                   <App />
                </li>
             </ul>
             <ul className='team'>
                <li className='team-list' >
                   <img src={url} />
                   <h2><a href="https://github.com/GurbanovAli" className='team-link' >Ali Gurbanov</a></h2>
                   <App />
                </li>
                <li className='team-list' >
                   <img src={url} />
                   <h2><a href="https://github.com/vukzh" className='team-link' >Vladimir Zhdanov</a></h2>
                   <App />
                </li>
                <li className='team-list' >
                   <img src={url} />
                   <h2><a href="https://github.com/pavlenstory" className='team-link' >Pavel Andreikovets</a></h2>
                   <App />
                </li>
             </ul>
          </div>
      </Layout>
   )
}

export default Developers