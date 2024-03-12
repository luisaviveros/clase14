const ensalada = ["lechuga", "tomate", "pepino"];
console.log(ensalada);

ensalada.push("zanahoria");
console.log(ensalada);

const primerelemento = ensalada [0];
console.log(primerelemento);

console.log(ensalada.length);
//para saber cuantos elementos hay


let nombresdelaensalada = "";
for(const verdura of ensalada){
  nombresdelaensalada += verdura + " ";
    console.log(verdura);
}

console.log(nombresdelaensalada);

for (let i = 0; i < ensalada.length; i++){
  const verdura = ensalada[i];
    console.log(verdura);
}

const parrafo = document.querySelector("#parrafo");
console.log(parrafo); 
parrafo.innerHTML = "<strong>" + nombresdelaensalada + "</strong>";

parrafo.classList.add("Parrafo--verde");
parrafo.classList.add("Parrafo--titulo");