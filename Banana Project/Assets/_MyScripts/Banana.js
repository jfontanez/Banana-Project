#pragma strict

var moveSpeed : float = 8;
var killZPosition : float = -6;
var horizontalRandom : float = 6;
var explosion : GameObject;

function Start () 
{
	transform.position.x += Random.Range (horizontalRandom, -horizontalRandom);
}

function Update () 
{
	transform.position.z -= moveSpeed *Time.deltaTime;
	if (transform.position.z <= killZPosition)
		Destroy (gameObject);
}

function OnTriggerEnter (other: Collider)

{
	if (other.tag == "Banana1")
	{
		Instantiate (explosion, transform. position, transform.rotation);
		Destroy (gameObject);

	}
}