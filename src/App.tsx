import { useContext } from "react"
import Comment from "./components/Comment"
import NewComment from "./components/NewComment"
import { StateContext } from "./context/StateContext"

function App() {
  const { data } = useContext(StateContext)
  return (
    <section className="app-container">
      {data.comments.map((comment: any) => (
        <Comment
          key={comment.uuid}
          {...comment}
          currentUser={data.currentUser}
        />
      ))}
      <NewComment userInfo={data.currentUser} />
    </section>
  )
}

export default App
