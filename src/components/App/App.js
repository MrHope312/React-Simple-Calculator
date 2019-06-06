import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; //provides store to whole app
// import { store } from "./helpers";//store containing the reducers
// import * as serviceWorker from './serviceWorker';
import './App.css';
// import Button from 'antd/lib/button';

import Headerone from '../../Layouts/Header';
import Content from '../../Layouts/Content';
import Footer from '../../Layouts/Footer';

import { Layout } from 'antd';

export default function app () {
    return (
        <div className="App">
            {/* <Button type="primary">Button</Button> */}
            <Layout className="layout">
            <Headerone>
            </Headerone>
            <Content/>
            <Footer/>
            </Layout>
        </div>
    )
}
