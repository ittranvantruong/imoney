import { defineAsyncComponent } from "vue"

export function registerAsyncComponent(app) {
    app.component(
        'default-layout',
        defineAsyncComponent(() => import('../layouts/default.vue'))
    )

    app.component(
        'auth-layout',
        defineAsyncComponent(() => import('../layouts/auth.vue'))
    )
}







