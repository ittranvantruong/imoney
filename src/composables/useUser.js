import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebase.js";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
    if (_user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.value = _user;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
function getUser(){
    return { user };
}

export function useUser() {
    return { getUser };
}