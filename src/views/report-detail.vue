<template lang="">
    <NavigationBudgetHeader :active="id"/>
</template>
<script>
import { ref } from 'vue';
import NavigationBudgetHeader from "@/components/NavigationBudgetHeader.vue"
import { useRoute } from 'vue-router'
import useCollection from '@/composables/useCollection.js'
export default {
    setup() {
        const route = useRoute();
        const id = ref(route.params.id);
        return { id };
    },
    components: {
        NavigationBudgetHeader
    }
}
</script>
<style lang="">
    
</style>