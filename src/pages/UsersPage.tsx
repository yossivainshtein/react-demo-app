import { useEffect, useState } from "react"

  
class FlytrexUser {
    constructor(
      public id: number,
      public name: string,
    ) {}
}

interface UserProps {
    user: FlytrexUser
}
const User = ({user}: UserProps) => {
    return (
      <tr className="User">
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td><button>Remove</button></td>
      </tr>
    )
}

export const UsersPage = () => {
    const [users, setUsers] = useState([] as FlytrexUser[])
    useEffect(() => {
      // Goto to github API to simulate our users
      fetch('https://api.github.com/users').then((response) => {
        response.json().then((users) => {
          const flytrexUsers = users.map((user: any) => new FlytrexUser(user.id, user.login))
          setUsers(flytrexUsers)
        })
      })
    }, [])

    return (<div className="Users">
      <h2>Users:</h2>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>...</th>
            </tr>
        </thead>
        
        <tbody>
            { users.map((user: any) => <User user={user}/>) }
        </tbody>
      </table>
    </div>)
  }
