import { connect } from "react-redux";
import CommentList from "./CommentList";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchComments: () => {
      fetch("/api/comments")
        .then((response) => response.json())
        .then((comments) => {
          dispatch({
            type: "COMMENTS_FETCHED",
            payload: { comments },
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
