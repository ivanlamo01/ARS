export async function fetchUsers(){
    const res = await fetch ("localhost:4000/users")
    const user = await res.json()
    return user.data
}

