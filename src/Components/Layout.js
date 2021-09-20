import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Routes from '../Route/Routes';
import ViewModal from './ViewModal';

export default function Layout() {
    return (
        <BrowserRouter>
        <Route render={props => (
            <div>
                <Header {...props}/>
                <div className="container">
                    <div className="main">
                        <Routes/>
                    </div>
                </div>
                <Footer/>
                <ViewModal />
            </div>
        )}/>
    </BrowserRouter>
    )
}
