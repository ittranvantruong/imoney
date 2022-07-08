<template lang="">
    <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4 shadow-2xl">
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="navItem in navItems" :key="navItem.name" :class="navItem.class">
                    <router-link :to="navItem.route" class="">
                        <i class="t2ico text-2xl" :class="navItem.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
import { reactive } from 'vue'
import { NAV_BOTTOM_ITEMS } from '@/constants/index.js'
export default {
    setup() {
        const navItems = reactive(NAV_BOTTOM_ITEMS);
        return { navItems };
    }
}
</script>
<style lang="">
    
</style>