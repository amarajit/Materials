
import (Component) from '@angular/core';

@Component({
    selector:'page-header',
    template:'<header><h1>{{webTitle}}-{{pageTitle}}</h1></header>'
});

export class PageHeader{
    constructor(){
        this.webTitle = 'First Angular JS 2 Web Site';
        this.pageTitle = 'Home';
    }
}