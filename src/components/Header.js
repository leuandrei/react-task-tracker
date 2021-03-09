import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';


const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' &&
            (showAddTask ? <Button color='red' text='Cancel' onClick={onAdd}/> :
            <Button color='green' text='Add Task' onClick={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//css in js
// const headerSyle={
//     color:'red',
//     backgroundColor:'black',
// }

export default Header
