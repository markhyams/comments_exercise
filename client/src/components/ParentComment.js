import React from "react";
import Comment from "./Comment";

const ParentComment = ({ comment, replies, onShowMoreReplies }) => {
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}

        {comment.replies_count === replies.length ? null : (
          <a href="#" className="show_more" onClick={onShowMoreReplies}>
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default ParentComment;
