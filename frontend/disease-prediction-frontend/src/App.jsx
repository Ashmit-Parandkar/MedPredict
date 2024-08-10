import { useState } from 'react'
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import './App.css'
import Search from './components/Search'
import Output from './components/Output'
import Chat from './components/Chat'
import Navbar from './components/Navbar';

function App() {

  const [disease, setDisease] = useState('')
  const [description, setDescription] = useState('')
  const [precautions, setPrecautions] = useState([])
  const [medications, setMedications] = useState([])
  const [workout, setWorkout] = useState('')

  const [isDiseaseDetailsLoading, setIsDiseaseDetailsLoading] = useState(false)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={
          <>
            <div style={{width:'70vw'}}>
              <Search setDisease={setDisease} setDescription={setDescription} setPrecautions={setPrecautions} setMedications={setMedications} setWorkout={setWorkout} isDiseaseDetailsLoading={isDiseaseDetailsLoading} setIsDiseaseDetailsLoading={setIsDiseaseDetailsLoading}/>
            </div>
            <div className=''>
              <Output disease={disease} description={description} precautions={precautions} medications={medications} workout={workout} isDiseaseDetailsLoading={isDiseaseDetailsLoading}/>
            </div>
          </>
        }/>
        <Route exact path='/chat' element={
          <Chat />
        }/>
      </Routes>
    </>
  )
}

export default App
