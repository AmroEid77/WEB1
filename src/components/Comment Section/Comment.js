import React, { useState } from 'react';

const Comment=()=> {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [repliesVisibility, setRepliesVisibility] = useState([]);
  const [likes, setLikes] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [replyIndex, setReplyIndex] = useState(null);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = (e) => {
    if (e.key === 'Enter') {
      if (newComment.trim() !== '') {
        const formattedComment = {
          name: 'Amro',
          text: newComment,
          date: new Date().toLocaleDateString(),
          replies: [],
          likes: 0,
        };
        setComments([...comments, formattedComment]);
        setRepliesVisibility([...repliesVisibility, false]);
        setLikes([...likes, false]);
        setNewComment('');
      }
    }
  };

  const handleReply = (index) => (replyText) => {
    if (replyText.trim() !== '') {
      const updatedComments = [...comments];
      updatedComments[index].replies = updatedComments[index].replies || [];
      updatedComments[index].replies.push({
        name: 'Amro',
        text: replyText,
        date: new Date().toLocaleDateString(),
      });
      setComments(updatedComments);
    }
  };

  const toggleRepliesVisibility = (index) => {
    const updatedVisibility = [...repliesVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setRepliesVisibility(updatedVisibility);
  };

  const toggleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);

    const updatedComments = [...comments];
    if (updatedLikes[index]) {
      updatedComments[index].likes += 1;
    } else {
      updatedComments[index].likes -= 1;
    }
    setComments(updatedComments);
  };

  const countLikes = (comment) => {
    return comment.likes;
  };

  const countReplies = (comment) => {
    return comment.replies ? comment.replies.length : 0;
  };

  const handleReplyInput = (index) => {
    if (replyIndex === index) {
      setReplyIndex(null);
    } else {
      setReplyIndex(index);
    }
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handlePostReply = (index) => (e) => {
    if (e.key === 'Enter' && replyText.trim() !== '') {
      handleReply(index)(replyText);
      setReplyText('');
      setReplyIndex(null);
    }
  };

  return (
    <section>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex flex-start w-100 mb-3">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                  <div className="form-outline w-100">
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      placeholder="Add a Comment"
                      onKeyDown={(e) => handlePostComment(e)}
                      rows={4}
                      style={{ background: '#eee', width: "100%" }}
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                  </div>
                </div>

                {comments.map((comment, index) => (
                  <div key={index} className="card-body mb-3" style={{ background: '#eee', borderRadius: '10px' }}>
                    <div className="d-flex flex-start align-items-center">
                      <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                        alt="avatar"
                        width={60}
                        height={60}
                      />
                      <div>
                        <h6 className="fw-bold mb-1">{comment.name}</h6>
                      </div>
                    </div>
                    <p className="mt-3 mb-4 pb-2" style={{ textAlign: "start", marginLeft: "76px" }}>{comment.text}</p>
                    <div className="small d-flex justify-content-start">
                      <a
                        href="#!"
                        className="d-flex align-items-center me-3"
                        onClick={() => toggleLike(index)}
                        style={{ color: 'black', textDecoration: 'none' }}
                      >
                        <i className="far fa-thumbs-up me-2" />
                        <p className="mb-0">Like ({countLikes(comment)})</p>
                      </a>
                      <span className="d-flex align-items-center me-3">&#8226;</span>
                      <button
                        className="btn d-flex align-items-center me-3"
                        onClick={() => handleReplyInput(index)}
                      >
                        <i className="far fa-comment-dots me-2" />
                        <p className="mb-0" style={{ color: 'black' }}>Reply</p>
                      </button>
                      <span className="d-flex align-items-center me-3">&#8226;</span>
                      <button
                        className="btn d-flex align-items-center me-3"
                        onClick={() => toggleRepliesVisibility(index)}
                      >
                        <i className="fas fa-share me-2" />
                        <p className="mb-0" style={{ color: 'black' }}>
                          View replies ({countReplies(comment)})
                        </p>
                      </button>
                    </div>
                    {replyIndex === index && (
                      <div className="mt-3">
                        <textarea
                          className="form-control"
                          placeholder="Write a reply..."
                          rows={2}
                          style={{ background: '#eee', width: '100%' }}
                          value={replyText}
                          onChange={handleReplyChange}
                          onKeyDown={handlePostReply(index)}
                        />
                      </div>
                    )}
                    {repliesVisibility[index] && comment.replies && (
                      <div className="ms-5">
                        {comment.replies.map((reply, replyIndex) => (
                          <div key={replyIndex} className="card-body">
                            <div className="d-flex flex-start align-items-center">
                              <img
                                className="rounded-circle shadow-1-strong me-3"
                                src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                                alt="avatar"
                                width={60}
                                height={60}
                              />
                              <div>
                                <h6 className="fw-bold mb-1">{reply.name}</h6>
                              </div>
                            </div>
                            <p className="mt-3 mb-4 pb-2" style={{ textAlign: "start", paddingLeft: "76px" }}>{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comment;
