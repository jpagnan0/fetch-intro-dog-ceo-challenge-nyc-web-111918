document.addEventListener('DOMContentLoaded', function (e) {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const imageContainer = document.querySelector('#dog-image-container');
  const dogBreeds = document.querySelector("#dog-breeds");

  fetch(imgUrl)
  .then(response => response.json())
  .then((data) => {
    return data.message.map((img) => {
      return imageContainer.innerHTML += `<img src="${img}" />`
    });
  });

  fetch(breedUrl)
  .then(response => response.json())
  .then((dogBreed) => {
    // console.log(dogBreed.message)
    return Object.keys(dogBreed.message).map((breed) => {
      return dogBreeds.innerHTML += `<li><font color="black">${breed}</font></li>`
    });
  });

  dogBreeds.addEventListener('click', (e) => {
    // e.target.color = 'black'
     console.log(e.target.color)

    if(e.target.color === 'black')
    {
      e.target.color = 'red'
      console.log(e.target.color)
    }
    else {
      e.target.color = 'black'
    }
  });

});
