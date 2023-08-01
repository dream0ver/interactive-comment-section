export const deleteNestedComment = (
  target: string,
  parents: any,
  comments: any
) => {
  if (!parents) return comments.filter((comment: any) => comment.uuid != target)
}
