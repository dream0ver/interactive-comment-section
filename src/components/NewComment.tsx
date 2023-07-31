import { UserInfoType } from "../types/types"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

type Props = {
  userInfo: UserInfoType
  setDB: any
}

export default function NewComment(props: Props) {
  const [text, setText] = useState<string>("")
  const onSend = () => {
    const newComment = {
      uuid: uuidv4(),
      content: text,
      createdAt: "Just now",
      score: 0,
      user: props.userInfo,
      replies: [],
    }
    props.setDB((prev: any) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }))
    setText("")
  }
  return (
    <article
      className="comment-card flex"
      style={{ gap: "1rem", alignItems: "flex-start" }}
    >
      <img className="user-icon" src={props.userInfo.image} />
      <textarea
        placeholder="Add a comment..."
        className="comment-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
      ></textarea>
      <button className="btn-primary" onClick={onSend}>
        Send
      </button>
    </article>
  )
}
