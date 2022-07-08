<template lang="">
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <div  v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">{{ error }}</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
            <!-- form login -->
            <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email Address</span>
                        <input id="email" type="email" class="px-4 py-3 rounded-lg border mt-1 focus:border-blue-400 active:border-blue-400 focus-visible:border-blue-400" placeholder="Email address" v-model="email" />
                    </label>    
                </div>
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input id="password" type="text" class="px-4 py-3 rounded-lg border mt-1 focus:border-blue-400 active:border-blue-400 focus-visible:border-blue-400" placeholder="Password" v-model="password" />
                    </label>    
                </div>
                <button v-if="isPending" disabled type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <svg role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Loading...
                </button>
                <button v-else type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign In</button>
            </form>
            <!-- direction  -->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm already a member</span>
                <span class="ml-1 text-blue-700 font-bold">
                    <router-link :to="{ name: 'register', params: {}}" class="text-blue-700 semibold">Sign Up</router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn.js"

export default {
    setup() {
        const email = ref("")
        const password = ref("")
        const router = useRouter();
        const { signIn, isPending, error } = useSignIn();
        async function onSubmit() {
            await signIn(email.value, password.value);
            if(!error.value) {
                router.push({ name: 'profile', params: {}  });
            }
        }
        return { onSubmit, email, password, error, isPending };
    }
}
</script>
<style lang="">
    
</style>