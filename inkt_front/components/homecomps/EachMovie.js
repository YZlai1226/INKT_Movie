export default function EachMovie (props, image) {
    return (
    <div>
          <p>Name: {props.movie.title}</p>
          <p>Released_date: {props.movie.release_date}</p>
          <p>Rating: {props.movie.vote_average}</p>
    </div>
    )
}
