import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

//We get the Header props and pass it in the Deconnexion Button
const Deconnexion = ( {isLogged, isDisconnected} ) => {

    return (
        <Link to ='/'>
        {isLogged && <button onClick={isDisconnected}> Deconnexion </button> /* if user connected, the button appears  */}
        </Link>
    )
}

Deconnexion.propTypes = {
    isLogged: PropTypes.bool, 
    isDisConnected: PropTypes.func,
   };

export default Deconnexion;