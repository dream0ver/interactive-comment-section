import { useContext } from "react"
import Comment from "./components/Comment"
import NewComment from "./components/NewComment"
import { StateContext } from "./context/StateContext"
import { CommentPropType } from "./types/types"

function App() {
  const { comments } = useContext(StateContext)
  return (
    <section className="app-container">
      {comments.map((comment: CommentPropType) => (
        <Comment key={comment.uuid} {...comment} />
      ))}
      <NewComment />
    </section>
  )
}

export default App
