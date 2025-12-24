import React, { useEffect, useState } from 'react'

function PublicApi() {
    const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    
  useEffect(()=>{
    const fetchUsers = async()=>{
        try{
            const url = "https://dummyjson.com/users";
            const data = await fetch (url);
            const resp = await data.json()
            console.log(resp)
            setUsers(resp.users)
            setError(null)
        }
        catch (error){
            console.log(error)
            setError(error.message);
        }
        finally{
            setLoading(false)
        }
    }

  
        fetchUsers();
    }, [])

    if(loading){
        return <p>Loading users...</p>
    }
    
  if(error){
    return <p style={{color : "red"}}>Error: {error}</p>
  }

  return (
    <div>

        <h1>User List</h1>
        <ul>
            {users.map(user=>(
                <li>
                    <strong>{user.firstName}</strong>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default PublicApi