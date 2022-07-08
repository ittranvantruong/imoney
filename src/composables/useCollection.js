import { ref } from "vue"
import { collection, addDoc, updateDoc, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "@/configs/firebase.js";

const useCollection = (name) => {

    const error = ref(null);
    async function addRecord(record) {
        error.value = null;
        try {
            const docRef = await addDoc(collection(db, name), record);
            if(!docRef) throw new Error('Could not add record');
            return docRef;
          } catch (e) {
            error.value = e;
          }
    }

    async function updateRecord(record, id) {
      error.value = null;
      try {
        await updateDoc(doc(db, name, id), record);
      } catch (e) {
          error.value = e;
      }
    }

    async function readAllRecord(){
      error.value = null;
      try {
        const querySnapshot = await getDocs(collection(db, name));
        if(!querySnapshot) throw new Error('Could not read record');
        return querySnapshot;
      } catch (e) {
        error.value = e;
      }
    }
    async function readRecord(id){
      error.value = null;
      try {
        var ref = doc(db, name, id);
        const querySnapshot = await getDoc(ref);
        if(!querySnapshot) throw new Error('Could not read record');
        return querySnapshot;

      } catch (e) {
        error.value = e;
      }
    }
    async function deleteRecord(id){
      error.value = null;
      try {
        await deleteDoc(doc(db, name, id));
      } catch (e) {
        error.value = e;
      }
    }


    return { error, addRecord, readAllRecord, readRecord, updateRecord, deleteRecord };

}

export default useCollection;

