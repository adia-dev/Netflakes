import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}
interface Link {
    label: string,
    uri: string
}

const Browse = (props: Props) => {

    const titleLinks: Link[] = [...Array(20)]
        .map((_, i) => ({
            uri: "/browse",
            label: "Author " + (i + 1).toString(),
        }))

    return (
        <div className='w-screen h-screen text-white overflow-x-hidden overflow-y-scroll'>
            <img className='brightness-50 -z-10 w-screen h-screen object-cover fixed top-0 left-0' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
            <div className="pl-32 pt-24 z-10">
                <div className="flex items-end space-x-2 text-3xl uppercase">
                    <h2 className='font-bold'>NETFLAKES</h2>
                    <p className='font-light'>Original</p>
                </div>
                <h1 className='text-5xl font-extrabold'>Stranger Things</h1>
                <div className="flex items-center space-x-2 font-medium text-sm py-3 text-gray-200">
                    <span className='text-green-400'>95% Match</span>
                    <span className='hover:text-white transition duration-300 cursor-pointer'>2023</span>
                    <span className='hover:text-white transition duration-300 cursor-pointer'>17 Attributes</span>
                    <span className='hover:text-white transition duration-300 cursor-pointer'>11 Relations</span>
                    <span className='transition duration-300 cursor-pointer px-1 border hover:bg-white hover:text-black'>4K Ultra HD</span>
                    <span className='transition duration-300 cursor-pointer px-1 border hover:bg-white hover:text-black'>5.1</span>
                </div>
                <p className='max-w-md font-light text-white'>
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                </p>
                <div className="flex items-center text-xs text-gray-300 pt-4 max-w-md flex-wrap">
                    {
                        titleLinks.slice(0, titleLinks.length - 1).map((link) => (
                            <Link to={link.uri} className='mr-1'>
                                <span className='hover:text-white hover:underline transition duration-300 delay-200 whitespace-nowrap'>
                                    {link.label},
                                </span>
                            </Link>
                        ))
                    }
                    {
                        titleLinks.length >= 0 && (
                            <Link to={titleLinks[titleLinks.length - 1].uri}>
                                <span className='hover:text-white hover:underline transition duration-300 delay-200'>
                                    {titleLinks[titleLinks.length - 1].label}
                                </span>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="w-fit overflow-x-scroll relative -bottom-40 min-h-screen">
                <div className="h-48 w-full flex flex-col my-3">
                    <p className='font-semibold text-xl text-white px-10'>Popular on Netflakes</p>
                    <div className="w-fit overflow-x-scroll flex-1 flex items-center space-x-2 -translate-x-[220px]">
                        <div className="h-full w-[250px] border-4 border-transparent brightness-50">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        <div className="h-full w-[250px] border-4 border-white">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        {
                            [...Array(100)].map((_, i) => (
                                <div key={i} className="group h-full w-[250px] border-4 relative border-transparent brightness-90 hover:border-white cursor-pointer transition duration-300 hover:brightness-100">
                                    <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-600 text-transparent group-hover:text-white ease-out absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                                        <p className='font-semibold text-white text-2xl'>Stranger Things</p>
                                        <p className='font-light text-white text-sm'>2016</p>
                                    </div>
                                    {/* background gradient */}
                                    <div className="opacity-100 group-hover:opacity-0  absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0008] to-transparent"></div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="h-48 w-full flex flex-col my-3">
                    <p className='font-semibold text-xl text-white px-10'>Popular on Netflakes</p>
                    <div className="w-fit overflow-x-scroll flex-1 flex items-center space-x-2 -translate-x-[220px]">
                        <div className="h-full w-[250px] border-4 border-transparent brightness-50">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        <div className="h-full w-[250px] border-4 border-white">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        {
                            [...Array(100)].map((_, i) => (
                                <div key={i} className="h-full w-[250px] border-4 border-transparent brightness-90 hover:border-white cursor-pointer transition duration-300 delay-200 hover:brightness-100">
                                    <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="h-48 w-full flex flex-col my-3">
                    <p className='font-semibold text-xl text-white px-10'>Popular on Netflakes</p>
                    <div className="w-fit overflow-x-scroll flex-1 flex items-center space-x-2 -translate-x-[220px]">
                        <div className="h-full w-[250px] border-4 border-transparent brightness-50">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        <div className="h-full w-[250px] border-4 border-white">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        {
                            [...Array(100)].map((_, i) => (
                                <div key={i} className="h-full w-[250px] border-4 border-transparent brightness-90 hover:border-white cursor-pointer transition duration-300 delay-200 hover:brightness-100">
                                    <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="h-48 w-full flex flex-col my-3">
                    <p className='font-semibold text-xl text-white px-10'>Popular on Netflakes</p>
                    <div className="w-fit overflow-x-scroll flex-1 flex items-center space-x-2 -translate-x-[220px]">
                        <div className="h-full w-[250px] border-4 border-transparent brightness-50">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        <div className="h-full w-[250px] border-4 border-white">
                            <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                        </div>
                        {
                            [...Array(100)].map((_, i) => (
                                <div key={i} className="h-full w-[250px] border-4 border-transparent brightness-90 hover:border-white cursor-pointer transition duration-300 delay-200 hover:brightness-100">
                                    <img className='w-full h-full object-cover' src="https://bocir-prod-bucket.s3.amazonaws.com/radios/voltage/importrk/news/original/5bed99ffa08165.90306405.jpg" alt="" />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Browse