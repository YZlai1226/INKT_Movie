import AllDirectors from "../../components/directorcomps/AllDirectors";

const url = 'http://localhost:8000';

export const getStaticProps = async () => {

    const response =
        await fetch(url + '/api/directors')
    const data = await response.json()
    return {
        props: { directors: data }
    }
}


export default function admindirector({ directors }, props) {
    
    const deleteDirector = async (directorId) => {
        console.log("+++++++++", `${url}/api/directors/${directorId}`);
        const response = await fetch(`${url}/api/directors/${directorId}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error("Bad response from server");
            }
            return response;
        })
        const data = await response.json()
        // console.log("DELETEDIRECTOR", data);
    }



    const addDirector = async () => {
        // console.log("++++++++++");
        const response = await fetch(url + "/api/directors", {
            method: "POST",
            body: {
                "name": "bob"
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error("Bad response from server");
            }
            return response;
        })
        const data = await response.json()
        // console.log("ADDRECTOR", data);
    }

    // console.log(directors)
    if (directors === undefined) {
        return (<p>Loading ...</p>)
    } else {
        return (
            <div className="main">
                <button onClick={() => { addDirector() }} >  <img src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png" height={25} width={25} /></button>
                <AllDirectors directors={directors} deleteDirector={deleteDirector} key={directors.id} ></AllDirectors>
            </div>
        )
    }
}