import { usePatientStore } from "../store"
import { PatientDetail } from "./PatientDetail";


export const PatientList = () => {
  const { patients } = usePatientStore();


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {
        patients.length > 0
        ?<>
          <h2 className='text-3xl text-center font-black'>Lista de pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus 
            <span className='text-indigo-600 font-bold'>pacientes.</span>
          </p>

          {
            patients.map( patient => (
              <PatientDetail patient={ patient } key={patient.id}/>
            ))
          }
        </>
        :<>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl text-center mt-5 mb-10'>
            Comienza agregando pacientes 
            <span className='text-indigo-600 font-bold'>y aparecera en este lugar.</span>
          </p>
        </>
      }
    </div>
  )
}
