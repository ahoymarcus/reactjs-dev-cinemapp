
export const MovieList = (props) => {

    const handleClick = (e) => {
        console.log(props);
    }

    return (
        <ul>
            <li onClick={handleClick} >teste lista</li>
        </ul>
    );
} ;

