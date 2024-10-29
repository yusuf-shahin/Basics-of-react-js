import React, { useEffect, useState } from "react"

const api = "https://reqres.in/api/users"

const FetchDataAPI = () => {
  const [showData, setShowData] = useState([])

  const fetchDataFunc = async () => {
    try {
      const resp = await fetch(api)
      const data = await resp.json()
      //* first approach
      // return data

      //! second approach
      setShowData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //* first approach
    // fetchDataFunc().then((element) => setShowData(element.data))

    //! second approach
    fetchDataFunc()
  }, [])

  return (
    <div>
      {showData.map((data) => {
        const { email, first_name, last_name, id } = data
        return (
          <div key={id}>
            <h3>
              hey my name is , {first_name} {last_name}
            </h3>
            <h5>gmail : {email}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default FetchDataAPI
