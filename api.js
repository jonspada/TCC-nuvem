const lista = document.querySelectorAll("div.list");
const cardlist = lista[0]
console.log(lista,cardlist)

var request = new XMLHttpRequest()
request.open("GET","/sobre.json", false)
request.send(null)
var JSONObject = JSON.parse(request.responseText)

function newCard(value){
   return `
  <article class="slide" id="profile" role="${value.name}">
                <div id="profileimage">
                    <img id="profileimageimg" src="${value.image}"
                        alt="">
                </div>
                <h2 id="profileusername">${value.name}</h2>
                <small id="profileabout">${value.texto}</small>
                <div id="profilelinks">
                    <a href="${value.medias.crv}" target="_blank" class="link link--icon">
                        <img id="profilelinksimage"  src="/assets/curriculo.png" alt="">
                    </a>
                    <a href="${value.medias.git}" target="_blank" class="link link--icon">
                        <img id="profilelinksimage"  src="/assets/git.png" alt="">
                    </a>
                    <a href="${value.medias.linke}" target="_blank" class="link link--icon">
                        <img id="profilelinksimage"  src="/assets/linkedin.png" alt="">
                    </a>
                </div>
            </article>
   `
}

for (var i = 0, n = Object.keys(JSONObject).length; i < n; i++){
   var value = JSONObject[i]
   console.log(value)
   cardlist.innerHTML += newCard(value)
}