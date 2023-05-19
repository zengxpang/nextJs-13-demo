'use client'

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

interface ISearch {}

const Search = (props: ISearch) => {
    const [search,setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault() // 阻止提交表单的默认事件
        setSearch('')
        router.push(`/search/${search}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={search}
                placeholder={'请输入'}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button
                type={'submit'}
                className={"bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"}
            >
                Search
            </button>
        </form>
    );
};

Search.defaultProps = {}

export default Search;