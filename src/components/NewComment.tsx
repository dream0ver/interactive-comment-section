import { useState, useContext } from "react"
import { StateContext } from "../context/StateContext"
import { addComment } from "../util"

export default function NewComment(props: any) {
  const { currentUser, comments, setComments } = useContext(StateContext)
  const [text, setText] = useState<string>("")
  const onSend = () => {
    setComments(addComment(props?.target, text, currentUser, comments))
    typeof props.callback == "function" && props.callback()
    setText("")
  }
  return (
    <article
      className="comment-card new-comment-card"
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
        <button className="btn-primary" onClick={onSend}>
          Send
        </button>
        {typeof props.callback == "function" && (
          <button className="btn-primary btn-cancel" onClick={props.callback}>
            Cancel
          </button>
        )}
      </div>
    </article>
  )
}
