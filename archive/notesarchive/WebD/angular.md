# Angular: the big picture

## Introduction

Invented by Misko Hevery

AngularJS - Angular 1.x
Angular - Angular 2.0,4+, new version every 6 months
ng update: tool created by angular team to update your code
ngUpgrade: Library that helps to upgrade from AngularJs to Angular, a file at a time without breaking anything or having 2 copies of same file

## Benefits & Features

- Reduction of Cost ( built in Router,http,forms,rxjs)
- Standards Compliance(ES6, Modules, Internationalization & Accessibility)
- Performance
- Open Source
- Uses Typescript
- Others: PWAs, Lazy loading, Forms, RXJS, Router, Animations, Server-Side Rendering & Mobile, Angular Language Service

## Angular Architecture

### One Way Data Flow 
Related to change detection, if parent component state is changed
, change detection cycle begins.

### Dependency Injection
Telling which dependency to inject
export class AddNewTagComponent {
    constructor(private articleSvc: ArticleService){}
}

### Components
--

### Directives
Add new capabilities to elements. 

### Templates
--

### Change Detection: Zone.js
Zone creates a wrapper around all asynchronous behaviour in browser,
it sends notification to Angular which in turn does all changes and cascading changes and re-renders

### Rendering Targets
Can render to any no. of devices(Browser, Server-Side, Native Mobile Apps, Native Desktop Apps) by changing the rendering engine


## Tooling

### Angular CLI
For setting up a typical appln we typically need - Module handling, bundling, minifying, transpiling and much more
Angular CLI is answer to this, it does everything for us and we are saved from JS fatigue.

CLI capabilities - 
Create new appln, New component/service, serving appln, linting, testing, building

### Server side Rendering
Benefits like - 
Performance(initial download size, render time)
SEO

### Mobile/Native frameworks
Mobile - Ionic
Desktop - Electron

### Testing tools
Jest, Cypress.io
Testing utilities(TestBed, Async & fakeAsync, MockBackend)

### AOT Compilers
Earlier used to send compiler to browser but now with AOT, no need


---

# Angular: Getting Started

## Intro

Angular Appln is made of Template + Class + Metadata

