import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'Calculate',
                title    : 'Calculate',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Erase Request',
                title    : 'Erase Request',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/erase-equest',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Report Request',
                title    : 'Report Request',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/report-equest',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Login',
                title    : 'Login',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/login',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Register',
                title    : 'Register',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/register',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Verify Operations',
                title    : 'Verify Operations',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/verify-operations',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Data Requst',
                title    : 'Data Requst',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/data-requst',
                badge    : {
                    title    : '25',
                    // translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
        ]
    }
];
