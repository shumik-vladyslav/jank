import { AuthService } from './../services/auth.service';
import { FuseNavigation } from '@fuse/types';
const auth = new AuthService();
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
                url      : auth.getSignInLink()
            },
            {
                id       : 'Register',
                title    : 'Register',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                externalUrl: true,
                url      : auth.getSignInLink()
                
            },
            {
                id       : 'Logout',
                title    : 'Logout',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                // externalUrl: true,
                url      : '/sign-out'
                ,
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
