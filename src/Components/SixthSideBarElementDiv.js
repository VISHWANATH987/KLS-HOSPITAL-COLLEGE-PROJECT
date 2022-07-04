
import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';

import DescriptionIcon from '@mui/icons-material/Description';

import { Alert, Button } from '@mui/material';

function SixthSideBarElementDiv() {

  const [Patients,SetPatients] = useState([]);

  const [selectedIndexPatientTemp,SetSelectedIndexPatientTemp] = useState(-1);

  const [selectedIndexTemp,SetSelectedIndexTemp] = useState(-1);

  const [selectedSlotTemp,SetSelectedSlotTemp] = useState("NO_SLOT_SELECTED");


  const HandleOnChangeSelectedPatients = ((e)=>{
      console.log(e.target.value);
      const selectedIndexPatient = e.target.options.selectedIndex;
      console.log(selectedIndexPatient-1);
      SetSelectedIndexPatientTemp(selectedIndexPatient);
  })



  const [val,SetVal] = useState(0);


    useEffect(() => {
        axios({
            method:'get',
            url:'https://kls-college-project-hospital.herokuapp.com/patient',
            data: {
          
                }
            })
            .then((response)=> {
              
            console.log(response.data);
            SetPatients(response.data);
            val==2 ? SetVal(2) : SetVal(val+1);
            }, (error) => {
            console.log(error);
            });
      }, [val]);


      const AddDoctor = (()=>{

       var win = window.open("https://kls-college-project-hospital.herokuapp.com/genpdf/INVOICE_"+Patients[selectedIndexPatientTemp-1].id+".pdf/"+Patients[selectedIndexPatientTemp-1].id, '_self');
       win.focus();

      });



  

  return (
    <div className='PatientAddedSuccessDiv'>
      <div className='PatientAddedSuccess'>
      <div className='PatientAddedSuccessBottom'> 
      
      KLS HOSPITAL BILL GENERATION
      
      <div className='ScheduleAppInnerDivTopSelectPatient'>
                        <select className='ScheduleAppInnerDivTopSelectPatientOptions' onChange={HandleOnChangeSelectedPatients}>
                             <option key="0" value="0">SELECT PATIENT</option>
                             {
                                Patients.map((Patient)=>(
                                    <option key={Patient.id} value={Patient.id+" : "+Patient.pname}>
                                        {Patient.id} {" : "} {Patient.pname}
                                    </option>
                                ))

                            }
                        </select>
      </div>
      
      
      <div className='ScheduleAppInnerDivBottom'>
            <Button id="Submit" onClick={(e)=> ( AddDoctor(e) )} variant="contained" color="primary" fullwidth>Generate Bill</Button>
            </div>
      
      </div>

      <div className='PatientAddedSuccessTop'>

      </div>

     



      </div>

    

  </div>
  );
}

export default SixthSideBarElementDiv;
