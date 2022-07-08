<template lang="">
    <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
            <div class="container mx-auto px-8">
                <ul v-if="wallet">
                    <li v-for="item in wallet" :key="item.key" class="flex py-2 justify-between items-center">
                        <div class="flex justify-start items-center">
                            <i class="t2ico t2ico-wallet text-2xl mr-2"></i>
                            <span>{{ item.name }}</span>
                        </div>
                        <router-link :to="{ name: 'edit.wallet', params: { id: item.id }}" class="flex justify-end">
                            <i class="t2ico t2ico-arrow-right"></i>
                        </router-link>
                    </li>
                </ul>
                <div class="row mt-8 text-center">
                    <router-link :to="{ name: 'new.wallet' }" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add new wallet</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useCollection from '@/composables/useCollection.js'
export default {
    setup() {
        const { error, readAllRecord } = useCollection('wallet');
        return { 
            error, readAllRecord
        }
    },
    data(){
        return { 
            wallet: []
        }
    },
    methods: {
        async getData(){
            const response = await this.readAllRecord();
            this.wallet = response.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
           
        }
    },
    created() {
        this.getData();
    },
}
</script>
<style lang="">
    
</style>