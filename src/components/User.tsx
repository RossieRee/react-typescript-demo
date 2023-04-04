import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser) //allows us to access name, email without check (type assertion)
    const handleLogin = () => {
        setUser({
            name: "David",
            email: "derosser123@gmail.com"
        })
    }
    /* const handleLogout = () => {setUser(null)} */
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}
