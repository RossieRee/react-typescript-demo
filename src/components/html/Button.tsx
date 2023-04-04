//LEARN OMIT

import React from "react"

type ButtonProps = {
    variant: "primary" | "secondary"
    children: string 
} 

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest} onClick={() => console.log("Clicked")}>
            {children}
        </button>
    )
}