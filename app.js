const { createApp } = Vue

createApp({
    data(){
        return{
            listPicture: [
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
            ],

            pictureAddRight: 0,
            

            methods: {
                moveLeft() {
                let lastIndex = pictureEl.length - 1
            
                pictureEl[pictureAddRight].classList.remove('active')
            
                if ( pictureAddRight < lastIndex){
                    pictureAddRight += 1
                } else {
                    pictureAddRight = 0
                }
            
                pictureEl[pictureAddRight].classList.add('active')
                console.log(lastIndex)
            
                },

                moveRight() {
                    console.log(pictureAddRight)
                    pictureEl[pictureAddRight].classList.remove('active')
                
                    if (pictureAddRight > 0){
                        pictureAddRight--
                    } else {
                        pictureAddRight = pictureEl.length - 1
                    }
                    
                    pictureEl[pictureAddRight].classList.add('active')
                },

            },

        }
    }
}).mount('#app')