import { useGlobalContext } from "../../context"
const Results =()=>{
    const{games, isLoading} = useGlobalContext();
    if (isLoading){
        return <h1>Loading...</h1>
    }
    if(games.length < 0) {
        return <h1>No games found</h1>
    }

    return(
        <div className="row d-flex">
            {games.map((game)=>{
                const{id, description, name, platforms, genres, background_image: image} = game;
                return (
                    <div className="col-sm-6 col-md-4 col-lg-4 mt-1" key={id}>
                        <div className="card">
                            <img src={image} className="card-img-top" alt={name} />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">
                                    <strong>Platforms:</strong>{" "}
                                    {platforms
                                        ? platforms.map((p) => p.platform.name).join(", ")
                                        : "Unknown"}
                                </p>
                                <p className="card-text">
                                    <strong>Genres:</strong>{" "}
                                    {genres ? genres.map((g) => g.name).join(", ") : "Unknown"}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
    
}

export default Results