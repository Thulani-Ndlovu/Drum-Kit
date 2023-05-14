
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
            audio  = new Audio("sounds/kick.mp3");
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
