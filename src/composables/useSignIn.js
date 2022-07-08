import { ref } from "vue"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/firebase.js";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        if(!response) throw new Error("Could not sign in");
        return response;
    }catch(err) {
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignIn(){
    return { signIn, isPending, error };
}