document.addEventListener('DOMContentLoaded', function (e) {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const imageContainer = document.querySelector('#dog-image-container');
  const dogBreeds = document.querySelector("#dog-breeds");
  const breedDropDown = document.querySelector('#breed-dropdown');

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

  breedDropDown.addEventListener('change', (e) => {

    // let allDogBreeds = Array.from(document.querySelectorAll("#dog-breeds li"));
    fetch(breedUrl)
    .then(response => response.json())
    .then((dogBreed) => {
      let allBreedNames = Object.keys(dogBreed.message).map((breed) => {
          return breed
      });
      let filteredDogs = allBreedNames.filter((dogBreed) => {
          return dogBreed.charAt(0).includes(e.target.value)
      })
      let dogs = filteredDogs.map((dog) => {
        return `<li><font color="black">${dog}</font></li>`
      }).join('')
        dogBreeds.innerHTML = dogs;
        console.log(dogs)
        console.log(filteredDogs)
        console.log(e.target.value)
    });





  });

});
