import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"



export const PatientDetail = ( {patient}: {patient: Patient} ) => {

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      {
        Object.keys(patient).reverse().map( key => (
          <PatientDetailItem label={key} key={key} value={ `${patient[key]}` }/>
        ))
      }
    </div>
  )
}
