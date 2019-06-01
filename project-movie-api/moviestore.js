class MovieStore{
	constructor(){
		// Lưu tất cả thông tin vào biến movieData
		this.movieData = require('./datastore.json');
	}

	all(){
		return this.movieData;
	}

	find(title){
		return this.movieData.filter(m => m.Title === title);
	}

	add(movie) {
		this.movieData.push(movie);
	}

	has(title) {
		let foundMovie = this.find(title);
		return foundMovie.length > 0;
	}

	update(title,newInfo) {
		// Kiểm tra movie với title có tồn tại ko ?
		// nếu 0 => return false
		let movies = this.find(title);

		if(movies.length < 1) {
			return false;
		}
		// Nếu có title thì copy những thông tin từ newInfo vào item có title dc tìm thấy.
		let oldMovie = movies.pop();
		let newMovie = Object.assign(oldMovie,newInfo);
		
		// Tạo ra mảng mới gồm những movie có title ko giống title đã truyền vào
		let oldMovieList = this.movieData.filter(m => m.Title !== title);

		// Thêm title đã update vào mảng movieData
		this.movieData = [...oldMovieList,newMovie];

		return true;
	}

	remove(title) {
		this.movieData = this.movieData.filter(m => m.Title != title);

		return true;
	}
}

module.exports = MovieStore;