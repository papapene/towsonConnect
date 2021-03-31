import File from './File'

const Files = ({ files, onDelete, onToggle }) => {
 

    return (
        <>
            {files.map((file) => (
                <File 
                key = {file.fiNum} 
                file ={file} 
                onDelete = {onDelete}
                onToggle = {onToggle}
                />

            ))}
        </>
    )
}

export default Files
