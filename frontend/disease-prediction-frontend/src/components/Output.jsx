import React, {useState} from 'react'
import loader from '../assets/loader.gif'

function Output(props) {

  

  const [selectedOption, setSelectedOption] = useState('Description')


  return (
<div>
    {props.isDiseaseDetailsLoading && <div><img src={loader} className='loader' alt="" /></div>}
    <div style={{marginTop:'100px'}} className='output'>






{ !props.isDiseaseDetailsLoading && props.disease && <div className='details'>

  <div>
      {props.disease && <h1 style={{fontSize:"2rem"}}>Disease is : <br /><div style={{backgroundColor:"red", borderRadius:"6px",marginTop:"10px", padding:"0 4px 4px 4px"}}>{props.disease}</div></h1>}
    </div>


<div className="btn-group select-buttons">
        <input
          type="radio"
          className="btn-check"
          defaultChecked
          name="radiobtn"
          id="rdio1"
          autoComplete="off"
          onClick={() => setSelectedOption('Description')}
        />
        <label className="btn btn-primary btn-choose" htmlFor="rdio1">
          Description
        </label>

        <input
          type="radio"
          className="btn-check"
          name="radiobtn"
          id="rdio2"
          autoComplete="off"
          onClick={() => setSelectedOption('Precaution')}
        />
        <label className="btn btn-primary btn-choose" htmlFor="rdio2">
          Precaution
        </label>

        <input
          type="radio"
          className="btn-check"
          name="radiobtn"
          id="rdio3"
          autoComplete="off"
          onClick={() => setSelectedOption('Medication')}
        />
        <label className="btn btn-primary btn-choose" htmlFor="rdio3">
          Medications
        </label>


        <input
          type="radio"
          className="btn-check"
          name="radiobtn"
          id="rdio4"
          autoComplete="off"
          onClick={() => setSelectedOption('Workout')}
        />
        <label className="btn btn-primary btn-choose" htmlFor="rdio4">
          Workout
        </label>
      </div>



<div className='card my-card'>



      {selectedOption === 'Description' && (
        <>
          {props.description && <h2>Description:</h2>}
          {props.description && <h4>{props.description}</h4>}
        </>
      )}

    {selectedOption === 'Precaution' && (
        <>
          {props.precautions && props.precautions.length > 0 && <h2>Precautions:</h2>}
          {props.precautions && (
            <ul style={{listStyle:"none", paddingLeft:"0px"}}>
              {props.precautions.map((precaution, index) => (
                <li key={index} className='card li-card'>{precaution}</li>
              ))}
            </ul>
          )}
        </>
      )}
      

      {selectedOption === 'Medication' && (
        <>
          {props.medications && props.medications.length > 0 && <h2>Medication:</h2>}
          {props.medications && (
            <ul style={{listStyle:"none", textAlign:"start", paddingLeft:"0px"}}>
              {props.medications.map((medication, index) => (
                <li key={index} className='card li-card'>{medication}</li>
              ))}
            </ul>
          )}
        </>
      )}

      {selectedOption === 'Workout' && (
        <>
          {props.workout && <h2>Workout:</h2>}
          <h4>{props.workout}</h4>
        </>
      )}

</div>

</div>}

    </div>
    <div className='end'></div>
    </div>

  )
}

export default Output
