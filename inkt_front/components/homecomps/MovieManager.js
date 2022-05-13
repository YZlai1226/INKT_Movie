import EachMovie from "./EachMovie"
import Grid from "@mui/material/Grid";


// function handleChange() {
//   console.log("INSIDE handleChange()");
// }




export default function MovieManager(props) {

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.movies.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={movie}>
            <EachMovie
              movie={movie}
              key={movie.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
