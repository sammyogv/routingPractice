import { useParams, Link, useLoaderData, useNavigation } from "react-router";


export default function NumberDetails(){

    const params = useParams();
    const loaderData= useLoaderData();
    const navigation = useNavigation();
    console.log(navigation);
    

    if(isNaN(params.num)){
        return(
            <>
                <h2 className="text-red-600">sorry {params.num} is not a number</h2>
                <Link to="/story">Back to story selection</Link>
            </>
        )
    }

    if(navigation.state === 'loading'){
        return(
            <h2>Loading please wait</h2>
        )
    }

    

    return(
        <>
           <div className="text-left">
                <h2>This is the story of {params.num} </h2>
                <h3>{loaderData.detail}</h3>
                <Link to="/story">Back to story selection</Link>
            </div> 
        </>
    )
}

