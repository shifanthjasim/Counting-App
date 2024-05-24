let docEl = document.getElementById("counter-value")

let count = 0;

function increaseCounter(){
    count = count + 1
    docEl.innerText = count
}

function decreaseCounter(){
    if (count > 0){
        count = count - 1
        docEl.innerText = count
    }
}

