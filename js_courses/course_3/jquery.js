// jquery
$.ajax({
    url:'http://www.omdbapi.com/?apikey=2cf65c41&s=avengers',
    success: data => {
        const mov = data.Search;
        let cards = '';
        mov.forEach(m => {
            cards += ` <div class="col-sm-6">
                            <div class="card">
                            <img src='${m.Poster}' class='card-img-top'>
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h5 class="card-title">${m.Year}</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>`
                    });
                    $('.content-movies').html(cards);
    },

    error:(e)=>{
        console.log(e.responseText)
    }
});