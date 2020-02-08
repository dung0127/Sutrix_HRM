import React from 'react';
import Header from './header';
import Result from './result';
import axios from 'axios'
class ResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          listStaff: []
        };
        
    }

    componentDidMount () {
        this.getData();
    }

    getData = () =>{
        axios.get('http://localhost:3001/staffs/get_all').then(res => {
          console.log('data', res);
          this.setState({
            listStaff: res.data
          })
        });
    }
    render() {
        const staffState = this.state.listStaff;
        return (
            <div>
                <Header></Header>
                <div className="kk">
                    <div className="barmenu">
                    <ul className="breadcrumb">
                        <li><a href="#">Staff</a></li>
                        <li><a href="#">Filter</a></li>
                    </ul>
                    </div>
                    <div className="add">Add </div>
                </div>
                <article>
                    <div className="content">
                    <table>
                        <tbody>
                            <tr>
                                <th>Full Name</th>
                                <th>Join Date</th>
                                <th>Skype</th>
                                <th>Email</th>
                                <th>Department</th>
                            </tr>
                        </tbody>
                        
                        
                        {staffState.map((staff, index) => {
                            return <Result data={staff} key={staff.staffId}/>;
                        })} 
                        
                        
                        </table>
                    </div>
                </article>
                </div>

        );
    }
}

export default ResultList;