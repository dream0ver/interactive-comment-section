import { v4 as uuid } from "uuid"

const constructComment = (content: string, currentUser: any) => ({
  uuid: uuid(),
  content,
  createdAt: "Just Now",
  score: Math.floor(Math.random() * 10),
  user: currentUser,
  replies: [],
})

export const deleteComment = (target: string, comments: any) => {
  let result: any = []
  comments.forEach((comment: any) => {
    target !== comment.uuid &&
      result.push(
        comment.replies.length
          ? {
              ...comment,
              replies: deleteComment(target, comment.replies),
            }
          : comment
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
  if (!target) return [...comments, constructComment(content, currentUser)]
  let result: any = []
  comments.forEach((comment: any) => {
    target !== comment.uuid
      ? result.push(
          comment.replies.length
            ? {
                ...comment,
                replies: addComment(
                  target,
                  content,
                  currentUser,
                  comment.replies
                ),
              }
            : comment
        )
      : result.push({
          ...comment,
          replies: addComment("", content, currentUser, comment.replies),
        })
  })
  return result
}
