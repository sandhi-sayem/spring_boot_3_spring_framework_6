import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

function WelcomeComponent() {
    const { username } = useParams();

    const [message, setMessage] = useState(null);

    const callHelloWorldRestApi = () => {


        // axios.get("http://localhost:8080/hello-world")
        //     .then(response => succesfulResponse(response))
        //     .catch(error => errorResponse(error))
        //     .finally(() => console.log('cleanup'))

        // retrieveHelloWorldBean()
        //     .then(response => succesfulResponse(response))
        //     .catch(error => errorResponse(error))
        //     .finally(() => console.log('cleanup'))

        retrieveHelloWorldPathVariable('Sayem')
            .then(response => succesfulResponse(response))
            .catch(error => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    const succesfulResponse = response => {
        console.log(response);
        setMessage(response.data.message);
    }

    const errorResponse = error => {
        console.log(error);
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}!</h1>
            <div>Manage your todos - <Link to="/todos">Go here</Link></div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    );
}

export default WelcomeComponent;