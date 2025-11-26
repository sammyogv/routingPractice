import { Link, Outlet, NavLink } from "react-router"

function Gallery() {
  return (
    <div className="w-[400px] text-center items-center justify-center border m-10 p-3">
      <h2 className="flex flex-col text-green-400 font-bold">Welcome to my gallery</h2>
      <hr className="pb-2" />
      <Outlet />
      <hr />
      <Link to="/" className="mr-4 text-gray-600 hover:text-green-500">Home</Link>
      <NavLink
        to="/gallery/image/id/1"
        className={({ isActive }) =>
          `mr-4 ${isActive ? 'text-green-500 font-semibold' : 'text-gray-600'}`
        }
      >
        React
      </NavLink>
      <NavLink
        to="/gallery/image/id/2"
        className={({isActive})=> `mr-4 ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
      >
        Vite
      </NavLink>
    </div>
  )
}

export default Gallery


