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
                url      : '/erase-equest'
            },
            {
                id       : 'Report Request',
                title    : 'Report Request',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/report-equest'
            },
            {
                id       : 'Login',
                title    : 'Login',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                externalUrl: true,
                url      : 'https://cwoauth2.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=6a6irnufprh9v325hll67ncafu&response_type=code&redirect_uri=http://localhost:4200/auth-callback&state=asdasdas&scope=openid&identity_provider=cognito'
            },
            {
                id       : 'Register',
                title    : 'Register',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                externalUrl: true,
                url      : 'https://cwoauth2.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=6a6irnufprh9v325hll67ncafu&response_type=code&redirect_uri=http://localhost:4200/auth-callback&state=asdasdas&scope=openid&identity_provider=cognito'
                
            },
            {
                id       : 'Verify Operations',
                title    : 'Verify Operations',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/verify-operations'
            },
            {
                id       : 'Data Requst',
                title    : 'Data Requst',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/data-requst'
            },
            {
                id       : 'Manage De Keys',
                title    : 'Manage De Keys',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/de-keys'
            },
            {
                id       : 'Sensitive Data Inventory',
                title    : 'Sensitive Data Inventory',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/sensitive-data'
            },
            
        ]
    }
];
