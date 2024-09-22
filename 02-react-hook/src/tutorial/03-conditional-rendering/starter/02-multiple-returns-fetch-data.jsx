import { useEffect, useState } from "react"
const url = "https://api.github.com/users/QuincyLarson"
// const url = "https://dfgfdog.com" //# totally wrong url

const MultipleReturnsFetchData = () => {
  // convention to setup booleans with isSomething
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)
  //# user === null

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        const user = await resp.json()
        // console.log(user) //# object
        setUser(user)
        //# user === obj
      } catch (error) {
        //! when our url totally wrong, this component will render . Otherwise does not .
        setIsError(true)
        console.log(error)
      }
      // hide loading
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
