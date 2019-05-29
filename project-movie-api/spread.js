let a = [1,2,3],
    b = [4,5],
    c = ['number','digit'];

let d = a.slice();
console.log('===============Trước==============');
console.log(a);
console.log(d);

d[0] = -1;
console.log('===============Sau==============');
console.log(a);
console.log(d);

console.log('===============Dùng Concat==============');

//let e = a.concat(b);
let e = [].concat(b,c,a);
e[1] = -2;
console.log(a);
console.log(e);

console.log('===============Dùng Speard==============');
let f = [...a,...b,...[6,7,8],...c];
console.log(a);
console.log(f);

function sum(a, b, c) {
    return a + b + c;
}

console.log('===============Sum thuong==============');
console.log(sum(1,2,3));


console.log('===============Sum ES5==============');
function sumES5() {
    let res = 0;
    for(let i in arguments){
      res += arguments[i];
    }
    return res;
}
console.log(sumES5(1,2,3,5));

console.log('===============Sum ES6==============');
function sumES6() {
	let res = 0;
	for(let i in arguments){
		res += arguments[i];
	}
	return res;
}

let params = [1,2,3,4];

console.log(sumES6(...params));
