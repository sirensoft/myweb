import React, { Component } from 'react';

class MyLife extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount(){
        console.log('life','will mount')
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    

    render() {
        return (
            <div>
                xxxx
            </div>
        )
    }

}

export default MyLife;