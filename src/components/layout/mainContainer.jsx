import React from 'react';
import AppBar from './appBar';
import TransactionsList from '../transactions/transactionsList';

const AppContainer = () => {
    return (
        <>
            <AppBar/>
            <TransactionsList />
        </>
    );
}

export default React.memo(AppContainer);


