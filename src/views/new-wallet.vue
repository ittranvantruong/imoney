<template lang="">
    <form @submit.prevent="onSubmit()">
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <!-- start input -->
                    <div class="row flex items-center">
                        <div class="w-full flex flex-col border-b border-gray-100 pb-1">
                            <span class="font-semibold text-xs text-dark">New my wallet</span>
                            <input type="text" class="text-2xl text-dark w-full outline-none" min="1" required placeholder="Name wallet" v-model="name"/>
                        </div>
                    </div>
                    <div class="row mt-8 text-center">
                        <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    
</template>
<script>
import { ref } from "vue"
import { useRouter } from "vue-router";
import useCollection from '@/composables/useCollection.js'
export default {
    setup() {
        const router = useRouter();
        const { error, addRecord } = useCollection('wallet');
        const name = ref("");
        
        async function onSubmit(){
            const data = {
                name: name.value,
            }
            await addRecord(data);
            if(!error.value){
                router.push({ name: 'wallet'});
            }
        }
        return { 
            name, onSubmit
        }
    }
}
</script>
<style lang="">
    
</style>