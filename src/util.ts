import { v4 as uuid } from "uuid"
export const deleteComment = (target: string, comments: any) => {
  let result: any = []
  comments.forEach((comment: any) => {
    if (target !== comment.uuid)
      result.push(
        !comment.replies.length
          ? comment
          : {
              ...comment,
              replies: deleteComment(target, comment.replies),
            }
      )
  })
  return result
}
export const addComment = (
  target: string,
  content: string,
  currentUser: any,
  comments: any
) => {
  const newComment = {
    uuid: uuid(),
    content,
    createdAt: "Just Now",
    score: 0,
    user: currentUser,
    replies: [],
  }
  if (target == "root") return [...comments, newComment]
  return comments
}
