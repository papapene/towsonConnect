import Header from './components/Header'
import Files from './components/Files'
import AddFile from './components/AddFile'
import { useState } from 'react'

const App = () => {
  const [displayForm, setDisplayForm] = useState (false)
  const [files, setFiles] = useState([
    {
        fiNum: 1,
        fiName: 'Assignment_1',
        fiDesc: 'Assignment 1',
        assignment: true,
        


    },
    {
        fiNum: 2,
        fiName: 'Assignment_2',
        fiDesc: 'Assignment 2',
        assignment: true,


    },

    {
        fiNum: 3,
        fiName: 'Proposal',
        fiDesc: 'Project Proposal',
        assignment: false,


    }
])
//Add File 
const addFile = (file) => {
  const fiNum = Math.floor(Math.random()* 65) + 1

  const newFile = {fiNum, ...file }
  setFiles([...files,newFile])
}

//Delete File
const deleteFile = (fiNum) => {
 
  setFiles(files.filter((files) => files.fiNum !== fiNum))
}
  //Toggle upload
  const toggleUpload = (fiNum) => {
    setFiles(
      files.map((file) =>
      file.fiNum === fiNum ? { ...file, assignment:
       !file.assignment} : file
      )
    )
  }

  
  return (
    <div className='container'>
      <h1 style={headingStyle}>Towson Connect</h1>
     <Header onAdd={() => setDisplayForm(!displayForm)}
              showForm={displayForm}
     />
     {displayForm && <AddFile onAdd = {addFile}/>}
    { files.length > 0 ? (<Files files = {files} 
     onDelete = {deleteFile} onToggle = {toggleUpload}/> ): ('No Media Uploaded!')}
    </div>
  )
}

const headingStyle = {
  color: 'gold', 
  backgroundColor: 'dimgray', 
  textAlign: 'center'

}

export default App
