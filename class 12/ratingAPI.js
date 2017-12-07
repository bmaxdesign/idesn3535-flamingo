const binId = "tdmlb";

function getRatings() {
	let ratings;
	$.ajax({
		url: "https://api.myjson.com/bins/"+binId,
		async: false,
		success: function(data){
			ratings = data;
		}
	});
	return ratings;
}

function addRating(rating) {
	const newRatings = this.getRatings();
	newRatings.ratings.push(rating);

	$.ajax({
	    url:"https://api.myjson.com/bins/tdmlb",
	    type:"PUT",
	    data:JSON.stringify(newRatings),
	    contentType:"application/json; charset=utf-8",
	    dataType:"json",
	    async: false,
	    success: function(data, textStatus, jqXHR){

	    }
	}); 

}