const { createApp } = Vue

let listPicture = [
                {
                    image: './img/01.webp',
                    title: 'Marvel Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]

createApp({
    data(){
        return{
            listPicture: listPicture,
            pictureAddRight: 0,
            
            

        }
    },
    methods: {
            moveLeft() {
        
                const lastIndex = this.listPicture.length - 1
                if (this.pictureAddRight > 0){
                    this.pictureAddRight--
        
                } else {
                    this.pictureAddRight = lastIndex
                }

                console.log('sinistra')
                // let lastIndex = pictureEl.length - 1
            
                // pictureEl[pictureAddRight].classList.remove('active')
            
                // if ( pictureAddRight < lastIndex){
                //     pictureAddRight += 1
                // } else {
                //     pictureAddRight = 0
                // }
            
                // pictureEl[pictureAddRight].classList.add('active')
                // console.log(lastIndex)
        
            },
        
            moveRight() {
        
                const lastIndex = this.listPicture.length - 1
        
                if ( this.pictureAddRight < lastIndex){
                    this.pictureAddRight++
                } else {
                    this.pictureAddRight = 0
                }

                console.log('destra')
                // console.log(pictureAddRight)
                // pictureEl[pictureAddRight].classList.remove('active')
            
                // if (pictureAddRight > 0){
                //     pictureAddRight--
                // } else {
                //     pictureAddRight = pictureEl.length - 1
                // }
                
                // pictureEl[pictureAddRight].classList.add('active')
            }
        
    },

    created() {
        console.log('created')
    },

    beforeCreate( ){
        console.log('beforeCreate: ')
    },

    beforeMount(){
        console.log('beforeMount ')
    },

    mounted() {
        console.log('slide: ', this.listPicture)

        this.autoplay = setInterval(this.moveRight, 2000)
    },
    
    beforeUpdated() {
        console.log('beforeUpdated ')
    },

    updated(){
        console.log('updated ')
    },

    

}).mount('#app')


// const { createApp } = Vue 

// createApp({
//     data() {
//         return {
//             point: 0,
//             bombe[16, 15, 26, 35, 48, 59]
//             latoGriglia: 10,
//             difficolt??: '0', 
//             caselleCliccate: [],
//         },
//     },
// }).mount('#app')


// let win = true 

// let message = ''


// let message = win === true ? 'hai vinto' : 'hai preso'

// function getMessage(condition) {
//     return condition === true ? 'hai vinto' : 'hai perso'

// }

// v-html="element.text" // per scrivere html