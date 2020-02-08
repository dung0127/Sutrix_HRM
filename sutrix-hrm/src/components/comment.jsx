import React from 'react';
import axios from 'axios';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteComment = this.onDeleteComment.bind(this);
    }

    onDeleteComment(){
        axios
        .delete('http://localhost:3001/comments/delete/'+ this.props.data.commentId);
        //this.props.history.push('/')
    }

    render () {
        return (
            <article className="post">
                <div className="time">
                    {this.props.data.createdDate}
                    <div className="fa fa-times delete" aria-hidden="true" onClick={this.onDeleteComment} />
                </div>
                <div className="list-line">
                    <hr width="100%" align="center" />
                </div>
                <div className="post-content">
                    {this.props.data.commentContent}    
                </div>
            </article>
        );
    }
}

export default Comment;