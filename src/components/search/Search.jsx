import { useState } from "react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
const Search = ()=>{
    const {query, setQuery, error} = useGlobalContext();
    const [searchInput, setSearchInput] = useState('')
    let navigate = useNavigate();
    const handleSubmit =(e) => {
        e.preventDefault()
        setQuery(searchInput)
        navigate('/results')
    }
    
    return(
        
        <div className="row d-flex justify-content-center mt-5 mb-3">
            <div className="col-5">
                <form className="input-group mb-3" onSubmit={handleSubmit}>
                <input type="text" 
                className="form-control form-control-lg" 
                placeholder="Game Search..."
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                />
                <button type="submit" class="btn btn-info">Search</button>
                {error.show && <div className="error">{error.msg}</div>}
            </form>
            </div>
        </div>
        

    );
}

export default Search