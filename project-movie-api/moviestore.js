class MovieStore{
	constructor(){
		// Lưu tất cả thông tin vào biến movieData
		this.movieData = require('./datastore.json');
	}

	all(){
		return this.movieData;
	}
}

module.exports = MovieStore;