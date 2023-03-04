import React from 'react'
import { BsCaretDownFill, BsLink } from 'react-icons/bs'
import tables from '../data/tables.json'
type Props = {}
import { Table } from '../types/table'

const Tables = (props: Props) => {



    const Table = ({ table }: { table: Table }) => {
        return (
            <div key={table.name} className='group flex flex-col bg-[#3e3d3d] border border-gray-500 h-full text-black m-3 w-fit rounded-md p-[2px] transition-all duration-200 hover:shadow-lg cursor-help brightness-75 hover:brightness-100'>
                <div className='font-semibold h-10 grid items-center text-left px-2 text-white rounded-t-md relative'
                    style={{
                        backgroundColor: table.isRelationTable ? '#ddcd3d' : '#AA0e00',
                    }}
                >
                    {/* tooltip on top when group-hovered */}
                    <div className='absolute bottom-full mb-3 group-hover:block z-[20] opacity-0 transition-all duration-200 scale-75 group-hover:scale-100 group-hover:opacity-100 bg-gray-100 text-black text-xs rounded-md p-2'>
                        {/* BsCaretDownFill */}
                        <BsCaretDownFill className='absolute top-full -my-1 text-gray-100 left-1/4 transform -translate-x-1/2' />
                        {table.comment}
                    </div>
                    <span>
                        {table.name}
                    </span>
                </div>
                <div className='flex flex-col'>
                    {table.fields.map((field) => (
                        <div key={`table-${table.name}-${field.name}`} className='text-gray-100 flex flex-row justify-between min-w-[200px] space-x-3 items-center h-10 px-2'>
                            <p className='whitespace-normal flex-1 font-medium'
                                style={{
                                    color: field.key ? '#ccc' : 'white',
                                    textDecoration: field.key ? 'underline' : 'none',
                                }}
                            >{field.name}</p>
                            <p className='text-gray-400 text-xs'>{field.type}</p>
                        </div>
                    ))}
                    {
                        table.relations?.map((relation) => (
                            <div key={`table-${table.name}-${relation.name}`} className='flex flex-row justify-between min-w-[200px] space-x-3 items-center h-10 px-2'>
                                <p className='whitespace-normal flex-1 font-medium text-gray-300'>{relation.source}</p>
                                <div className="flex items-center space-x-2 pl-10">
                                    <p className='text-gray-400 text-xs'>{relation.type}</p>
                                    <BsLink className='text-gray-400' />
                                    <p className='text-gray-400 text-xs'>{relation.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }


    return (
        <div className='w-full h-full p-24'>
            <h1 className='text-3xl font-extrabold uppercase underline'>Tables:</h1>
            <div className='flex flex-wrap h-full'>
                {tables
                    .sort((a, b) => a.isRelationTable ? 1 : -1)
                    .map((table, index) => (
                        <Table table={table} key={index} />
                    ))}
            </div>
        </div>
    )
}

export default Tables