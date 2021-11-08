import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return(
        <nav>
            <h2>Music</h2>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library 
                <FontAwesomeIcon icon ={faMusic} />
            </button>
        </nav>
    );
}

export default Nav;