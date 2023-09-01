const Search = () => {
    return ( 
        <div className="hidden md:w-full md:max-w-lg md:flex items-center bg-gray-200 max-w-3xl rounded-lg h-10 pl-6">
            <input type="search" className="h-full w-full bg-transparent placeholder:text-slate-700 text-sm" placeholder="O Que Você Busca?"/>
            <button type="button" className="h-full rounded-lg bg-primary text-white text-sm px-8">Buscar</button>
        </div>
     );
}
 
export default Search;