interface ISearchResult {
    params:{
        searchTerm:string
    }
}

type ISearchResults = {
    organic_results: [
        {
            position: number,
            title: string,
            link: string,
            thumbnail: string,
            snippet: string
        }
    ]
}

const search = async (searchTerm:string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)
    // throw new Error('something will error')
    const data:ISearchResults = await res.json()
    return data
}

const SearchResult = async ({params:{searchTerm}}: ISearchResult) => {
    const searchResult = await search(searchTerm) || []
    return (
        <>
            <p className={'text-gray-500 text-sm'}>你在搜索:{searchTerm}</p>

            <ol className={"space-y-5 p-5"}>
                {
                    searchResult.organic_results?.map((result)=>(
                        <li key={result.position} className={'list-decimal'}>
                            <p>{result.title}</p>
                            <p>{result.snippet}</p>
                        </li>
                    ))
                }
            </ol>
        </>
    );
};

SearchResult.defaultProps = {}

export default SearchResult;