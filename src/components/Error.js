import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Error!!</h1>
            <h3>Something went wrong</h3>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default Error