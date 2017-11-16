var velocidad : float = 0;

function Start()
{
    GetComponent.<Rigidbody>().velocity.y =  velocidad;
}