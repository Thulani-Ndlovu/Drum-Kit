
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let audio;
        if (i === 0)
        {
            document.querySelectorAll(".drum")[i].style.color = "white";
            audio  = new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if (i >= 1 && i <= 4)
        {
            document.querySelectorAll(".drum")[i].style.color = "white";
            audio  = new Audio("sounds/tom-" + i + ".mp3");
            audio.play();
        }
        else if (i === 5)
        {
            document.querySelectorAll(".drum")[i].style.color = "white";
            audio  = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        else if (i === 6)
        {
            document.querySelectorAll(".drum")[i].style.color = "white";
            audio  = new Audio("sounds/snare.mp3");
            audio.play();
        }


    })
    
}
document.addEventListener("keydown", function (event){

    switch(event.key)
    {
        case 'w':
            audio  = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'a':
            audio  = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case 's':
            audio  = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 'd':
            audio  = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case 'j':
            audio  = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case 'k':
            audio  = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case 'l':
            audio  = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
    }
})
