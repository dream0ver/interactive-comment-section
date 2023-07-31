import { UpvotePropType } from "../types/types"
export default function Upvote(props: UpvotePropType) {
  return (
    <div className="upvote">
      <i className="upvote-button" />
      <span>{props.score}</span>
      <i className="downvote-button" />
    </div>
  )
}
