const SearchNewsletter = () => {
    return (
        <div className="flex gap-4 md:gap-0">
            <div className="md:w-full md:min-w-[500px] flex items-center bg-gray-200 max-w-3xl rounded-lg h-10 pl-6 border-[1px] border-slate-700">
                <input type="search" className="h-full bg-transparent placeholder:text-slate-700 text-sm " placeholder="Digite seu e-mail" />
            </div>
            <div>
                <button type="button" className="h-full rounded-md bg-primary text-white text-sm px-8 md:px-10">Enviar</button>
            </div>
        </div>
    );
}

export default SearchNewsletter;