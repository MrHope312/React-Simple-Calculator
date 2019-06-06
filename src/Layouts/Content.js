import React, { Component } from 'react';
import { Layout, Button } from  'antd'

const { Content } = Layout;
class content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicked :''
         }
    }

    handleButtonClicked = ev => {
        this.setState({clicked:`${ev.currentTarget.value}`})
    }
    handleAddClicked = ev => {
        let newstate = {clicked:`${this.state.clicked}`};
        console.log(newstate,"newstate")
        let val = newstate.clicked;
        val++
        console.log(val,"newstate after addition")
    }
    
    render() { 
        const number = [9,8,7,6,5,4,3,2,1,0];
        console.log(this.state,'initial state');
            return(
                <Layout>
                    <Content>
                        <section style={{padding:'5em', background: '#fff' }}>
                            <section style={{display: 'grid',gridTemplateColumns:'auto auto auto'}} className="buttons">
                                {number.map((value, index) => {
                                    return <Button style={{padding:'3em', fontSize: '1.2em'}}
                                                   key= {index}
                                                   onClick={this.handleButtonClicked}
                                                   value = {value}
                                                   >
                                                    {value}
                                    </Button>
 
                                })}
                                <Button
                                style={{padding:'3em', fontSize: '1.2em'}} 
                                onClick={this.handleAddClicked}
                                >+</Button>
                            </section>
                        </section>
                    </Content>
                </Layout>
            )
    }
}
 
export default content;
