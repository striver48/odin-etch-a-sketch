

const container = document.querySelector(".grid-container");

function createGrid(gridsize){
for(let i = 0; i<(gridsize*gridsize); i++)
{
    const cells = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    cells.style.border = "1px solid orange";
    container.append(cells);
    cells.classList.add("newBox");
}
}

createGrid(16)

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        let playerChoice = button.className;
        console.log(playerChoice)
        if(playerChoice == "rgb")
        {
            rgb();
        }
        else if(playerChoice == "black")
        {
            black();
        }
        else if(playerChoice == "gray")
        {
            gray();
        }
        else if(playerChoice == "reset"){
            reset();
        }
        else{
            reSize();
        }
    })
}) 


function gray()
{
    const cells = document.querySelectorAll('.newBox')
    cells.forEach(newBox => newBox.addEventListener('mouseover',()=>{
    newBox.style.background = "gray";
    }))
}

function black()
{
    const cells = document.querySelectorAll('.newBox')  
    cells.forEach(newBox => newBox.addEventListener('mouseover',()=>{
    newBox.style.background = "black";
    }))    
}
   
function rgb()
{
    const cells = document.querySelectorAll('.newBox') 
    cells.forEach(newBox => newBox.addEventListener('mouseover', ()=>{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    newBox.style.background = `rgb(${r}, ${g}, ${b})`;
    }))   
}

function reset()
{
    const cells = document.querySelectorAll('.newBox')
    cells.forEach(newBox => newBox.remove());
    createGrid(16)
}

function reSize(){
    let size = prompt ("Please Enter your desired grid size")
    if(isNaN(size)){
        alert("PLease enter in digits")
    }
    else if( size <= 1 || size >= 100 ){
        alert("Enter a size range between 1 & 100")
    }
    else{
        reset();
        createGrid(size);
    }
    
}
