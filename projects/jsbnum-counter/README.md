# JSBNumberCounter

* A simple Number Counter Commponent to be used with Angular.
* It is developed using `Angular >=8.0.0` and its newly introduced `ng g library` schematics.
* This library is part of JSBNumberCounter project and it is generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.
* Library location: `projects/jsbnum-counter` directory of this repository.

## Examples/Demo

* A simple Example can be found under `src/app` directory of this repository.

## Installation

`npm i jsbnum-counter`

## API

`import { JSBNumCounterModule } from 'jsbnum-counter'`<br>
`selector: JSBNumCounter`

### @Inputs()

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| NumberData       | string  | **YES**                    | the Number Data to be disaplayed.                                                                         |


## Usage

1) Register the `JSBNumCounterModule` in your app module.
 > `import { JSBNumCounterModule } from 'jsbnum-counter'`

 ```typescript
 import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JSBNumCounterModule } from 'jsbnum-counter'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    JSBNumCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

 2) Use the selector `(JSBNumCounter)` in your component.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';
@Component({
  selector: 'mat-ta-root',
  template: `<JSBNumCounter [NumberData]='NumberData'></JSBNumCounter>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ///
}
```
![Screenshot](screenshot.png)

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the JSBNumCounter module

Run `ng build JSBNumCounter` to build the library. The build artifacts will be stored in the `dist/jsbnum-counter` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test JSBNumCounter` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Credits

This project is based on [JSBNumCounter](https://github.com/JSBDev/JSB-NumberCounter). Also want to thanks entire [Angular](https://angular.io) team for creating this awesome framework.