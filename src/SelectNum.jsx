import { Outlet, NavLink } from "react-router"

export default function SelectNum(){
    return(
        <>
            <h2>Click the links below to learn something new</h2>
            <div className="flex flex-row gap-4">
                <NavLink to='./num/123' className={({isActive, isPending}) => `${isActive ? 'text-gray-500' : 
                    'text-blue-600'} ${isPending ? 'text-yellow-500' : ''}` }>123</NavLink>
                <NavLink to='./num/456' className={({isActive, isPending}) => `${isActive ? 'text-gray-500' : 
                    'text-blue-600'} ${isPending ? 'text-yellow-500' : ''}` }>456</NavLink>
                <NavLink to='./num/789' className={({isActive, isPending}) => `${isActive ? 'text-gray-500' : 
                    'text-blue-600'} ${isPending ? 'text-yellow-500' : ''}` }>789</NavLink>
            </div>
            <hr className="pb-2"/>
            <hr />
            <Outlet />
        
        </>
    )
}

