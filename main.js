let i = 0;

while (i < 102) {
  fetch(`https://picsum.photos/400/?random`) 
    .then((res)=> { 
      let image = `<div id="imgs" class="container"><img src="${res.url}"/></div>`; 
      document.getElementById("gallery").innerHTML += image;
    });
  i++;
}