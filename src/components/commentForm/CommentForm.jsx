import { useState } from 'react';
import './commentForm.css';
const CommentForm = ({ handleSubmit, submitLabel }) => {
    const [comment, setComment] = useState("");
    const isDisabled = comment.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(comment);
        setComment("");
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea className="comment-form-textarea" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button className="comment-form-button" disabled={isDisabled}>{submitLabel}</button>
        </form>
    );
}

export default CommentForm;
