import React from "react";
import CommentListContainer from "./CommentListContainer";
import CommentFormContainer from "./CommentFormContainer";

/*

Comment App - React must return one element
  Comment list
    - Parent Comment
        - Comment
          - Reply...
  Add comment
    - Form

- Generally better to work top down with React
*/

const CommentApp = () => {
  return (
    <div>
      <CommentListContainer />
      <CommentFormContainer />
    </div>
  );
};

export default CommentApp;
