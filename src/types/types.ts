export type UserInfoType = {
  image: string
  username: string
}
export type CommentPropType = {
  uuid: string
  parent_uuid?: string
  content: string
  createdAt: string
  score: number
  user: UserInfoType
  replies?: any[]
  currentUser: UserInfoType
}

export type UpvotePropType = {
  score: number
}
