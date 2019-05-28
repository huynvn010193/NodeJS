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
}

module.exports = MovieStore;