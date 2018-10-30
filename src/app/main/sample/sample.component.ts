import { Component, HostListener, ElementRef } from '@angular/core';

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
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public el: ElementRef
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        window.onscroll = () => { this.myFunction() };
    }

    myFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            document.getElementById("myP").className = "test";
        } else {
            document.getElementById("myP").className = "";
        }
        console.log('test')
    }
    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        console.log($event);
        console.log("scrolling");
    }
    obj1 = {
        drop1: false,
        drop2: false,
        drop3: false,
        drop4: false,
        drop5: false,
        drop6: false,
        drop7: false,
        drop8: false,
        drop9: false,
        drop10: false,
        drop11: false,
        drop12: false,
        drop13: false,
        drop14: false,
        drop15: false,
        drop16: false,
        drop17: false,
        drop18: false,
        drop19: false,
        drop20: false
    }
    obj2 = {
        drop21: false,
        drop22: false
    }
    obj3 = {
        drop23: false,
        drop24: false,
        drop25: false
    }
    obj4 = {
        drop26: false,
        drop27: false,
        drop28: false,
        drop29: false,
        drop30: false
    }

    // choice = [
    //     { value: 'yes', viewValue: 'YES' },
    //     { value: 'no', viewValue: 'NO' },
    //     { value: 'not applicable', viewValue: 'NOT APPLICABLE' }
    // ];
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
        { name: 'Do you use Unencrypted / Unmasked Data in Data Warehouse / BI', key: 'drop23', img: '/assets/images/img/warehous.png' },
        { name: 'Do you use Unencrypted / Unmasked Data in Analytic / BigData Platform', key: 'drop24', img: '/assets/images/img/bigdata.png' },
        { name: 'Do you use Unencrypted / Unmasked Data in AI / Machine Learning Platform', key: 'drop25', img: '/assets/images/img/net.png' }
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
    countFrom = 0;
    countTo = 0;
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
        // console.log(item, this.obj1);
        Object.keys(this.obj1).forEach((key) => {

            // console.log(key, this.obj1[key]);
            if (this.obj1[key] === true) {
                this.yesCount1++
            } else if (this.obj1[key] === false) {
                this.noCount1++
            }
        });

        Object.keys(this.obj2).forEach((key) => {

            // console.log(key, this.obj2[key]);
            if (this.obj2[key] === true) {
                this.yesCount2++
            } else if (this.obj2[key] === false) {
                this.noCount2++
            }
        });

        Object.keys(this.obj3).forEach((key) => {

            // console.log(key, this.obj3[key]);
            if (this.obj3[key] === true) {
                this.yesCount3++
            } else if (this.obj3[key] === false) {
                this.noCount3++
            }
        });

        Object.keys(this.obj4).forEach((key) => {

            // console.log(key, this.obj4[key]);
            if (this.obj4[key] === true) {
                this.yesCount3++
            } else if (this.obj4[key] === false) {
                this.noCount3++
            }
        });
        // 1 quesions
        this.denominator = +this.yesCount1 + +this.noCount1;
        this.numerator = +this.yesCount1;
        if (this.denominator >= 0) {
            this.multiplier = this.numerator / this.denominator;
        } else if (this.denominator = 0) {
            this.multiplier = 0;
        }
        // 2 quesions
        this.yesNo2 = (this.yesCount2 + this.noCount2) * 100;
        this.yes2 = this.yesCount2 * 100;
        // 3 quesions
        this.yesNo3 = (this.yesCount3 + this.noCount3) * 100;
        this.yes3 = this.yesCount3 * 100;
        // 4 quesions
        this.yesNo4 = (this.yesCount4 + this.noCount4) * 50;
        this.yes4 = this.yesCount4 * 50;
        // score
        this.score = (this.multiplier * (this.yes4 + this.yes3 + this.yes4) / (this.yesNo2 + this.yesNo3 + this.yesNo4)) * 100;

        if (this.score >= 70 && this.score < 80) {
            this.score = Math.floor(Math.random() * (80 - 70) + 70);
        }

        this.countTo = this.score;

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


    // @HostListener('scroll', ['$event'])
    //     onElementScroll($event) {
    //         console.log($event)
    //     }

    onCountoEnd(value?) {
        value = this.score.toFixed(2);
        this.countFrom = value;
    }

    isScrollDown = false;
    
    scrollTo(className: string): void {
        const elementList = document.querySelectorAll('.' + className);
        const element = elementList[0] as HTMLElement;
        element.scrollIntoView();
    }
}
