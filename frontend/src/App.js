import { useState } from "react";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="main-container">
      {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
      <div className="comment-flexbox">
        <h4 className="comment-text" id="add-comm">Add a comment</h4>
        <div className="comment-outerbox">
          <h4 className="comment-text" id="write">Write</h4>
          <textarea
            value={comment}
            onChange={onChangeHandler}
            className="input-box"
          />
        </div>
        
        <button onClick={onClickHandler} className="comment-button">
          Comment
        </button>
      </div>
    </div>
  );
}

export default App;
