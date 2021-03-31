import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showForm }) => {
  
    return (
        <header className = 'header'> 
            <h1>{title}</h1>
            <Button text = {showForm ? 'Close' : 'Upload'} 
            color = {showForm ? 'red' : 'gold'} onClick = {onAdd}/>

        </header>
            
    )

  
}

Header.defaultProps = {

    title: 'Media Space',
}

Header.ProtoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

