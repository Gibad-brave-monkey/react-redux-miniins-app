import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { commentUpdate } from "./redux/actions";


function SingleComments({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  }

  const handleDelete = (e) => {
    console.log('e.target.value');
    e.preventDefault();
  }

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comment-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput}/>
      <input type="submit" hidden />
    </form>
  );
}

// 1:22

export default SingleComments;
