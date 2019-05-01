var input = document.getElementById('submit');

var currentUrl = document.URL;

function getResults() {

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
var query = prompt("Movie/series name?")

request.open('GET', 'https://api.themoviedb.org/3/search/multi?api_key=bc61dce55242b247bc2d74102f24c074&language=en-US&query=' + query + '&page=1&include_adult=false', true)
request.onload = function() {

  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.innerHTML = movie.title + movie.name

      const p = document.createElement('p')
      p.innerHTML = 'Release date: ' + `${movie.release_date}` + `${movie.first_air_date}` + '<br>' + 'Type: ' + `${movie.media_type} ` + '<br>' + 'TMDb Score: ' + `${movie.vote_average}`

      const i = document.createElement('img')
      i.setAttribute('src', 'http://image.tmdb.org/t/p/w342/' + `${movie.poster_path}`)

      const h4 = document.createElement('h4')
      h4.innerHTML = movie.overview

      const a = document.createElement('a')
      a.setAttribute('href', 'https://www.themoviedb.org/' + `${movie.media_type}` + '/' + `${movie.id}`)
      a.innerHTML = 'TMDb Link'

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(i)
      card.appendChild(h4)
      card.appendChild(a)

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Encountered an error!!`
    app.appendChild(errorMessage)
  }
}

request.send();
