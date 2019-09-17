import React from 'react';
import AppBar from './appBar';
import PortfolioReports from '../reports/portfolioReports';

const AppContainer = () => {
    return (
        <>
            <AppBar/>
            <PortfolioReports />
        </>
    );
}

export default React.memo(AppContainer);


