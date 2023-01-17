/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people 
that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

export function likes(names:string[] | null[]) {
    if(!Array.isArray(names)) throw new Error('Invalid names list')
    if(names.length === 0) return "no one likes this"
    if(names.length === 1) return `${names[0]} likes this`
    if(names.length === 2) return `${names[0]} and ${names[1]} like this`
    if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`
  }

/*
PEDAC
---------------------
(P)roblem
---------------------
Input:  An a array of names
Output: A string with a message of either `${name} likes this` etc or 'no one likes this' 
        if the array of names are empty

Understanding: Display a message corasponding to the names (if any) that are in the given names array.
               if there are no names return "no one likes this"
               if there are one return `${name} likes this`
               if there are two return `${name1} and ${name2} like this`
               if there are three return `${name1},${name2} and ${name3} like this`
               if there are more than three return `${name1}, ${name2} and ${number of other likes} others like this`
*/