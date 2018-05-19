import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import ReactTable from "react-table";
import "react-table/react-table.css";


class MyFormData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prename: 'นาย',
            fname: '',
            lname: '',
            birth: moment(),
            items: []
        }
    }

    async componentDidMount() {

    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = (date) => {
        this.setState({
            birth: date
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let resp = await axios.post('http://localhost:4000/', {
            prename: this.state.prename,
            fname: this.state.fname,
            lname: this.state.lname,
            birth: moment(this.state.birth).format("YYYY-MM-DD")
        });
        alert(resp.data)

        this.setState({
            prename: 'นาย',
            fname: '',
            lname: '',
            birth: moment()
        })
    }
    render() {

        axios.get('http://localhost:4000/').then((resp) => {
            this.setState({
                items: resp.data
            })
        })

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        คำนำหน้า
                    <select name='prename' onChange={this.onChange} value={this.state.prename}>
                            <option value='นาย'>นาย</option>
                            <option value='นาง'>นาง</option>
                            <option value='นางสาว'>นางสาว</option>
                        </select>
                    </p>
                    <p>ชื่อ <input name='fname' onChange={this.onChange} value={this.state.fname} /></p>
                    <p>สกุล <input name='lname' onChange={this.onChange} value={this.state.lname} /></p>
                    <p>วดป.เกิด <input disabled name='birth' onChange={this.onChange} value={moment(this.state.birth).format("YYYY-MM-DD")} /></p>

                    วดป.เกิด
                        <DatePicker
                        selected={this.state.birth}
                        onChange={this.onChangeDate}
                    />

                    <button>ตกลง</button>

                </form>
                <div>
                    {
                        this.state.items.map((row, i) => (
                            <li key={i}>
                                {row.prename},
                            {row.fname},
                            {row.lname},
                            {moment(row.birth).format("YYYY-MM-DD")}
                            </li>
                        ))
                    }
                </div>
                <div>
                    <ReactTable
                        data={this.state.items}
                        columns={[
                            {
                                
                                columns: [
                                    {
                                        Header: "คำนำ",
                                        accessor: "prename"
                                    },
                                    {
                                        Header: "First Name",
                                        accessor: "fname"
                                    },
                                    {
                                        Header: "Last Name",                                        
                                        accessor: "lname"
                                    },
                                    {
                                        Header: "วดป.เกิด",
                                        id:'birth',
                                        accessor : d=>moment(d.birth).format("YYYY-MM-DD")
                                    }
                                ]
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        )
    }


}

export default MyFormData;