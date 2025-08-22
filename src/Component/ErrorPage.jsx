import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return(
        <>
            <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p>Error Status: {error?.status}</p>
                <p>{error?.statusText}</p>
                <p>Error message: {error?.error?.message}</p>
            </div>
        </>
    )
}

export default ErrorPage;