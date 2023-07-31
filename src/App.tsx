import { useState, useEffect } from "react"
import Comment from "./components/Comment"
import NewComment from "./components/NewComment"
import data from "./data.json"

function App() {
  const [DB, setDB] = useState<any>(data)
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
