
export const MovieList = (props) => {
    const test = <li>teste</li>;

    if (props) {
        console.log(props);
        console.log(typeof props);
        
        if (props.movies.search) {
            props.movies.search.map((item) => {
                console.log(item);
            });
        }
    } else {
        test = <li>teste</li>
    }


    return (
        <ul>
            {test}
        </ul>
    );
} ;

