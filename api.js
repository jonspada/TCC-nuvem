const lista = document.querySelectorAll("div.list");
const cardlist = lista[0]
console.log(lista,cardlist)

var request = new XMLHttpRequest()
request.open("GET","/sobre.json", false)
request.send(null)
var JSONObject = JSON.parse(request.responseText)

function newCard(value){
   return `
   <div class="slide" id="profilecard" role="${value.name}">
   <img id="imagecard" src="${value.image}" alt="">
   <h2 id="namecard">${value.name}</h2>
   <div id="textcard">
       <p>${value.texto}</p>
   </div>
   <div id="buttonscard">
       <a id="button-rede" class="link-linke" target="_blank" href="${value.crv}">
           <img id="img-rede" src="assets/curriculo.png" alt="logo do LinkedIn">
       </a>
       <a id="button-rede" class="link-linke" target="_blank" href="${value.medias.linke}">
           <img id="img-rede" src="assets/linkedin.png" alt="logo do LinkedIn">
       </a>
       <a id="button-rede" class="link-git" target="_blank" href="${value.medias.git}">
           <img disabled id="img-rede" src="assets/git.png" alt="logo do GitHub">
       </a>
   </div>
</div>
   `
}

for (var i = 0, n = Object.keys(JSONObject).length; i < n; i++){
   var value = JSONObject[i]
   console.log(value)
   cardlist.innerHTML += newCard(value)
}