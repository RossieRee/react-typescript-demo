//type keyword for organisation - reduces human error
//prevents other datatypes being inputted in function/component
//use types when building apps, interfaces when building libraries
type GreetProps = {
    name: string,
    messageCount?: number, //doesnt have to be passed in
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props //default value if none is passed in
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? 
                    `Welcome ${props.name}! You have ${props.messageCount} unread messages`
                    :
                    `Welcome Guest!`
                }
            </h2>            
        </div>
    )
}