import React from 'react';
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-details';

const App = () => {
    return (
        <div>
            <h2>Username list:</h2>
            <UserList></UserList>
            <h2>User details:</h2>
            <UserDetail></UserDetail>
        </div>
    );
};


export default App; 