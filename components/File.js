import { FaTimes } from 'react-icons/fa'

const File = ({ file, onDelete, onToggle}) => {
    return (
        <div 
            className = {`file ${file.assignment ? 'submit' : '' }`}
            onDoubleClick = {() => onToggle(file.fiNum)}
            >
            <h3>
                {file.fiName} {' '}
            
                <FaTimes
                    style = {{color: 'red'}}
                    onClick= {() => onDelete(file.fiNum)}
                /> 
                
            
            </h3>
            <p>{file.fiDesc}</p>

        </div>
    )
}

export default File
