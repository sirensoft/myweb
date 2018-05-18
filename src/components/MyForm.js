import React ,{Component} from 'react';


class MyForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            fname:'',
            lname:'',
            age:0,
            items:[]
        }
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onChangeAge=(e)=>{
        this.setState({
            age : e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        let data = this.state.items;
        data.push({
            fname:this.state.fname,
            lname:this.state.lname,
            age:this.state.age
        })
        
        this.setState({
            items:data
        })
       
        
        this.setState({
            fname:'',
            lname:'',
            age:0
        })       

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    ชื่อ :<input name='fname' onChange={this.onChange} value={this.state.fname} /><br/>
                    นามสกุล <input name='lname' onChange={this.onChange} value={this.state.lname} /><br/>
                    อายุ <input  onChange={this.onChangeAge} value={this.state.age} /> ปี<br/>
                    <button>บันทึก </button>
                </form>
                <div>
                    {this.state.items.map(
                        (data,index)=>(<li key={index}>{data.fname} {data.lname} {data.age}</li>)
                    )}
                </div>
            </div>
        )
    }
}


export default MyForm