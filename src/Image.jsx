import { useParams, useSearchParams } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Image(){

    const params = useParams();
    const [SearchParams] = useSearchParams();
    

    if(isNaN(params.id)){
        return(<h1 className='text-red-500'>The id "{params.id}" is not a number</h1>)
    }

    const chosenImage= params.id %2 ? reactLogo : viteLogo;


    return(<div div className="flex flex-row">
        <h1>Id: {params.id}</h1>
        {SearchParams.get('msg') && <h2>msg: {SearchParams.get('msg')}</h2>}
        <img src={chosenImage} alt="Chosen Logo" />
        
    </div>)
}

export default Image;