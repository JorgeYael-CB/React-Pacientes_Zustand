import { create } from "zustand"
import { DrafPatient, Patient } from "../types";
import { v4 as uuid } from 'uuid';



type PatientState = {
  patients: Patient[];
  addPatient: ( data:DrafPatient ) => void;
  deletePatient: ( id:string ) => void;
}


const createPatient = ( patient:DrafPatient ):Patient => {
  return {...patient, id: uuid()};
}


export const usePatientStore = create<PatientState>( (set) => ({
  patients: [],
  addPatient: ( data ) => {
    set( state => ({
      patients: [...state.patients, createPatient(data)],
    }));
  },
  deletePatient: ( id ) => {
    set( state => ({
      patients: [...state.patients.filter( patient => patient.id !== id )],
    }));
  }
}));