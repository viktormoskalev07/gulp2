 //dropdown

 function dropdown() {
    const drop = document.querySelector(".dropdown__activator");
    drop.addEventListener("click", function () {
      drop.classList.toggle("dropdown_open");
    });
  }
  
  try {
    dropdown();
  } catch (e) {
    console.log(e);
  }
  //dropdown