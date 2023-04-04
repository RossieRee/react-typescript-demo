import { PersonProps } from "./Person.types"

export const Person = (Props: PersonProps) => {
    return <div>{Props.name.first} {Props.name.last}</div>
}