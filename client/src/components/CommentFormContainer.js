import { connect } from "react-redux";
import CommentForm from "./CommentForm";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newComment, callback) => {
      fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
        .then((newComment) => {
          dispatch({
            type: "COMMENT_ADDED",
            payload: { newComment },
          });

          callback();
        });
    },
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
