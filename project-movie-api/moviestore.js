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
}

module.exports = MovieStore;