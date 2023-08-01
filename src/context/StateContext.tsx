import React, { useState, createContext } from "react"
import DATA from "./data.json"
export const StateContext = createContext<any>({})

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>(DATA)
  return (
    <StateContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
