fetch("https://imdb8.p.rapidapi.com/auto-complete?q=spiderman", {
    "method": "GET",
	"headers": {
		"X-RapidAPI-Key": "YOUR_API_KEY",
		"X-RapidAPI-Host": "imdb8.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    //console.log(data);
    const arraySpiderMovies = data.d;
    arraySpiderMovies.map((element) => {
        //console.log(element);

        const title = element.l;
        const type = element.qid;
        const rating = element.rank;
        const cast = element.s;
        //const image = element.i.imageUrl;

        const generateCard = `
            <div class="card">
                <h3>${title}</h3><br>
                <p>${type}</p><br>
                <span>${rating}</span><br>
                <small>${cast}</small>
            </div>
            `;

        document.getElementById('container').innerHTML += generateCard;
    });
})
.catch(err => {
    console.error(err);
});