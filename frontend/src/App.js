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

  function checkInput() {
    //var input = document.getElementById('textInput');
    var button = document.getElementById('submitButton');
    if(comment !== '')
    {
      button.disabled = false;
    } else
      button.disabled = true;
  }


  return (
    <>  
        <div className="container">
          <div className="top-container">
            <h2 className="issue-name">*Issue Name*</h2>
          </div>
          <div className="main-container">
            {
              comments.map((text)=> (
                <div className="comment-container">
                  <div className="profile-pic"></div>
                  <div className="triangle"></div>
                  <div className="text-and-info-container">
                    <div className="user-info-container"></div>
                    <div className="text-container">{text}</div>
                  </div>
                </div>
              )
              )
            }
            <div className="comment-flexbox">
              <div className="profile-pic" id="user-profile-pic"></div>
              <div className="comment-outerbox">
                <h4 className="add-comment">Add comment</h4>
                <div className="comment-tabs">
                  <h4 className="write">Write</h4>
                </div>
                <textarea
                  value={comment}
                  onChange={onChangeHandler}
                  onInput={checkInput}
                  className="input-box"
                  id="textInput"
                />
                <button onClick={onClickHandler} className="comment-button"
                id="submitButton">
                  Comment
                </button>
              
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
