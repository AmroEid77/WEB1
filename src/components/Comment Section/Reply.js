import React from 'react'
import { useFireBase } from '../../FireBase/useFireBase';
import { useState } from 'react';
const Reply = (props) => {
    const {items,updateData,addData} =useFireBase('Reply')
    const itemData=items.filter((item)=>{
        return (item.commentID===props.commentID)
    })

    const [newReply,setNewReply]=useState('')



    const handleReplyComment = (e) => {
        if (e.key === 'Enter') {
            if (newReply.trim() !== '') {
            const formattedComment = {
            name: 'Amro',
            text: newReply,
            photo:"https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
            replyId:items.length+1,
            commentID:props.commentID
            };
            setNewReply('')
            addData(e,formattedComment)
        }
        }
    };
    
      const handleReplyChange = (event) => {
        setNewReply(event.target.value);
      };
return (

    <>
    {props.replyVisibility ?
        <div className="ms-5">
            {  (
                      <div className="mt-3">
                        <textarea
                          className="form-control"
                          placeholder="Write a reply..."
                          rows={2}
                          style={{ background: '#eee', width: '100%' }}
                          value={newReply}
                          onChange={(e)=>{handleReplyChange(e)}}
                          onKeyDown={(e)=>{handleReplyComment(e)}}
                        />
                      </div>
                    )}
        {itemData.map((reply, replyIndex) => (
            <div key={replyIndex} className="card-body">
            <div className="d-flex flex-start align-items-center">
                <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg"
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
        
    :<div></div>}
    </>
  )
}

export default Reply