import React from 'react'
import { useState, useEffect } from 'react';
import { createComment, listComments, removeComment } from '../services/CommentService';


const ListComentsComponent = () => {
    const [content, setContent] = useState("");
    const [comments, setComments] = useState([]);

    /*DUMMY DATA*/
    const author = "Author";
    const timestamp = "2004-04-04T14:42:19.561+00:00";


    useEffect(()=> {
        getAllComments();
    }, []);

    function getAllComments(){
        listComments().then((response)=>{
            setComments(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function saveComment(){
      //e.preventDefault();
      const comment = {author, content, timestamp};
      createComment(comment)
                      .catch((error) => {
                        console.log(error);
                      });
      window.location.reload(false);
    }
    
    function deleteComment(e){
      removeComment(e.target.id);
      window.location.reload(false);
    }
    
    const onChangeHandler = (e) => {
      setContent(e.target.value);
    };
    
    

return (
    <>
       <div className="container">
          <div className="top-container">
            <h2 className="issue-name">*Issue Name* #issueId</h2>
          </div>
          <div className="main-container">
            {
              comments.map((comment)=> (
                <div className="comment-container"  key={comment.id}>
                  <div className="profile-pic"></div>
                  <div className="triangle"></div>
                  <div className="text-and-info-container">
                    <div className="user-info-container">
                        <h5>{comment.author} commented:</h5>
                        <div className='options'>
                          <button id={comment.id} onClick={deleteComment}>Del</button>
                        </div>
                    </div>
                    <div className="text-container">{comment.content}</div>
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
                  value={content}
                  onChange={onChangeHandler}
                  placeholder="Add your comment here..."
                  className="input-box"
                  id="textInput"
                />
                <button onClick={saveComment} className="comment-button"
                id="submitButton"
                disabled={!content}>
                  Comment
                </button>
              
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default ListComentsComponent