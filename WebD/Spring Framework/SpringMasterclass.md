# Introduction

## Purpose of spring - A DI framework
We can tell spring to manage instances of some Class(using @Component) & manage dependencies(using @Autowired)

Beans - Objects managed by spring framework.
Autowiring - Populating right dependency
DI - Injecting dependencies(so that system remains loosely coupled)
IOC - Instead of class creating instance of some dependency, spring framework is doing that for you.

## Eclipse/Maven Productivity - 
Ctrl + Space : Suggestions
               main,fore,sysout
Alt + Shift + X, J : Run a class
Ctrl + Shift + L : All shortcuts
Ctrl + Shift + R : Search files
Ctrl + Shift + T : Search classes(Hashmap etc)
fn + f3 : Move cursor to a class(suppose hashmap) & look at its code.
fn + f4 : Look at type hierarchy of class
Ctrl + Shift + F : Beautify
Ctrl + Shift + O : Organize imports
Alt + Shift + S : Generate code

Views - Different windows like problems,exporer,outline
Perspective - How whole screen is arranged
Save Actions - Things that happen on saving

Run as Maven build in Eclipse - 
    mvn clean install : Runs maven life cycle
    mvn compile : compiles source files
    mvn test-compile : compiles source and test files
    mvn test : runs unit tests
    mvn package : Creates jar 
    mvn deploy : Deploy



