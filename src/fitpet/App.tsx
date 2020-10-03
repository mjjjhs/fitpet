import * as React from 'react';
import ResetStyle from './styles/Reset';
import CommonStyle from './styles/Common';
import Header from './components/Header';

function App() {
    return (
        <React.Fragment>
            <Header />
            <style jsx>{ResetStyle}</style>
            <style jsx>{CommonStyle}</style>
        </React.Fragment>
    );
}


export default App;
