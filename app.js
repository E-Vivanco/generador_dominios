let generaDominio = () => {
    let pronoun = ["the", "our", "meat", "floor", "pencil"];
  let adj = ["great", "big", "small", "fast", "flash"];
  let noun = ["jogger", "racoon", "geen", "red", "blue"];
  let exten = [".com", ".es", ".info", ".cl", ".org", ".net"];
  
  let uno = parseInt(Math.floor(Math.random() * pronoun.length));
  let dos = parseInt(Math.floor(Math.random() * adj.length));
  let tres = parseInt(Math.floor(Math.random() * noun.length));
  let cuatro = parseInt(Math.floor(Math.random() * exten.length));
  return pronoun[uno] + adj[dos] + noun[tres] + exten[cuatro];
};

  window.onload = function() {
    document.querySelector("#btn").addEventListener("click", () => {
      document.querySelector("#My-resp").innerHTML = generaDominio();
    });
  };
  //console.log("Hello Rigo from the console!");

