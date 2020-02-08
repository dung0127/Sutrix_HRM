import React from 'react';
import Header from './header';
import {Link} from 'react-router-dom';
import axios from 'axios'

class InformationDetail extends React.Component {
   

    render () {
        return (
            <div className="content">
              <div className="row detail">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4"><div>Frist Name:</div></div>
                    <div className="col-md-8"><div>{this.props.data.fristName}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Last Name:</div></div>
                    <div className="col-md-6"><div>{this.props.data.lastName}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Date of Birth:</div></div>
                    <div className="col-md-8"><div>{this.props.data.dateOfBirth}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Adress:</div></div>
                    <div className="col-md-8"><div>{this.props.data.address}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>ID:</div></div>
                    <div className="col-md-8"><div>{this.props.data.staffId}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Mobile:</div></div>
                    <div className="col-md-6"><div>{this.props.data.mobile}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Skype:</div></div>
                    <div className="col-md-8"><div>{this.props.data.skype}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Email:</div></div>
                    <div className="col-md-8"><div>{this.props.data.email}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Join Date:</div></div>
                    <div className="col-md-6"><div>{this.props.data.joinDate}</div></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"><div>Department:</div></div>
                    <div className="col-md-6"><div>{this.props.data.department}</div></div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src= {this.props.data.avatar} alt="Smiley face" height="300px" width="300px" />
                </div>
              </div>
            </div>

        );
    }
}

export default InformationDetail;