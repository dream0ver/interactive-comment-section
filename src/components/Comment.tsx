import { CommentPropType } from "../types/types"
import Upvote from "./Upvote"

export default function Comment(props: CommentPropType) {
  return (
    <>
      <article className="comment-card flex comment">
        <Upvote score={props.score} />
        <div className="data">
          <div className="comment-meta">
            <div className="user-info">
              <img className="user-icon" src={props.user.image} />
              <span className="user-name">{props.user.username}</span>
              <span className="comment-time">{props.createdAt}</span>
            </div>
            <div className="actions">
              {props.user.username !== props.currentUser.username && (
                <button className="btn-reply">Reply</button>
              )}
              {props.user.username === props.currentUser.username && (
                <>
                  <button className="btn-delete">Delete</button>
                  <button className="btn-edit">Edit</button>
                </>
              )}
            </div>
          </div>
          <p>{props.content}</p>
        </div>
      </article>
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
