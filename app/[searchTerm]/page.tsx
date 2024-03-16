import getWikiResults from "@/lib/getWikiResults"
import Item from "./components/items"

type Props = {
    params:{
        searchTerm: string
    }
}
export async function generateMetadata({params: { searchTerm }}: Props){

    const wikidata: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikidata
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if(!data?.query?.pages){
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search result for ${displayTerm}`
    }
}

export default async function SearchResults({params: { searchTerm }}: Props){
    const wikidata: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikidata
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main className=" bg-slate-500 mx-auto max-w-lg py-1 min-h-screen">
        { results 
            ? Object.values(results).map(result =>
          {return <Item key={result.pageid} result={result}/>//<p>{JSON.stringify(result)}</p>
        })
        : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
    }
        </main>
    )
    return content
}







// import getWikiResults from "@/lib/getWikiResults"

// type Props = {
//     params:{
//         searchTerm: string
//     }
// }
// export async function generateMetadata({params: { searchTerm }}: Props){

//     const wikidata: Promise<SearchResult> = getWikiResults(searchTerm)
//     const data = await wikidata
//     const displayTerm = searchTerm.replaceAll('%20', ' ')

//     if(!data?.query?.pages){
//         return {
//             title: `${displayTerm} Not Found`
//         }
//     }

//     return {
//         title: displayTerm,
//         description: `Search result for ${displayTerm}`
//     }
// }

// export default async function SearchResults({params: { searchTerm }}: Props){
//     const wikidata: Promise<SearchResult> = getWikiResults(searchTerm)
//     const data = await wikidata
//     const results: Result[] | undefined = data?.query?.pages

//     const content = (
//         <main className=" bg-slate-500 mx-auto max-w-lg py-1 min-h-screen">
//         { results 
//             ? Object.values(results).map(result =>
//          {return <p>{JSON.stringify(result)}</p>
//         })
//         : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
//     }
//         </main>
//     )
//     return content
// }







// import getWikiResults from "@/lib/getWikiResults"

// type Props = {
//     params:{
//         searchTerm: string
//     }
// }

// export default async function SearchResults({params: { searchTerm }}: Props){
//     const wikidata: Promise<SearchResult> = getWikiResults(searchTerm)
//     const data = await wikidata
//     const results: Result[] | undefined = data?.query?.pages

//     const content = (
//         <main className=" bg-slate-500 mx-auto max-w-lg py-1 min-h-screen">
//         { results 
//             ? Object.values(results).map(result =>
//          {return <p>{JSON.stringify(result)}</p>
//         })
//         : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
//     }
//         </main>
//     )
//     return content
// }
