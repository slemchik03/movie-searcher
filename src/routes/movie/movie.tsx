import { useParams } from "react-router-dom";

const Movie= () => {
    const {id} = useParams();
    return (
        <div>
            My id is = {id}
        </div>
    );
}

export default Movie;