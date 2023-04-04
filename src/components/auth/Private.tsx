import React from "react"
import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps> //component as a data type
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name="Vishwas" />
    } else {
        return <Login />
    }
}