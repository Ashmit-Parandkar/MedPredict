import React, {useEffect, useState} from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import loader from '../assets/loader.gif'

function Search(props) {


    const [options, setOptions] = useState([])
    const [isSymtomsLoading, setIsSymptomsLoading] = useState(true)

    useEffect(() => {

        fetch('http://localhost:4000/getSymptoms')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                // console.log(json[0].symptoms);
                setOptions(json[0].symptoms);
                setIsSymptomsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);


    const handleSubmit = async (event) => {

        props.setIsDiseaseDetailsLoading(true)

        event.preventDefault();
        
        const symptoms_tags = document.getElementsByClassName('chip')
        // console.log(symptoms_tags);

        const symptoms = []

        for (let i=0;i<symptoms_tags.length;i++){
            symptoms.push(symptoms_tags[i].innerText);
        }
        // console.log(symptoms);

        try {
            const response = await fetch('http://localhost:4000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ symptoms })
            });
            const data = await response.json();
            // console.log(data);

            props.setDisease(data.disease)
            props.setDescription(data.description)
            
            const precautions = Object.values(data.precautions)
            // console.log(precautions);
            props.setPrecautions(precautions)

            const medications = Object.values(data.medications)
            // console.log(precautions);
            props.setMedications(medications)

            props.setWorkout(data.workout)

            props.setIsDiseaseDetailsLoading(false)

            setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }, 0);

            setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }, 1000);

        } 
        catch (error) {
            console.error(error);
        }
    };


    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className='my-4'>Enter the Symptoms</h2>
<div className='search-box'>
                    {isSymtomsLoading && <div><img src={loader} className='loader' alt="" /></div>}

                    {!isSymtomsLoading && <Multiselect options={options} placeholder="Symptoms" displayValue='symptom' style={{
                        multiselectContainer: { 
                            // To change css for multiselect (Width,height,etc..)
                            color:'black',
                            backgroundColor:'#101010',
                            fontSize:'20px',
                            borderRadius:'4px',
                        },
                        searchBox: { 
                            // To change search box element look
                            border: '1px solid cyan',
                            boxShadow:'1px 1px 12px -1px darkturquoise',
                            padding:'10px',
                            width:'70vw',
                            fontSize:'20px',
                            minHeight: '22vh',
                            borderRadius:'4px',
                        },
                        inputField: { 
                            // To change input field position or margin
                            margin: '5px',
                            fontSize:'20px',
                        },
                        chips: { 
                            // To change css chips(Selected options)
                            color:'white',
                            background: 'red',
                            boxShadow:'1px 1px 12px 0 red',
                            borderRadius:'4px',
                            fontSize:'20px',
                            padding:'12px',
                            margin:'5px',
                            marginBottom:'10px'
                        },
                        optionContainer: { 
                            // To change css for option container 
                            border: '2px solid white',
                            fontSize:'20px',
                            borderRadius:'2px'
                        },
                        option: { 
                            // To change css for dropdown options
                            fontSize:'20px',
                            color: 'black',
                        }
                    }}/>}

</div>

                    <button type="submit" style={{marginTop:'5vh'}}>Submit</button>
                </form>
            </div>
        
        </div>
    )
}

export default Search
