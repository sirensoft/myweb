import React,{Component} from 'react';
import '../style.css'

class MyCom extends Component{
constructor(props){
    super(props)
    this.state = {
        myname :'',
        lname:'จาดยางโทน'
    }
}

btnClick=()=>{
    this.setState({
        myname:'xxxxx',
        lname:'ssssss'
    })
}

changeName=(e)=>{
    //console.log(e.target)
    this.setState({
        myname:e.target.value
    })
}




render(){
    return(
        <div style={{color:'black'}}>
            <p>comp ย่อย</p>
            <p className='mytext'>component ย่อย</p>
            <p>{this.props.title}</p>
            <p>{this.props.name}</p>
            <p>{1+1}</p>
            <p>{this.state.myname } {this.state.lname}</p>
            <button onClick={this.btnClick}>เปลี่ยนชื่อ</button>
            <br/>
            <input value={this.state.myname} onChange={this.changeName} />

        </div>
    )
}

}

export default MyCom
