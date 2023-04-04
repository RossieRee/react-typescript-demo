type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

//generic type = parameterised types [T] include multiple types to be handled, whilst staying strict!
// T extends { id: number } (require id) or T extends string | number
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                )
            })}
        </div>
    )
}