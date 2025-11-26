import {Link, useSearchParams} from "react-router"


function ErrorPage() {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('errMsg'));

    
    return(
        <>
            <h1>Sorry</h1>
            {searchParams.get('errMsg') && <h3>{searchParams.get('errMsg')}</h3>}
            <h2>something went wrong</h2>
            <Link to="/">Back to Home</Link>
        </>
    )
}

export default ErrorPage