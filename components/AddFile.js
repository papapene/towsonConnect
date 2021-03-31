import { useState } from 'react'

const AddFile = ({onAdd}) => {
    const [fiName, setFiName] = useState ('')
    const [fiDesc, setFiDesc] = useState ('')
    const [assignment, setAssignment] = useState (false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(!fiName){
            alert('Please Enter file name!')
            return
        }

        onAdd({ fiName, fiDesc, assignment })
        setFiName('')
        setFiDesc('')
        setAssignment(false)
    }
    

    return (
        <form className = 'add-form' 
              onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>File Name</label>
                <input type = 'text' placeholder = 'Enter_file_name'
                value ={fiName} onChange = {(e) => setFiName(e.target.value)}/>
            </div>

            <div className = 'form-control'>
                <label>File Description</label>
                <input type = 'text' placeholder = 'Add a description'
                value ={fiDesc} onChange = {(e) => setFiDesc(e.target.value)}/>
            </div>

            <div className = 'form-control form-control-check'>
                <label>Assignment</label>
                <input type = 'checkbox'
                       checked = {assignment}
                       value ={assignment} 
                       onChange = {(e) => setAssignment(e.currentTarget.checked)}/>
            </div>

            <input type = 'file' className = 'browser'/>

            
            <input type = 'submit' value = 'Submit'
            className = 'btn btn-block'/>
            


        </form>
    )
}

export default AddFile
