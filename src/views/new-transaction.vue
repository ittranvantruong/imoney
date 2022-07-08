<template lang="">
    <form @submit.prevent="onSubmit()">
        <!-- start card main-->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <!-- start input -->
                    <div class="row flex items-center">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span class="text-sm rounded inline-block px-1 text-dark border border-dark">Đ</span>
                            </div>
                        </label>
                        <div class="w-full flex flex-col border-b border-gray-100 pb-1">
                            <span class="font-semibold text-xs text-dark">Total</span>
                            <input type="number" class="text-2xl text-dark w-full outline-none" min="1" required placeholder="0" v-model="total"/>
                        </div>
                    </div>

                    <!-- start input -->
                    <div class="row flex items-center">
                        <label for="note" class="flex justify-end items-center">
                            <div class="flex justify-end items-center w-10 leading-10 mr-4">
                                <i class="t2ico t2ico-document text-2xl"></i>
                            </div>
                        </label>
                        <div class="w-full border-b border-gray-100 pb-1">
                            <input type="text" id="note" class="text-xl text-dark w-full outline-none pt-4" placeholder="Note" v-model="note"/>
                        </div>
                    </div>
                    <!-- start input -->
                    <div class="row flex items-center">
                        <label for="time" class="flex justify-end items-center">
                            <div class="flex justify-end items-center w-10 leading-10 mr-4">
                                <i class="t2ico t2ico-calendar text-2xl"></i>
                            </div>
                        </label>
                        <div class="w-full border-b border-gray-100 pb-1">
                            <input type="date" id="time" class="text-xl text-dark w-full outline-none pt-4" v-model="time"/>
                        </div>
                    </div>
                    <!-- start input -->
                    <div class="row flex items-center">
                        <label for="total" class="flex justify-end items-center">
                            <div class="flex justify-end items-center w-10 leading-10 mr-4">
                                <i class="t2ico t2ico-wallet text-2xl"></i>
                            </div>
                        </label>
                        <div class="w-full border-b border-gray-100 pb-1">
                            <select class="text-xl text-dark w-full outline-none pt-4" v-model="wallet" required>
                                <option value="">Choose wallet</option>
                                <option v-for="item in data" :value="item.id">{{ item.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- button see more -->
        <div v-if="!isMoreDetail" class="row mt-8">
            <button type="button" @click="isMoreDetail=true" class="bg-white rounded-lg py-3 w-full text-blue-600 font-bold">More Details</button>
        </div>

        <!-- start card advance -->
        <div v-if="isMoreDetail" class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <!-- start input -->
                    <div class="row flex items-center">
                        <label for="location" class="flex justify-end items-center">
                            <div class="flex justify-end items-center w-10 leading-10 mr-4">
                                <i class="t2ico t2ico-location text-2xl"></i>
                            </div>
                        </label>
                        <div class="w-full border-b border-gray-100 pb-1">
                            <input type="text" id="location" class="text-xl text-dark w-full outline-none pt-4" placeholder="Select a location" v-model="location"/>
                        </div>
                    </div>
                    <!-- start input -->
                    <div class="row flex items-center">
                        <label for="withPerson" class="flex justify-end items-center">
                            <div class="flex justify-end items-center w-10 leading-10 mr-4">
                                <i class="t2ico t2ico-users text-2xl"></i>
                            </div>
                        </label>
                        <div class="w-full border-b border-gray-100 pb-1">
                            <input type="text" id="withPerson" class="text-xl text-dark w-full outline-none pt-4" placeholder="With person" v-model="withPerson"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- start card file -->
        <div v-if="isMoreDetail" class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <!-- start input -->
                    <div class="row flex items-center text-blue-600">
                        <label for="file" class="flex justify-end items-center">
                            <div class="flex justify-end items-center w-10 leading-10 mr-4">
                                <i class="t2ico t2ico-camera text-2xl"></i>
                            </div>
                        </label>
                        <div class="w-full font-bold">
                            Upload photo
                            <input type="file" id="file" class="hidden" @change="onChangeFile($event)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-8 text-center">
            <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add</button>
        </div>
        
    </form>
</template>
<script>
import { ref } from "vue"
import { useUser } from '@/composables/useUser'
import useCollection from '@/composables/useCollection.js'
import useStorage from '@/composables/useStorage.js'
export default {
    setup() {
        const isMoreDetail = ref(false);
        const total = ref(0);
        const { getUser } = useUser();
        const { error, addRecord } = useCollection('transactions');
        const { readAllRecord } = useCollection('wallet');
        const note = ref("");
        const day = (new Intl.DateTimeFormat('en')).formatToParts();
        const wallet = ref("");
        const location = ref("");
        const withPerson = ref("");
        const file = ref(null);
        const errorFile = ref(null);
        const { uploadFile, url } = useStorage('transactions');
        const time = ref( day[4].value + '-' + (day[0].value < 10 ? '0' + day[0].value : day[0].value) + '-' + (day[2].value < 10 ? '0'+day[2].value : day[2].value) );
        async function onSubmit() {
            if(file.value){
                await uploadFile(file.value);
            }
            const { user } = getUser();
            const transaction = {
                total: parseInt(total.value),
                note: note.value, 
                time: time.value, 
                wallet: wallet.value,
                userId: user.value.uid,
                url: url.value
            }
            await addRecord(transaction);
            if(error.value){
                alert(error.value);
                return;
            }
            alert('Added transaction.');
        }

        function onChangeFile(event) {
            const selected = event.target.files[0];
            if(selected){
                file.value = selected;
            }else{
                file.value = null;
                errorFile.value = "could not file Upload";
            }
        }
        return {
            onSubmit, isMoreDetail, total, wallet, note, time, location, withPerson, onChangeFile, readAllRecord
        }
    },
    data(){
        return { 
            data: []
        }
    },
    methods: {
        async getData(){
            const response = await this.readAllRecord();
            this.data = response.docs.map((doc) => {
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