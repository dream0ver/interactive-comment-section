import Comment from "./components/Comment"
import NewComment from "./components/NewComment"
import DB from "./data.json"

function App() {
  return (
    <section className="app-container">
      {DB.comments.map((comment: any) => (
        <Comment {...comment} currentUser={DB.currentUser} />
      ))}
      <NewComment userInfo={DB.currentUser} />
    </section>
  )
}

export default App
