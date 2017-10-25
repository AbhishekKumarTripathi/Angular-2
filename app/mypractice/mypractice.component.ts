import {Component}from '@angular/core';
@Component({
    selector:'mypractice',
    template:`<h2>{{title}}</h2>
    <button (click)="onClick(inputDemo.value)">Click Me</button>
    <input type="text" #inputDemo>`
})

export class  mypractice{
    public title="Hello Abhishek in Practice Area";

   

}