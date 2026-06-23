 function rockpaper(sci){
            const choice = ["rock","paper","scissor"]
            const random= Math.floor(Math.random() * choice.length)
            const cpuchoice= choice[random]
            return "you picked " + sci + "  but computer picked " + cpuchoice + " haha "


        
        }
let a =rockpaper("rock")
console.log(a);
