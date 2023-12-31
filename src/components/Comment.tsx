import { StateContext } from "../context/StateContext"
import { CommentPropType } from "../types/types"
import { deleteComment } from "../util"
import NewComment from "./NewComment"
import Upvote from "./Upvote"
import { useState, useContext } from "react"

export default function Comment(props: CommentPropType) {
  const { comments, currentUser, setComments } = useContext(StateContext)
  const [showInput, setShowInput] = useState<boolean>(false)
  const onReply = () => setShowInput(true)
  const onDelete = () => {
    const { uuid } = props
    setComments(deleteComment(uuid, comments))
  }
  const getActions = () => {
    return (
      <>
        {props.user.username !== currentUser.username && (
          <button className="btn-reply" onClick={onReply}>
            Reply
          </button>
        )}
        {props.user.username === currentUser.username && (
          <>
            <button className="btn-delete" onClick={onDelete}>
              Delete
            </button>
            {/* <button className="btn-edit">Edit</button> */}
          </>
        )}
      </>
    )
  }
  return (
    <>
      <article className="comment-card  comment">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Upvote score={props.score} />
          <div className="actions-sm">{getActions()}</div>
        </div>
        <div className="data">
          <div className="comment-meta">
            <div className="user-info">
              <img className="user-icon" src={props.user.image} />
              <span className="user-name">{props.user.username}</span>
              {props.user.username == currentUser.username && (
                <span className="you-info">You</span>
              )}
              <span className="comment-time">{props.createdAt}</span>
            </div>
            <div className="actions-lg">{getActions()}</div>
          </div>
          <p>{props.content}</p>
        </div>
      </article>
      {showInput && (
        <NewComment target={props.uuid} callback={() => setShowInput(false)} />
      )}
      {props.replies?.length ? (
        <div className="replies">
          <div className="line"></div>
          <div className="comments">
            {props.replies.map(reply => (
              <Comment key={reply.uuid} {...reply} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
