let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increase(){
    count += 1
    countEl.textContent = count
}

function decrease(){
    if (count>0){
        count -=1
        countEl.textContent = count
    }
}

function save(){
if(count!=0)
{
    let countStr = count + " - "
    
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
}
