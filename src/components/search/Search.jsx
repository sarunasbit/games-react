import { useGlobalContext } from "../../context";
const Search = ()=>{
    const {query, setQuery, error} = useGlobalContext();
    return(
        
        <div className="row d-flex justify-content-center mt-5 mb-3">
            <div className="col-5">
                <form className="input-group mb-3" onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" 
                className="form-control form-control-lg" 
                placeholder="Game Search..."
                value={query}
                onChange={(e)=>setQuery(e.target.value)}/>
                {error.show && <div className="error">{error.msg}</div>}
            </form>
            </div>
        </div>
        

    );
}

export default Search