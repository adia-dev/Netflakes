import profiles from '../data/profiles.json'
import { BsPencilFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'
import { Link } from 'react-router-dom'
type Props = {}

interface Profile {
    id: number,
    name: string,
    locked: boolean,
    pfp_uri: string
}

const SelectProfile = (props: Props) => {


    const Profile = (profile: Profile) => (
        <div key={profile.id} className="group flex flex-col items-center">
            <div className="w-52 h-52 border-4 border-transparent group-hover:border-white transition-all duration-300 delay-200 ease-in-out cursor-pointer">
                <img className='w-full h-full object-cover brightness-75 group-hover:brightness-100 transition duration-300 delay-200' src={profile.pfp_uri} alt={profile.name} />
            </div>
            <div className="flex items-center justify-center space-x-2">
                <p className='text-lg text-gray-500 group-hover:text-white transition duration-300 delay-200 text-center py-5 whitespace-nowrap'>{profile.name}</p>
                {profile.locked && <HiLockClosed />}
            </div>
            <div className="w-12 h-12 cursor-pointer text-xl opacity-0 group-hover:opacity-100 flex text-gray-500 hover:text-white border-gray-500 hover:border-white transition duration-300 rounded-full border-2 items-center justify-center">
                <BsPencilFill />
            </div>
        </div>
    )

    return (
        <div className='w-screen h-screen bg-black text-white'>
            <h1 className="text-5xl font-light w-full text-center py-32">Who's watching Netflakes ?</h1>
            <div className="flex mx-auto items-center w-4/5 justify-around">
                {
                    profiles.map((profile) => profile.locked ? Profile(profile) : <Link to="/browse">{Profile(profile)}</Link>)
                }
            </div>
        </div>
    )
}

export default SelectProfile