import { usePatientStore } from "../store"
import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"



export const PatientDetail = ( {patient}: {patient: Patient} ) => {
  const { deletePatient } = usePatientStore()


  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      {
        Object.keys(patient).reverse().map( key => (
          <PatientDetailItem label={key} key={key} value={ `${patient[key]}` }/>
        ))
      }

      <div className='flex justify-between mt-10'>
        <button
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
        >Editar</button>

        <button
          onClick={ () => deletePatient(patient.id) }
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
        >Eliminar</button>
      </div>
    </div>
  )
}
