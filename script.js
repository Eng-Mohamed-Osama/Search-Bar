let data = document.getElementById("Dt");
let liData = document.getElementsByTagName("li");
var theArray = [];
for(var i=0;i < liData.length; i++) {
    var arrValue = liData[i].textContent;
    theArray.push(arrValue);
}
console.log(theArray)
let search = function (){
    let inputVal = document.getElementById("Searchinput").value.toLowerCase();
    console.log(inputVal);
    for(i=0;i<theArray.length;i++){
        if(theArray[i].toLowerCase().indexOf(inputVal) > -1 && inputVal != "" ){
          liData[i].style.display="block";
        }else{
            liData[i].style.display="none";
        }
    }
}
