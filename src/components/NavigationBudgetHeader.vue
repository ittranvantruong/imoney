<template lang="">
    <ul class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="mr-2">
            <router-link v-if="active == 0" :to="{ name: 'report'}" class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group">
                Tổng quan
            </router-link>
            <router-link v-else :to="{ name: 'report'}" class="inline-flex p-4 rounded-t-lg border-b-2 border-transparen hover:border-gray-300 dark:hover:text-gray-300 group">
                Tổng quan
            </router-link>
        </li>
        <li v-for="item in wallet" :key="item.id" class="mr-2">
            <router-link v-if="active == item.id" :to="{ name: 'report.detail', params: { id: item.id }}" class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group">
                {{ item.name }}
            </router-link>
            <router-link v-else :to="{ name: 'report.detail', params: { id: item.id }}" class="inline-flex p-4 rounded-t-lg border-b-2 border-transparen hover:border-gray-300 dark:hover:text-gray-300 group">
                {{ item.name }}
            </router-link>
        </li>
    </ul>
    {{ active }}
</template>
<script>
import useCollection from '@/composables/useCollection.js'
export default {
    props: {
        active: String
    },
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