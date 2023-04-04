import { useState } from "react"

export const LoggedIn = () => {

    //when we passed in false, TS inferred isLoggedIn as boolean! setIsLoggedIn more complex type
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
        </div>
    )
}

