const diceOneElement = document.getElementById('dice1');
const diceTwoElement = document.getElementById('dice2');

/*
Rotations:
X - 0 Deg, Y - 0 Deg: 1
X - 90 Deg, Y - 0 Deg: 5
X - 180 Deg, Y - 0 Deg: 2
X - 270 Deg, Y - 0 Deg: 4
X - 0 Deg, Y - 90 Deg: 3
X - 0 Deg, Y - -90 Deg: 6
*/

function rollDice()
{
    var xRotation = (Math.floor((Math.random() * 5)) * 90); 
    var yRotation = (Math.floor((Math.random() * 3) - 1) * 90);

    var xRotation2 = (Math.floor((Math.random() * 5)) * 90); 
    var yRotation2 = (Math.floor((Math.random() * 3) - 1) * 90);

    document.getElementById('dice1').style.transform = "rotateX( " + xRotation + "deg) rotateY(" + yRotation + "deg)";
    document.getElementById('dice2').style.transform = "rotateX( " + xRotation2 + "deg) rotateY(" + yRotation2 + "deg)";



}