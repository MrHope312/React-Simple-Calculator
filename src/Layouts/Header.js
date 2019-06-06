import React from 'react';
import { Layout } from  'antd'
const { Header } = Layout;
export default function header(){
    return(
        <Layout>
            <Header>
                <h1 style={{color: '#fff'}}>Simple Calculator</h1>
            </Header>
        </Layout>
    )
}
