export type UserInfoType = {
  image: string
  username: string
}
export type CommentPropType = {
  uuid: string
  content: string
  createdAt: string
  score: number
  user: UserInfoType
  replies: CommentPropType[]
}

export type UpvotePropType = {
  score: number
}
