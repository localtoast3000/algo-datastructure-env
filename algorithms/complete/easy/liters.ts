/*
Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return 
the number of litres Nathan will drink, rounded to the smallest value.

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

const litres = (t: number) => ~~(t / 2);

console.log(litres(6.7));
