import React from 'react';
import Header from './header';
import {Link} from 'react-router-dom';
import axios from 'axios'

class ResultList extends React.Component {
    

    render () {
        return (
            <tr>
                <td>
                    <Link
                        to={{
                            pathname: "/information/"+this.props.data.staffId,
                            state: {
                                hello: this.props.data.staffId
                            }
                        }}>
                        {this.props.data.lastName} {this.props.data.fristName}
                    </Link> 
                </td>
                <td>{this.props.data.joinDate} </td>
                <td>{this.props.data.skype} </td>
                <td>{this.props.data.email} </td>
                <td>{this.props.data.department} </td>
            </tr>

        );
    }
}

export default ResultList;