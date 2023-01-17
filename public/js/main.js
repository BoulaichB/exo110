// > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

let listItems = document.getElementsByTagName('li');
function sayMyName(li){
    alert(li.innerText);
}
// for(let i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener('click', () =>{
//         sayMyName(listItems[i]);
//     })
// }

// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)
function modifieMyName(li){
    let nouveauNom = prompt("Entrez le contenu du li");
    return nouveauNom;
}
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('dblclick', () =>{
        listItems[i].innerText = modifieMyName(listItems[i]);
    })
}

// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

document.getElementsByTagName('input')[2].addEventListener('click', ()=>{
    let li1 = document.getElementById('li-one').value;
    let li2 = document.getElementById('li-two').value;
    for(let i = 0; i < listItems.length; i++){
        console.log(listItems[i]);
        if(li1 == listItems[i].innerText){
            listItems[i].innerText = li2;
        } else if(li2 == listItems[i].innerText){
            listItems[i].innerText = li1;
        }
    }
})