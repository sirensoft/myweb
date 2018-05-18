import React,{Component} from 'react';
import logo from './logo.svg';
import './style.css'
import MyCom from './components/MyCom'


class App extends Component {
  render() {
    return (

      <div className='main'>
        <h1 className='mytext'>สวัสดี</h1>
        <h2>React</h2>

        <div style={{
          height:25,
          backgroundColor:'blue',
          fontWeight:'bold'
        }}>
          ใน div2
        </div>

        <MyCom title='พร้อบเพอตี้' name="อุเทน" />

      </div>

    

    );
  }
}

export default App;
