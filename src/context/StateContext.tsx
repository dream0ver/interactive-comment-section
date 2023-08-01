import React, { useState, createContext } from "react"
import COMMENTS from "./comments.json"
export const StateContext = createContext<any>({})

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [comments, setComments] = useState<any>(COMMENTS)
  const currentUser = {
    image: "./images/avatars/image-juliusomo.png",
    username: "juliusomo",
  }
  return (
    <StateContext.Provider
      value={{
        comments,
        setComments,
        currentUser,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
