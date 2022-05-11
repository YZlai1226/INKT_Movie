import EachMovie from "./EachMovie"

export default function MovieManager (props) {
    return (
    <div>
        {props.movies.map((movie) => (
            <EachMovie
              movie={movie}
              key={movie._id}
            />
          ))}
    </div>
    )
}