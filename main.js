// const nav = document.querySelector('.navigation')

// console.log(nav)

// const logo = document.querySelector('.logo')

// console.log(logo)

// const image = document.getElementById('image1')
// console.log(image)

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', onClick)


// function onClick(e){
//     e.preventDefault()
//    const grid = document.querySelector('.grid')

//    grid.firstElementChild.remove()
// }

// btn.addEventListener('click', clicked)

// function clicked(e){
//     e.preventDefault()
//     const grid=document.querySelector('.grid'),
//         header = document.querySelector('.header')
//     setTimeout(()=>{
//         grid.firstElementChild.nextElementSibling.remove()
//     },5000)

// }

// const btn=document.querySelector('.btn')

// btn.addEventListener('mouseenter',obj)

// function obj(e){
//     e.preventDefault()
//     const grid= document.querySelector('.grid')
//     grid.firstElementChild.innerHTML="Hello"
// }

// const grid=document.querySelector('.grid')

// grid.addEventListener('mouseenter',function(e){
//     e.preventDefault()
//     grid.firstElementChild.style.backgroundColor='grey'

// })

// const cards=document.querySelectorAll('.card')

// cards.forEach(card=>{
//     card.addEventListener('mouseenter',function(e){
//         card.style.backgroundColor='blue'
//     })
// })

// console.log(cards)


const form=document.getElementById('form')
const name=document.getElementById('name')
const submit=document.getElementById('submit')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nameVal = name.value

    // create li

  if (name.value===""){
      name.style.backgroundColor="red"
  }
  else{
    const ul=document.createElement('ul')
    ul.className ='menu'
 
    const li=document.createElement('li')
    li.className='collection-item'
   li.appendChild(document.createTextNode(nameVal))
    ul.appendChild(li)
 
   const parent = document.querySelector('.parent')
   const before = document.querySelector('.before')
 
   parent.insertBefore( ul, before)
 
   name.value=null
   name.style.backgroundColor="white"
  }
})