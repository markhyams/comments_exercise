import { connect } from "react-redux";
import ParentComment from "./ParentComment";

const mapStateToProps = (state, ownProps) => {
  return {
    replies: state.replies.filter((reply) => {
      return reply.comment_id === ownProps.comment.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onShowMoreReplies: (event) => {
      event.preventDefault();

      fetch(`/api/comment_replies?comment_id=${ownProps.comment.id}`)
        .then((response) => response.json())
        .then((restOfReplies) => {
          dispatch({
            type: "REPLIES_FETCHED",
            payload: { replies: restOfReplies },
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComment);
