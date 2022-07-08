<template lang="">
    <div v-if="user">
        Home
        {{ user.displayName }}
    </div>
    <slot />
</template>
<script>
import { useUser } from '@/composables/useUser.js';
export default {
    setup() {
        const { getUser } = useUser();
        const { user } = getUser();
        return { user };
    }
}
</script>
<style lang="">
    
</style>