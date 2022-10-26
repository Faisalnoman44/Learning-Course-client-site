import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center">
            <div>
                <h1 className="text-4xl">Oops!</h1>
                <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}