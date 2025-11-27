import {  useActionData, useNavigate, Link } from "react-router";

export default function ActionSubmit(){

    const actionData = useActionData();
    const navigate = useNavigate();

    if(!actionData){

        setTimeout(() => {
            navigate('/action/form');
        }, 3000);
        return(
            <>
                <h2> you have not submitted anything yet</h2>
                <Link to="/action/form">Go to form</Link>
                <h2>Redirecting you to the form page in 3 seconds...</h2>
            </>
            

        )
    }

    return(
        <>
            <h2>you have selected {actionData.num}</h2>
        </>
    )
}