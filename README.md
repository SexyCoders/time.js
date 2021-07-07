# Time.js

Time.js is a powerful time object library for Javascript.

This library follows the stable branch of our libtime.cc library!  
All changes are made directly to the master branch since debug and dev has been done in the libtime.cc development branches.  

:information_source: This branch, as well as all packages published on npm are stable as far as we know!

## Why?
Time.js is modeled after its older brother, Time.cc, a exact copy of this library but for C/C++.

Time.cc was initially conceived for managing timestamps on web applications, like logs or registration dates.  

### Our focus is <b>storing</b> a time for later use <b>not getting</b> the current time.   
# Features:
This library provides two sets of functions:  
The first set are simple wrapers over the almighty tm struct and simply provide an easier and simpler way to get the current time.  
The second set provides a huge collection of operators and string formaters!!  

This makes it able to:
- get current time using the tm struct
- load time from string (very usefull when working with databases/files)
- store time to string (for later loading)
- print time in any given format (returns string in the requested format)
- compare time objects with each other or with numeric values (returns -1 if lower,0 if equal and 1 if higher)

# Installation

No installation needed, just include the file in your javascript project!

:warning: Please note that the file IS NOT uglyfied! You will have to use your own parser to do that!

# Functions

The library provides three main function types:

## time functions
- getTime -> a very friendly wraper to the Date() object that gets current time and stores it in the Time object
- fromString -> loads a Time object from a string (semicolon seperation OBLIGATORY)

## operators
Time.js provides all mathematical operators and ports them to the Time object.  
You can compare add, substract etc between Time objects freely.  

## formated output functions

The almighty "toStringf" prints anything in any format.  

the formatting is easy: 

### date format accepts following arguments
- d -> day
- m -> month
- y -> year
- l -> long
- s -> short
- delimiter

in the following order 

#### <b>[format][l/s][delimiter]</b> e.g. "mdyl/"  

:warning: format defaults to long and delimiter defaults to "-"
    
### time format argument
- "m" -> military time 
- "c" -> casual time

:information_source: the WEEKDAY flag is used to specify if you wish to have the weeday written in the output

For example 
```c
toStringf("mdyl/","m",1);
```
 will create a string by printing:
- the weekday since we used the flag
- the date in MONTH/DAY/YEAR format 
- the year will be written out since we specified long format ("l option")
- the time in military time (option "m")

# Contributing

This library is considered mature since all the possible features have been covered.  

## BUT

### We will happily accept maintenance merges <b>AND new features</b> if they expand the functionality of the library.  

### We are also looking for translations to other languages (documentation or code)!!  

Please contact us <a href="https://gitlab.com/dianshane">here</a>.
