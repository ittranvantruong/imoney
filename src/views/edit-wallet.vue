<template lang="">
    <form @submit.prevent="onSubmit()">
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <!-- start input -->
                    <div class="row flex items-center">
                        <div class="w-full flex flex-col border-b border-gray-100 pb-1">
                            <span class="font-semibold text-xs text-dark">Edit my wallet</span>
                            <input type="text" class="text-2xl text-dark w-full outline-none" min="1" required placeholder="Name wallet" v-model="name"/>
                        </div>
                    </div>
                    <div class="row mt-8 text-center">
                        <button type="submit" class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>
                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" @click="onDelete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import useCollection from '@/composables/useCollection.js'
export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const name = ref("");
        const id = route.params.id;
        const { error, readRecord, updateRecord, deleteRecord } = useCollection('wallet');
        async function loadData() {
            const wallet = await readRecord(id);
            name.value = wallet.data().name;
        }
        // name.value = wallet.data().name;
        
        async function onSubmit(){
            const update = {
                name: name.value
            };
            await updateRecord(update, id);
            if(!error.value){
                router.push({ name: 'wallet'});
            }
        }
        async function onDelete(){
            await deleteRecord(id);
            if(!error.value){
                router.push({ name: 'wallet'});
            }
        }
        loadData();
        return { name, onSubmit, onDelete };

    }
}
</script>
<style lang="">
    
</style>