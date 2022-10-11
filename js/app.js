//defining the elements i will use
const pixelsDiv = document.querySelector("#pixels");
const submit = document.querySelector("button");
const pixels = document.querySelector("#pixels");

//creating the height and width of the table
submit.addEventListener("click",addDivs);
function addDivs(e){
pixelsDiv.innerHTML = "";
const height = document.querySelector("#height").value;
const width = document.querySelector("#width").value;
for(let rowI=0;rowI<height;rowI++){
   const row =  document.createElement("tr");
   pixelsDiv.appendChild(row);
   for(let colI=0;colI<width;colI++){
    const col = document.createElement("td");
    row.appendChild(col);
   }
}
}

//changing color of the cell when clicking on it 
pixels.addEventListener("click",colorChange);
function colorChange(event){
    const color = document.querySelector("#color").value;
    const target = event.target;
    target.style.backgroundColor = color;
    //putting this line because if we miss clicked on the whole table it wont change its color 
    pixels.style.backgroundColor = "white";
    console.log(target);
}