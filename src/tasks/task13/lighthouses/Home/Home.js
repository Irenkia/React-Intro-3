import React from 'react';
//import { translate } from 'react-i18next';
import photo1 from '../../../../assets/imgTask13/Peggys.png';

const Home = () => (
    <div className='preview'>
        <h1>Lighthouses</h1>
        <div className="cover">
            <figure className='center'>
                <img src={photo1} alt="Lighthouse" />
            </figure>
        </div>
        <p className='center'>Know the most beautiful lighthouses of the world.</p>
    </div>
);

export default Home;

