import { useState, useContext } from "react"
import { StateContext } from "../context/StateContext"

export default function NewComment(props: any) {
  const { currentUser } = useContext(StateContext)
  const [text, setText] = useState<string>("")
  return (
    <article
      className="comment-card flex"
      style={{ gap: "1rem", alignItems: "flex-start" }}
    >
      <img className="user-icon" src={currentUser.image} />
      <textarea
        placeholder="Add a comment..."
        className="comment-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
      ></textarea>
      <div className="new-comment-btn-group">
        <button className="btn-primary">Send</button>
        {typeof props.onCancel == "function" && (
          <button className="btn-primary btn-cancel" onClick={props.onCancel}>
            Cancel
          </button>
        )}
      </div>
    </article>
  )
}
