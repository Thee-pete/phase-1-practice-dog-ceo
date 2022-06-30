console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
  
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then((resp) => resp.json())
      .then((dogs) => {
        const container = document.querySelector("#dog-image-container");
        dogs.message.forEach((dog) => {
          let img = document.createElement("img");
          img.src = dog;
          container.appendChild(img);
        });
      });
  
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        let breeds = document.querySelector("#dog-breeds");
        Object.keys(data.message).forEach((breed) => {
          let list = document.createElement("li");
          list.innerText = breed;
          breeds.appendChild(list);
        });
        document
          .querySelector("#breed-dropdown")
          .addEventListener("change", (e) => {
            let selectOption = e.target.value;
            document.querySelectorAll("li").forEach((list) => {
              list.style.display = "block";
              if (list.innerText[0] !== selectOption) {
                list.style.display = "none";
              }
            });
          });
        document.querySelectorAll("li").forEach((list) => {
          list.addEventListener("click", () => {
            console.log(list.innerText);
            list.style.color = "green";
          });
        });
      });
  });
