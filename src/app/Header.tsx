import Link from "next/link";

interface IHeader {
}

const Header = (props: IHeader) => {
    return (
        <header className='p-5 bg-blue-500'>
            <Link href={'/'} className='px-2 py-1 bg-white text-blue-500 rounded-lg '>Home</Link>
            <Link href={'/search'} className='px-2 py-1 bg-white text-blue-500 rounded-lg ml-5'>Search</Link>
            <Link href={'/todos'} className='px-2 py-1 bg-white text-blue-500 rounded-lg ml-5'>Todos</Link>
        </header>
    );
};

Header.defaultProps = {}

export default Header;