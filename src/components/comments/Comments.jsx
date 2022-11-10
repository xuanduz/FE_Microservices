import { useState, useEffect } from 'react';
import { getComments } from '../../services/commentsService';
import Comment from '../comment/Comment';
import CommentForm from '../commentForm/CommentForm';
import './comments.css';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then((data) => {
            setComments(data.data);
        });
    }, []);

    const getReplies = (comment_id) => {
        return comments.filter(comment => comment.parent_id === comment_id)
            .sort((b, a) => a.last_updated.slice(0, 2) - b.last_updated.slice(0, 2));
    }

    const addComment = (comment, parent_id) => {

    }

    const rootComments = comments.filter((comments) => comments.parent_id === 0);
    return (
        <div className="comments">
            <h3 className="comments__title">Comment</h3>
            <div className="comment-form-title">Write Comment</div>
            <CommentForm submitLabel="Write" handleSubmit="Add Comment" />
            <div className="comments__container">
                {
                    rootComments.map(rootComment =>
                        <Comment key={rootComment.comment_id} comment={rootComment} replies={getReplies(rootComment.comment_id)} />
                    )
                }
            </div>
        </div>
    );
}

export default Comments;
