import { ref } from "vue"
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase.js";
const error = ref(null);

async function logout(){
    try {
        const response =  signOut(auth);
        if(!response) throw new Error("Could you not successfully log out");
        return response;
    } catch (err) {
        error.value = err.message;
    }
}

export function useSignOut() {
    return {  logout, error };
}
