type StatusProps = {
    status: "loading" | "error" | "success"
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === "loading") {
        message = "Loading..."
    } else if (props.status ==="success") {
        message = "Data fetched successfully"
    } else if (props.status ==="error") {
        message = "Error fetching Data"
    }
    return (
        <div>
            <h2>status - {message}</h2>
        </div>
    )
}