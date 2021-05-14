import React from 'react';
import AppConsumer from '../context/AppConsumer';
import Home from '../lighthouses/Home/Home';
import Augustine from '../lighthouses/Augustine/Augustine';
import Hercules from '../lighthouses/Hercules/Hercules';
import Lindau from '../lighthouses/Lindau/Lindau';
import Peggys from '../lighthouses/Peggys/Peggys';

const elements = { Home, Augustine, Hercules, Lindau, Peggys };

const Router = ({ route }) => (
    React.createElement(elements[route])
);

export default AppConsumer(Router);

