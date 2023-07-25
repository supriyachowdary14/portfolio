// Comment.js
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Comment() {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
    const handleSubmit = () => {
        if (comment.trim() !== '') {
          const newComment = {comment };
          setCommentsList([...commentsList, newComment]);
          setErrorMessage('');
        } else {
          setErrorMessage('Please enter a comment.');
        }
      };
 return(
 <>
    <h2>Write comments here</h2>
    <div>
    <textarea className="form-control" value={comment} onChange={handleCommentChange} placeholder="Your Comment" />
    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
    {errorMessage && <p>{errorMessage}</p>}
      <div>
        <h3>Comments</h3>
        {commentsList.length > 0 ? (
          <ul>
            {commentsList.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </>
 )
};
export default Comment;