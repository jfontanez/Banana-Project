
private var speed : float = 0.5f;


function Start () {
}


function Update () {
}

function OnCollisionEnter(collision: Collision){

GetComponent.<Renderer>().enabled = false;                           // el mesh del player desaparece
GetComponent.<Collider>().enabled = false;

}