import React from 'react';
import './comment.css';

export default function Comment({ comment, replies }) {

    return (
        <div className="comment">
            <div className="comment__image--container">
                <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">
                        {comment.user_name}
                    </div>
                    <div>{comment.last_updated}</div>
                </div>
                <div className="comment-content">
                    {comment.content}
                </div>
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Comment comment={reply} key={reply.comment_id} replies={[]} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
