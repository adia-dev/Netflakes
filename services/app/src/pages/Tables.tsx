import React from 'react'
import { BsCaretDownFill, BsLink } from 'react-icons/bs'

type Props = {}

interface DatabaseRelation {
    name: string,
    type: string,
    source: string,
    target: string,
    comment: string,
}

interface DatabaseField {
    name: string,
    primary?: boolean,
    type: string,
    comment: string,
}

interface DatabaseTable {
    name: string,
    color: string,
    fields: DatabaseField[],
    comment: string,
    relations?: DatabaseRelation[],
}

const Tables = (props: Props) => {

    // simple database tables, no more that 3 fields
    const tables: DatabaseTable[] = [
        {
            name: 'users',
            color: '#fca5a5',
            fields: [
                {
                    name: 'id',
                    type: 'uuid',
                    comment: '',
                    primary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    comment: '',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    comment: '',
                },
                {
                    name: 'password',
                    type: 'varchar',
                    comment: '',
                },
            ],
            comment: 'This is the users table, it contains all the users in the database, and their information',
        },
        {
            name: 'posts',
            color: '#f72c66',
            fields: [
                {
                    name: 'id',
                    type: 'uuid',
                    comment: '',
                    primary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    comment: '',
                },
                {
                    name: 'body',
                    type: 'varchar',
                    comment: '',
                },
            ],
            comment: 'Posts',
            relations: [
                {
                    name: 'author',
                    type: 'one-to-one',
                    source: 'author_id',
                    target: 'id',
                    comment: 'The author of the post',
                },
            ],
        },
        {
            name: 'comments',
            color: '#fcd2a5',
            fields: [
                {
                    name: 'id',
                    type: 'uuid',
                    comment: '',
                    primary: true,
                },
                {
                    name: 'body',
                    type: 'varchar',
                    comment: '',
                },
            ],
            comment: 'Comments',
            relations: [
                {
                    name: 'author',
                    type: 'one-to-one',
                    source: 'author_id',
                    target: 'id',
                    comment: 'The author of the comment',
                },
                {
                    name: 'post',
                    type: 'one-to-one',
                    source: 'post_id',
                    target: 'id',
                    comment: 'The post that the comment is on',
                },
            ],
        },
    ]



    const Table = ({ table }: { table: DatabaseTable }) => {
        return (
            <div key={table.name} className='group flex flex-col bg-[#3e3d3d] border border-gray-500 h-fit text-black m-3 w-fit rounded-md p-[2px] transition-all duration-200 hover:shadow-lg cursor-help brightness-75 hover:brightness-100'>
                <div className='font-semibold h-10 grid items-center text-left px-2 text-white rounded-t-md relative'
                    style={{
                        backgroundColor: table.color
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
                                    color: field.primary ? table.color : 'inherit',
                                    textDecoration: field.primary ? 'underline' : 'none',
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
            <div className='flex flex-wrap'>
                {tables.map((table, index) => (
                    <Table table={table} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Tables