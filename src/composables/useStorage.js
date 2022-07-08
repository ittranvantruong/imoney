import { ref } from "vue"
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/configs/firebase.js";
import { useUser } from "@/composables/useUser.js";
const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {

    const error = ref(null);
    const filePath = ref("");
    const url = ref(null);
    
    function uploadFile(file) {
        error.value = null;
        filePath.value = `${name}/${user.value.uid}/${file.name}`;
        console.log(filePath.value);
        const fileRef = storageRef(storage, filePath.value);
        try {
            // 'file' comes from the Blob or File API
            const uploadTask = uploadBytesResumable(fileRef, file);
            uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    throw new Error(error);
                }, 
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        url.value = downloadURL;
                    });
                  }
            );
        } catch (e) {
            error.value = e;
        }
    }
    return { error, uploadFile, url };
}

export default useStorage;