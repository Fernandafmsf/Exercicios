const form = document.querySelector("form");
const resp1= document.querySelector(".outHora");

form.addEventListener("submit", (e)=>{

  const horaBrasil = Number(form.inHoraBrasil.value);

  let horaFranca= horaBrasil+5;

  if(horaFranca>=24){
    horaFranca = horaFranca - 24;
  }
  
/*Operador ternario
  const hora = horaFranca>=24 ? horaFranca-24:horaFranca+5;
*/
  resp1.innerText = `Hora na França: ${horaFranca. toFixed(2)} horas`;

  e.preventDefault();
})