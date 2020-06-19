import React from "react";
import ParentCommentContainer from "./ParentCommentContainer";

class CommentList extends React.Component {
  componentDidMount() {
    this.props.onFetchComments();
  }

  render() {
    return (
      <div className="comments">
        <h2>Comments (2)</h2>
        {this.props.comments.map((comment) => (
          <ParentCommentContainer
            key={comment.id}
            comment={comment}
            onShowMoreReplies={this.props.onShowMoreReplies}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
