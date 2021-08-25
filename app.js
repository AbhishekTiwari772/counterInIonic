let count = document.getElementById('count')
const addBtn = document.getElementById('+1')
const subBtn = document.getElementById('-1')


function funcAdd() {
    const newCount = parseInt(count.innerText) + 1
    count.innerText = newCount
}
function funcSub() {
    if (parseInt(count.innerText) !== 0){
    const newCount = parseInt(count.innerText) - 1
    count.innerText = newCount
    }
}

addBtn.addEventListener('click', funcAdd)
subBtn.addEventListener('click', funcSub)