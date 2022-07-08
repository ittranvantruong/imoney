import { ref } from "vue"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/configs/firebase.js";
const error = ref(null);
const isPending = ref(false);

async function signUp(fullname, email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if(!response) throw new Error('could not create user')
        console.log(response.user);
        await updateProfile(response.user, { displayName: fullname });
        return response;
    } catch (err) {
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}


export function useSignUp() {
    return { signUp, error, isPending };
}