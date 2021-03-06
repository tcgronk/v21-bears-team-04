import React, { useState } from "react";
import { connect } from "react-redux";
import { Typography, Button } from "../../components";
import { deleteAndRemoveActivity } from "../../actions/activities";
import CommentBox from "../CommentBox/CommentBox"


const JournalEntryDetail = ({ activity, deleteAndRemoveActivity, token }) => {
  const [showComments, setShowComments] = useState(false);
  const handleDelete = () => {
    deleteAndRemoveActivity(activity.id, token);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  console.log("activity", activity);
  return (
    <div  >
      <div>
        <Typography variant="h6">
          Activity Type: {activity.category.name}
        </Typography>
        {activity.calories && (
          <Typography variant="h6">Calories: {activity.calories}</Typography>
        )}
        {activity.distance && (
          <Typography variant="h6">Distance: {activity.distance}</Typography>
        )}
        {activity.steps && (
          <Typography variant="h6">Steps: {activity.steps}</Typography>
        )}
      </div>

      <Button variant="contained" color="secondary" onClick={handleDelete}>
        delete this activity
      </Button>
      {
        <Button variant="contained" color="secondary" onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
      }
      {showComments && <CommentBox activityId={activity.id} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { deleteAndRemoveActivity })(
  JournalEntryDetail
);

