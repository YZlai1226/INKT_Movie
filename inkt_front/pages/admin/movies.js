import AllMovies from "../../components/moviescomps/AllMovies";

const url = 'http://localhost:8000';

export const getStaticProps = async () => {

    const response =
        await fetch(url + '/api/movies')
    const data = await response.json()
    return {
        props: { movies: data }
    }
}


export default function adminmovie({ movies }, props) {
    const deleteMovie = async (movieId) => {
        const response = await fetch(`${url}/api/movies/${movieId}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                // response.text().then((res) => console.log(res))
                throw new Error("Bad response from server");
            }
            return response;
        })
        const data = await response.json()
        console.log("DELETEmovie", data);
    }

    const addMovie = async () => {
        console.log("++++++++++");
        const response = await fetch(url + "/api/movies", {
            method: "POST",
            // body: JSON.stringify({movies}),
            body: {name:""},
            headers: {
                'Content-Type' : 'application/json',
            },
        }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                // response.text().then((res) => console.log(res))
                throw new Error("Bad response from server");
            }
            return response;
        })
        const data = await response.json()
        console.log("ADDRECTOR", data);
    }

    console.log(movies)
    if (movies === undefined) {
        return (<p>Loading ...</p>)
    } else {
        return (
            <div className="main">
                <button onClick={() => { addMovie() }} >  <img src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png" height={25} width={25} /></button>
                <AllMovies movies={movies} deleteMovie={deleteMovie} key={movies.id} ></AllMovies>
                {/* <div className="main-header">I am in admin movie CRUD page!!</div> */}
            </div>
        )
    }
}