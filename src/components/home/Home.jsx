import Search from "../search/Search";
import Nav from "../nav/Nav";
import Results from "../results/Results";
const Home =()=>{
    return(
        <div className="container">
            <Nav/>
            <main>
                <Search/>
                {/* <Results/> */}
            </main>
        </div>
    )
}

export default Home