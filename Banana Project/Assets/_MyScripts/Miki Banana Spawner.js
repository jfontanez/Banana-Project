#pragma strict

var item : GameObject;
var secondsBetween: float = 2;
var trackTimer : float;

function Start () {

}

function Update () 
{
	trackTimer -= Time.deltaTime;
	if (trackTimer <=0)
	{
		Instantiate (item, transform.position, transform.rotation);
		trackTimer = secondsBetween;
	}
	
}