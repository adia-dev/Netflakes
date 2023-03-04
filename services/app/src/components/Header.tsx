import { BsBell, BsCaretDownFill, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type Props = {
    scrollY?: number
}

const Header = (props: Props) => {
    return (
        <div
            className="h-16 fixed w-screen top-0 left-0 z-50 transition-all duration-500 delay-150"
            style={{
                backgroundColor: props.scrollY ? 'rgba(0, 0, 0)' : 'transparent',
            }}
        >
            <div className="w-11/12 h-full mx-auto flex items-center">
                {/* Netflix type of header */}
                <div className="flex items-center">
                    <div className="ml-2 uppercase text-red-600 font-bold text-2xl">NETFLAKES</div>
                </div>
                <div className="flex text-xs text-gray-300 items-center mx-10">
                    <Link to="/browse" className="hover:text-white cursor-pointer transition duration-300 delay-200">Home</Link>
                    <Link to="/tables" className="hover:text-white cursor-pointer transition duration-300 delay-200 ml-4">Tables</Link>
                    <Link to="/tables" className="hover:text-white cursor-pointer transition duration-300 delay-200 ml-4">Credits</Link>
                </div>

                {/* Search bar */}
                <div className="flex items-center ml-auto">
                    <BsSearch className="text-gray-500 hover:text-white transition-all hover:scale-105" />
                    <BsBell className="text-gray-500 hover:text-white transition-all hover:scale-105 ml-4" />
                    {/* profile square with this image: https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png and a chevron down */}
                    <div className="flex items-center ml-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt="profile"
                            className="w-8 h-8 border border-transparent hover:border-white" />
                        <BsCaretDownFill className="text-xs text-gray-500 hover:text-white transition-all hover:scale-105 ml-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header