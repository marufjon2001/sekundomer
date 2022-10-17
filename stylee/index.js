let hour_pilus = document.querySelector("#hour_pilus")
let hour_minus = document.querySelector("#hour_minus")
let minute_pilus = document.querySelector("#minute_pilus")
let minute_minus = document.querySelector("#minute_minus")
let second_pilus = document.querySelector("#second_pilus")
let second_minus = document.querySelector("#second_minus")

let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")





hour_pilus. addEventListener('click',(e)=>{
    let hour = document.querySelector("#hour")
    hour.innerHTML = +hour.innerHTML +1
})
hour_minus. addEventListener('click',(e)=>{
    let hour = document.querySelector("#hour")
    hour.innerHTML = +hour.innerHTML -1
})

minute_pilus.addEventListener('click',(e)=>{
    let minut = document.querySelector("#minut")
    minut.innerHTML = +minut.innerHTML +1
})
minute_minus.addEventListener('click',(e)=>{
    let minut = document.querySelector("#minut")
    minut.innerHTML = +minut.innerHTML -1
})
second_pilus.addEventListener('click',(e)=>{
    let  second = document.querySelector("#second")
    second.innerHTML = + second.innerHTML +1
})
second_minus.addEventListener('click',(e)=>{
    let  second = document.querySelector("#second")
    second.innerHTML = + second.innerHTML -1
})

reset.addEventListener("click",(e) =>{
        let hour = document.querySelector("#hour")
        let minut = document.querySelector("#minut")
        let  second = document.querySelector("#second")
        hour.innerHTML = 0
        minut.innerHTML = 0
        second.innerHTML = 0
    })

    // start.addEventListener("click",(e)=>{
    //     let start = setInterval(() =>{
    //       second ++
    //     },1000)
    // })
start.addEventListener('click',()=>{
    second_pilus.innerHTML ++
})

