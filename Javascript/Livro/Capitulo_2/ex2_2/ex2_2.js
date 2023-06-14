const form = document.querySelector("form");
const Movie= document.querySelector("h3");
const duration = document.querySelector("h4");



form.addEventListener("submit", (e)=>{
  const movieName=form.inTitulo.value; //obtem conteudo dos campos 
  const movieMin = Number(form.inDuration.value);

  const horas = Math.floor(60/movieMin);
  const minutos = 60%movieMin;

  Movie.innerText = movieName;
  duration.innerText = `${horas} horas e ${minutos} minutos`;

  e.preventDefault();

})