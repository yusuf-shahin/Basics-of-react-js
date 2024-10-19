import { useEffect } from "react"
import { useState } from "react"

const url = "https://api.github.com/users"

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const showUsers = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        // console.log(data)
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    showUsers()
  }, [])
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FetchData
