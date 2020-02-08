import React from 'react';
import axios from 'axios';

class AddComment extends React.Component {
    
  constructor(props){
    super(props);
    this.state = {
        //listComment: [],
        commentContent: ''
      };
    this.onAddNewComment = this.onAddNewComment.bind(this);
    this.onUpdateInputChange = this.onUpdateInputChange.bind(this);
    }

    onAddNewComment(){
        axios
        .post('http://localhost:3001/comments/add_new_comment', {
          commentContent: this.state.commentContent,
          postId: this.props.postId
        })
        .then(res => {
          //this.getData();
          //this.props.updateComment();
          this.setState({
            commentContent: ''
          });
        });
        //this.props.history.push('/')
    }

    //onUpdateInputChange = (evt){}
    onUpdateInputChange(evt){
        //evt: giá trị của content đang nhập
        //console.log(evt.target.value)
        this.setState({
            commentContent: evt.target.value
        })
    }
    render () {
        return (
            <div>
                <form className='note-cmt'>
                  <input type='text'
                         value= {this.state.commentContent}
                         className='txtCommentError'
                         onChange = {(evt)=>this.onUpdateInputChange(evt)}
                         className='noteInput' placeholder='Write a note' />
                  <button onClick={this.onAddNewComment}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddComment;