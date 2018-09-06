import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

    obj1 = {
        drop1: "no",
        drop2: "no",
        drop3: "no",
        drop4: "no",
        drop5: "no",
        drop6: "no",
        drop7: "no",
        drop8: "no",
        drop9: "no",
        drop10: "no",
        drop11: "no",
        drop12: "no",
        drop13: "no",
        drop14: "no",
        drop15: "no",
        drop16: "no",
        drop17: "no",
        drop18: "no",
        drop19: "no",
        drop20: "no"
    }
    obj2 = {
        drop21: "no",
        drop22: "no"
    }
    obj3 = {
        drop23: "no",
        drop24: "no",
        drop25: "no"
    }
    obj4 = {
        drop26: "no",
        drop27: "no",
        drop28: "no",
        drop29: "no",
        drop30: "no"
    }

    choice = [
        { value: 'yes', viewValue: 'YES' },
        { value: 'no', viewValue: 'NO' },
        { value: 'not applicable', viewValue: 'NOT APPLICABLE' }
    ];
    data1 = [
        { name: '(a) Person Names', key: 'drop1' },
        { name: '(b) Addresses', key: 'drop2' },
        { name: '(c) Telephone numbers', key: 'drop3' },
        { name: '(d) Fax numbers', key: 'drop4' },
        { name: '(e) Email addresses', key: 'drop5' },
        { name: '(f) Government Id / SSN', key: 'drop6' },
        { name: '(g) DOB', key: 'drop7' },
        { name: '(h) Medical record numbers', key: 'drop8' },
        { name: '(i) Health plan beneficiary numbers', key: 'drop9' },
        { name: '(j) Vehicle License plate numbers', key: 'drop10' },
        { name: '(k) Customer\'s URL', key: 'drop11' },
        { name: '(l) Images with customer Information', key: 'drop12' },
        { name: '(m) Customer IP Addresses', key: 'drop13' },
        { name: '(n) Credit Card Number', key: 'drop14' },
        { name: '(o) Vehicle Registration Number', key: 'drop15' },
        { name: '(p) Customer\'s IP Address', key: 'drop16' },
        { name: '(q) Passport Number', key: 'drop17' },
        { name: '(r) Visa Number', key: 'drop18' },
        { name: '(s) Customer Salary Information', key: 'drop19' },
        { name: '(t) Customer Banking Information', key: 'drop20' }
    ];
    data2 = [
        { name: 'Do you copy sensitive Production Data to QA', key: 'drop21' },
        { name: 'Do you copy sensitive Production Data to Development', key: 'drop22' }
    ];
    data3 = [
        { name: 'Do you use Unencrypted / Unmasked Data in Data Warehouse / BI', key: 'drop23', img: 'https://d2v8ggac1o0f6z.cloudfront.net/gsc/G0AI8E/9e/b8/00/9eb8001d29e5480d8c4f5cd30519176d/images/riskcalculator/u469.png?token=e542a432ee248349ab2ff3168a08c221' },
        { name: 'Do you use Unencrypted / Unmasked Data in Analytic / BigData Platform', key: 'drop24', img: 'https://dxlfb468n8ekd.cloudfront.net/gsc/G0AI8E/9e/b8/00/9eb8001d29e5480d8c4f5cd30519176d/images/riskcalculator/u479.png?token=cc7b8097c700486d651c05c1da61e438' },
        { name: 'Do you use Unencrypted / Unmasked Data in AI / Machine Learning Platform', key: 'drop25', img: 'https://dxlfb468n8ekd.cloudfront.net/gsc/G0AI8E/9e/b8/00/9eb8001d29e5480d8c4f5cd30519176d/images/riskcalculator/u478.png?token=59016fa7a2a203d13c26f004b54b80ce' }
    ];
    data4 = [
        { name: 'Remote / Vendor workforce have access to your systems?', key: 'drop26' },
        { name: 'Remote / Vendor workforce do Production Support?', key: 'drop27' },
        { name: 'Remote / Vendor workforce access Production Database?', key: 'drop28' },
        { name: 'Remote / Vendor workforce access Production Server?', key: 'drop29' },
        { name: 'Remote / Vendor workforce access Production Reports?', key: 'drop30' }
    ];
    yesCount1;
    noCount1;
    yesCount2;
    noCount2;
    yes2;
    yesNo2;
    yesCount3;
    noCount3;
    yes3;
    yesNo3;
    yesCount4;
    noCount4;
    yes4;
    yesNo4;
    denominator;
    numerator;
    multiplier;
    score = 0;
    calculateRisk(item) {

        this.yesCount1 = 0;
        this.noCount1 = 0;
        this.yesCount2 = 0;
        this.noCount2 = 0;
        this.yesCount3 = 0;
        this.noCount3 = 0;
        this.yesCount4 = 0;
        this.noCount4 = 0;
        this.yes2 = 0;
        this.yesNo2 = 0;
        this.yes3 = 0;
        this.yesNo3 = 0;
        this.yes4 = 0;
        this.yesNo4 = 0;
        this.denominator = 0;
        this.numerator = 0;
        this.multiplier = 0;
        this.score = 0;
        console.log(item, this.obj1);
        Object.keys(this.obj1).forEach( (key) => {

            console.log(key, this.obj1[key]);
            if( this.obj1[key] === 'yes' ){
                this.yesCount1++
            } else if ( this.obj1[key] === 'no' ) {
                this.noCount1++
            }
        });

        Object.keys(this.obj2).forEach( (key) => {

            console.log(key, this.obj2[key]);
            if( this.obj2[key] === 'yes' ){
                this.yesCount2++
            } else if ( this.obj2[key] === 'no' ) {
                this.noCount2++
            }
        });

        Object.keys(this.obj3).forEach( (key) => {

            console.log(key, this.obj3[key]);
            if( this.obj3[key] === 'yes' ){
                this.yesCount3++
            } else if ( this.obj3[key] === 'no' ) {
                this.noCount3++
            }
        });

        Object.keys(this.obj4).forEach( (key) => {

            console.log(key, this.obj4[key]);
            if( this.obj4[key] === 'yes' ){
                this.yesCount3++
            } else if ( this.obj4[key] === 'no' ) {
                this.noCount3++
            }
        });
        // 1 quesions
        this.denominator = +this.yesCount1 + +this.noCount1;
        this.numerator = +this.yesCount1;
        if (this.denominator >= 0){
            this.multiplier = this.numerator / this.denominator;
        } else if ( this.denominator = 0 ){
            this.multiplier = 0;
        }
        // 2 quesions
            this.yesNo2 = ( this.yesCount2 + this.noCount2 ) * 100;
            this.yes2 = this.yesCount2 * 100;
        // 3 quesions
            this.yesNo3 = ( this.yesCount3 + this.noCount3 ) * 100;
            this.yes3 = this.yesCount3 * 100;
        // 4 quesions
            this.yesNo4 = ( this.yesCount4 + this.noCount4 ) * 50;
            this.yes4 = this.yesCount4 * 50;
        // score
        this.score = (this.multiplier * ( this.yes4 + this.yes3 + this.yes4 ) / ( this.yesNo2 + this.yesNo3 + this.yesNo4 )) * 100; 

        // console.log(
        //     this.yesCount1,
        //     this.noCount1,
        //     this.yesCount2,
        //     this.noCount2,
        //     this.yesCount3,
        //     this.noCount3,
        //     this.yesCount4,
        //     this.noCount4,
        //     this.yes2,
        //     this.yesNo2,
        //     this.yes3,
        //     this.yesNo3,
        //     this.yes4,
        //     this.yesNo4,
        //     this.denominator,
        //     this.numerator,
        //     this.multiplier,
        //     this.score,
        //  );
    }
    
}
