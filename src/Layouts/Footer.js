import React from 'react';
import { Layout } from  'antd'
const { Footer } = Layout;
export default function footer(){
    return(
        <Layout>
            <Footer style={{ textAlign: 'center', backgroundColor: '#eee' }}>Simple Calculator ©2019 Created by M SHREYAS</Footer>
        </Layout>
    )
}
