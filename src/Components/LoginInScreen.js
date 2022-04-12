import React from 'react';
import Banner from './LoginInScreen/Banner';
import Stream from './LoginInScreen/Stream';
import Groupwatch from './LoginInScreen/GroupWatch';
import BlackPanther from './LoginInScreen/BlackPanther';
import DownloadNow from './LoginInScreen/DownloadNow';
import GridTheme from './LoginInScreen/GridTheme';
import Advertise from './LoginInScreen/Advertise';
import Devices from './LoginInScreen/Devices';
const LogInScreen = () => {
    return (
        <>
            <Banner/>
            <Stream/>
            <Groupwatch/>
            <BlackPanther/>
            <GridTheme/>
            <DownloadNow/>
            <Advertise/>
            <Devices/>
        </>
    );
};

export default LogInScreen;