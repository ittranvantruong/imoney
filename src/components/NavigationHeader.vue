<template lang="">
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center">
                    <div v-if="meta.leading" class="w-12 h-12 mx-auto rounded-full overflow-hidden">
                        <img class="w-full h-auto object-cover" src="@/assets/images/profile.jpg" />
                    </div>
                    <div class="ml-1">
                        <span class="font-bold text-xl">{{ meta.text }}</span>
                    </div>
                </div>
                <div class="flex">
                    <ul>
                        <li v-if="meta.action == 'notification'">
                            <i class="t2ico t2ico-notification text-2xl"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute();
        return { 
            meta: computed(() => route.meta)
        }
    }
}
</script>
<style lang="">
    
</style>