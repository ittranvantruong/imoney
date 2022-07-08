<template lang="">
    <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
            <div class="container mx-auto px-8">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Ngày
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ghi chú
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Số tiền
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in wallet" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {{ item.time }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ item.note }}
                                </td>
                                <td class="px-6 py-4">
                                    {{vueNumberFormat(item.total, {})}}
                                </td>
                            </tr>
                            <tr class="bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th colspan="2" class="px-6 py-4 text-red-600 dark:text-white whitespace-nowrap font-bold">
                                    Tổng cộng
                                </th>
                                <td class="px-6 py-4 text-red-600 font-bold">{{ vueNumberFormat(total, {}) }}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"
import useCollection from '@/composables/useCollection.js'
export default {
    setup() {
        const total = ref(0);
        const { error, readAllRecord } = useCollection('transactions');
        return { 
            error, readAllRecord, total
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
                this.total += doc.data().total;
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