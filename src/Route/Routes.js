import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Cart from '../Pages/Cart';
import Catalog from '../Pages/Catalog';
import Home from '../Pages/Home';
import Products from '../Pages/Products';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/catalog/:slug">
                <Products />
            </Route>
            <Route path="/catalog">
                <Catalog />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
    )
}
