const num = document.querySelector('#number')
const del = document.querySelector('#del')


function setNumValue(num1) {
    num.value += num1
    del.style.display = 'block'
}

function clearNumVal() {
    num.value = ''

}

del.addEventListener('click', () => {
    let val = num.value
    val = val.slice(0,1)
})

function calcVal() {
    const val = num.value
    console.log(val)
    const calc = eval(val)
    num.value = calc
}

