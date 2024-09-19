function register(event){
  const inputMobNo = document.querySelector("#no");
  const mobNo = inputMobNo.value;
  var container = document.querySelector("#mobno");
    if(mobNo){
        console.log("the mobNo is :"+mobNo);
       container.querySelectorAll("*").forEach((element) => {
         element.style.display = "none";
       });
    }
}