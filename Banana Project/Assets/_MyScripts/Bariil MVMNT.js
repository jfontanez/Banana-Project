#pragma strict
// este script es para mover el objeto derecha y izquierda dependiendo el valor.
var player : GameObject;
var banana : GameObject;

function Start () 
{



}

function Update () {



if(Input.GetKey("left")){
player.transform.position.x = -2;
}

if(!Input.GetKey("left")){
player.transform.position.x = 0;
}


if(Input.GetKey("right")){
player.transform.position.x = 2;
}
}