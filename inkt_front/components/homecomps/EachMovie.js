import Image from "next/image"

export default function EachMovie (props) {
    const image = "https://image.tmdb.org/t/p/original" + props.movie.poster_path
    return (
    <div>
          <Image src={image} alt="movie poster" width={170} height={210} layout="fixed" />
          <p>Name: {props.movie.title}</p>
          <p>Released_date: {props.movie.release_date}</p>
          <p>Rating: {props.movie.vote_average}</p>
    </div>
    )
}
