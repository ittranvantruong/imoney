export const PUBLIC_LAYOUT = "default";

export const PROFILE_OPTIONS = [
    {
        name: "My wallet",
        icon: "t2ico t2ico-wallet",
        route: {
            name: 'wallet',
            params: {}
        }
    },
    {
        name: "Tools",
        icon: "t2ico t2ico-ticket-star",
        route: {
            name: 'home',
            params: {}
        }
    },
    {
        name: "Privacy",
        icon: "t2ico t2ico-lock",
        route: {
            name: 'home',
            params: {}
        }
    },
    {
        name: "About",
        icon: "t2ico t2ico-info-square",
        route: {
            name: 'home',
            params: {}
        }
    },
    {
        name: "Logout",
        icon: "t2ico t2ico-logout",
        route: {
            name: 'logout',
            params: {}
        }
    }
];
export const NAV_BOTTOM_ITEMS = [
    {
        icon: 't2ico-category',
        text: 'Home',
        class: '',
        route: {
            name: 'home',
            params: {}
        }
    },
    {
        icon: 't2ico-chart',
        text: 'Report',
        class: '',
        route: {
            name: 'report',
            params: {}
        }
    },
    {
        icon: 't2ico-plus',
        text: 'New transaction',
        class: 'w-12 h-12 flex justify-center items-center text-white bg-blue-700 rounded-full mt--4',
        route: {
            name: 'new.transaction',
            params: {}
        }
    },
    {
        icon: 't2ico-presentation',
        text: 'Budget',
        class: '',
        route: {
            name: 'budget',
            params: {}
        }
    },
    {
        icon: 't2ico-profile',
        text: 'Profile',
        class: '',
        route: {
            name: 'profile',
            params: {}
        }
    }
];