import React from 'react';
import Header from './header';
import Comment from './comment';
import axios from 'axios';
import AddComment from './addComment';
import InformationDetail from './informationDetail';
class Information extends React.Component {
  componentDidMount() {
    //console.log("received "+this.props.location.state.hello);
    this.fetchData();
  }

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      staffs: []
    };
  }

  fetchData =() => {
    axios
      .get('http://localhost:3001/comments/get_comments_by_staff/'+ this.props.location.state.hello)
      .then(res => {
        console.log('data', res);
        this.setState({
          comments: res.data
        });
      });

    axios 
      .get('http://localhost:3001/staffs/get_staff_detail/'+ this.props.location.state.hello)
      .then(res1 => {
        console.log('data', res1);
        this.setState({
          staffs: res1.data
        });
      });
  };

  
  
  render() {
    const { comments } = this.state;
    const { staffs } = this.state;
    return (
        <div>
          <Header></Header>
          <section className="nav">
            <div className="barmenu">
              <ul className="breadcrumb">
                <li><a href="#">Staff</a></li>
                <li><a href="#">Filter</a></li>
              </ul>
            </div>
            <div className="edit">Edit </div>
            <div className="add">Add </div>
          </section>
            <section>
               <InformationDetail data={staffs} />;
            
            </section>
          <section>
            <div className="history">History</div>
            {comments.map((com, index) => {
                return <Comment data={com} key={index} />;
            })}
          </section>
          <section className="note">
            <AddComment ></AddComment>
          </section>
        </div>

    );
  }
}

export default Information;