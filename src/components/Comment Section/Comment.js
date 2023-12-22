import React, { useState } from 'react';
import { useFireBase } from '../../FireBase/useFireBase';
import Reply from './Reply';

const Comment=(props)=> {

  const {items,updateData,addData} =useFireBase('Comment')
  

  const itemData=items.filter((item)=>{
    return (item.videoID===props.videoID)
  })
  
  
  const [newComment, setNewComment] = useState('');
  const [repliesVisibility, setRepliesVisibility] = useState([]);
  const [replyIndex, setReplyIndex] = useState(null);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  
  const handlePostComment = (e,id) => {
    if (e.key === 'Enter') {
      if (newComment.trim() !== '') {
        const formattedComment = {
          name: 'Amro',
          text: newComment,
          date: new Date().toLocaleDateString(),
          like: 0,
          photo:"https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
          commentID:itemData.length+1,
          videoID:props.videoID
        };
        setNewComment('')
        addData(e,formattedComment)
      }
    }
  };



  const toggleRepliesVisibility = (index) => {
    const updatedVisibility = [...repliesVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setRepliesVisibility(updatedVisibility);
  };

  const toggleLike = (index,numberLike) => {
    updateData(index,"like",numberLike+1)
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



  

  return (
    <section>
      <div className="container my-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex flex-start w-100 mb-3">
                  <img
                    className="rounded-circle shadow-1-strong me-3" style={{objectFit:"cover"}}
                    src="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg"
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

                {itemData.map((comment, index) => (
                  <div key={index} className="card-body mb-3" style={{ background: '#eee', borderRadius: '10px' }}>
                    <div className="d-flex flex-start align-items-center">
                      <img
                        className="rounded-circle shadow-1-strong me-3 " style={{objectFit:"cover"}}
                        src={comment.photo}
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
                        onClick={() => toggleLike(comment.id,comment.like)}
                        style={{ color: 'black', textDecoration: 'none' }}
                      >
                        <i className="far fa-thumbs-up me-2" />
                        <p className="mb-0">Like ({comment.like})</p>
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
                  
                    <Reply commentID={comment.commentID} replyVisibility={repliesVisibility} />
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
