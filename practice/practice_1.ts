/*
공백으로 표시 된 것은 실행이 되지 않는다.

*/

let count =0;
count += 1;
// count ='d?';
const done : boolean = true
const numbers : number[] = [1,2,3];
const messages: string[] = ['hello' ,'world'];

// messages.push(1);

let mightBeUndefined : string | undefined = undefined; // String 아니면 un
let nullableNumber: number | null = null;

let color : 'red' | 'orange' | 'yellow' = 'red';  // red, orange, yellow 중 하나임
color = 'yellow';
//color = 'green'; // 에러 발생!