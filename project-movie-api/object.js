let old_movie = { title: 'Old movie' };
let new_movie = old_movie;

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(new_movie));

new_movie.title = "New Movie"; // dấu bằng mang tính chất là tham chiếu => nghĩa là 2 giá trị cùng trỏ vào 1 ô nhớ =>giống nhau.

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(new_movie));

let other_movie = Object.assign({},old_movie);

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(other_movie));

other_movie.title = "Other Movie";

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(other_movie));
