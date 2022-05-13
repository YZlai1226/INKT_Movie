import AllDirectors from "../../components/directorcomps/AllDirectors";
import axios from "axios";
import { useEffect, useState } from "react";


function directors(props) {
console.log(props);
  return (
      <div className="main">
         <button onClick={() => { createDirector() }} >  <img src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png" height={25} width={25} /></button>
          <AllDirectors directors={props} deleteDirector={deleteDirector}  />
      </div>
  )
}

export async function getStaticProps() {
  try {
      const res = await axios.get("http://localhost:8000/api/admin/directors");
      return {
          props: { data: res.data },
      }
  } catch (error) {
  }
}

const deleteDirector = async (directorId) => {
  const csrf = await axios.get('http://localhost:8000/sanctum/csrf-cookie')
              console.log("DIRECTORID", directorId);
  const del = axios.delete("http://localhost:8000/api/admin/directors/" + directorId)
      .then(function (response) {
              console.log("DEL", del);
              console.log("DELETE RESPONSE", response);
      })
      .catch(error => {
              console.log(error);
      });
}

  function updateDirector() {
  axios.put(`http://localhost:8000/api/admin/directors/${id}`, {
      name: 'Tom'
  })
      .then(response => {
          console.log("UPDATE RES", response);
      })
      .catch(error => {
          console.log(error);
      });
}

  function createDirector() {
  axios.post("http://localhost:8000/api/admin/directors/", {
      name: "",
  })
      .then((response) => {
          console.log(response);
      });
}



export default directors

  

// export default function Moviedirectors() {
//     const [directors, setDirectors] = useState([]);
//     const url = 'http://localhost:8000';

//     const getStaticProps = () => {
//         axios.get(url + '/api/directors').then(result => {
//                 setDirectors(result.data);
//                 return {
//                     props: { directors: data }
//                 }
//             })
         
//     // export default function admindirector() {

//     // const deleteDirector = async (directorId) => {
//     //     console.log("+++++++++", `${url}/api/directors/${directorId}`);
//     //     const response = await fetch(`${url}/api/directors/${directorId}`, {
//     //         // const response = await fetch(url + '/api/directors/' + directorId, {
//     //         method: 'DELETE',
//     //     }).then((response) => {
//     //         console.log("respnseDATA", response.data);
//     //         if (response.status >= 400 && response.status < 600) {
//     //             throw new Error("Bad response from server");
//     //         }
//     //         return response;
//     //     })
//     //     const data = await response.json()
//     //     // console.log("DELETEDIRECTOR", data);
//     // }const deleteDirector = async (directorId) => {
//     //     console.log("+++++++++", `${url}/api/directors/${directorId}`);
//     //     // const response = await fetch(`${url}/api/directors/${directorId}`, {
//     //         const response = await fetch(url + '/api/directors/' + directorId, {
//     //         method: 'DELETE',
//     //     }).then((response) => {
//     //         console.log("respnseDATA", response.data);
//     //         if (response.status >= 400 && response.status < 600) {
//     //             throw new Error("Bad response from server");
//     //         }
//     //         return response;
//     //     })
//     //     const data = await response.json()
//     //     // console.log("DELETEDIRECTOR", data);
//     // }
