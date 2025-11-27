import { Form } from "react-router";

export default function ActionForm(){

    return(
        <Form method="post" action="/action/submit" className="flex flex-row mt-10 gap-4 items-center justify-center">
            <input type="number" name="num" className="w-90 border " />
            <button type="submit">Submit</button>
        </Form>
    )
}