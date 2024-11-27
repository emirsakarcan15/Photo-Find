let ara_butonu = document.getElementById("ara-butonu");
let sil_butonu = document.getElementById("sil-butonu");
let input_tag = document.getElementById("input");
let photo_list = document.querySelector(".resim-listesi");


events()


function events(){
    ara_butonu.addEventListener("click", search)
    sil_butonu.addEventListener("click", clear)
}

async function search(){
    let input = input_tag.value.trim();

    let res = await fetch(`https://api.unsplash.com/search/photos?query=${input}`, {
        method : "GET",
        headers : {
            Authorization : "Client-ID wu-BybYynU3bEkc8_FY-F37WeuPepWSYyR70RH5YbBE"
        }
    })
    let data = await res.json();
    addUX(data);
}

function addUX(data){
    for (let image = 0; image < data.results.length; image++){
        let img = document.createElement("img");

        img.src = data.results[image].urls.small; 
        img.className = "photo";
        img.alt = "img";
        img.height = "400";
        img.weight = "400";

        photo_list.appendChild(img);
    }
}

function clear(){
    let photos_length = photo_list.children.length;

    while (photos_length > 0){
        photos_length = photos_length - 1;
        photo_list.children[photos_length].remove();
    }

    input_tag.value = "";
}