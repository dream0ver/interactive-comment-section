export const deleteNestedComment = (target: string, comments: any) => {
  let result: any = []
  comments.forEach((comment: any) => {
    if (target !== comment.uuid) {
      result.push(
        comment.replies.length
          ? {
              ...comment,
              replies: deleteNestedComment(target, comment.replies),
            }
          : comment
      )
    }
  })
  return result
}
