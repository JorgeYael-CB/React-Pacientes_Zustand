import { create } from "zustand"
import { DrafPatient, Patient } from "../types";


type PatientState = {
  patients: Patient[];
  addPatient: ( data:DrafPatient ) => void;
}


export const UsePatientStore = create<PatientState>( () => ({
  patients: [],
  addPatient: () => {
  },
}));