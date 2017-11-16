#pragma strict
static var dscore : int = 0;
var barril        : GameObject;
var guiScore      : GUIText;

 
 
function Start () {

guiScore.text = "Banana: 0";

}

function Update () {

 
}

function OnCollisionEnter (col : Collision){

if(col.collider.name== "Bananas1(Clone)" ){
  
   dscore += 1;
   guiScore.text = "Banana: " + dscore ;
 } 

}