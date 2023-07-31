import { CommentPropType } from "../types/types"
import NewComment from "./NewComment"
import Upvote from "./Upvote"
import { useState } from "react"

export default function Comment(props: CommentPropType) {
  const [showInput, setShowInput] = useState<boolean>(false)
  const onReply = () => setShowInput(true)
  return (
    <>
      <article className="comment-card flex comment">
        <Upvote score={props.score} />
        <div className="data">
          <div className="comment-meta">
            <div className="user-info">
              <img className="user-icon" src={props.user.image} />
              <span className="user-name">{props.user.username}</span>
              {props.user.username == props.currentUser.username && (
                <span className="you-info">You</span>
              )}
              <span className="comment-time">{props.createdAt}</span>
            </div>
            <div className="actions">
              {props.user.username !== props.currentUser.username && (
                <button className="btn-reply" onClick={onReply}>
                  Reply
                </button>
              )}
              {/* {props.user.username === props.currentUser.username && (
                <>
                  <button className="btn-delete">Delete</button>
                  <button className="btn-edit">Edit</button>
                </>
              )} */}
            </div>
          </div>
          <p>{props.content}</p>
        </div>
      </article>
      {showInput && (
        <NewComment
          userInfo={props.currentUser}
          onCancel={() => setShowInput(false)}
        />
      )}
      {props.replies?.length ? (
        <div className="replies">
          <div className="line"></div>
          <div className="comments">
            {props.replies.map(reply => (
              <Comment {...reply} currentUser={props.currentUser} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
