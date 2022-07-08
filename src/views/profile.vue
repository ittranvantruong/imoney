<template lang="">
    <!-- info -->
    <div v-if="user" class="row">
        <div class="container mx-auto p-8">
            <div class="text-center">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img class="w-full h-auto object-cover" src="@/assets/images/profile.jpg" />
                </div>
                <div class="text-blue-600 font-bold">{{ user.displayName }}</div>
                <p class="text-slate-400 font-semibold">{{ user.email }}</p>
            </div>
        </div>
    </div>
    <!-- menu -->
    <div class="row">
        <div class="container mx-auto p-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-blue-600">General</h3>
                </div>
                
            </div>
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <ul>
                        <li v-for="item in profileOption" :key="item.name" class="last:text-red-600">
                            <router-link :to="item.route" class="flex justify-between items-center py-2">
                                <div class="flex items-center text-left">
                                    <i class="t2ico text-2xl" :class="item.icon"></i>
                                    <h5 class="font-semibold ml-3">{{ item.name }}</h5>
                                </div>
                                <div class="flex items-center text-right">
                                    <i class="t2ico t2ico-arrow-right text-xl"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'
import { PROFILE_OPTIONS } from '@/constants/index.js'
import { useUser } from '@/composables/useUser.js';
export default {
    setup() {
        const profileOption = reactive(PROFILE_OPTIONS);
        const { getUser } = useUser();
        const { user } = getUser();
        return { profileOption, user };
    }
}
</script>
<style lang="">
    
</style>