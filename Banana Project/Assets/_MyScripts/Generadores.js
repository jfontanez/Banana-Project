#pragma strict
// Genera en 3 posiciones asignadas un objeto aleatoriamente.

//generador crear gameobject
var generador1: Transform;
var generador2: Transform;
var generador3: Transform;
//a se va instanciar
var bananas: Transform;
var bomba : Transform;

private var rnd: int=0;

function Start () {
//repetir la aparicion del objeto una vez cada 0.5 segundos
InvokeRepeating("generando",1,0.3);
}

function generando(){

// aleatoreamente entre el 1 a 2
rnd=Random.Range(1,4);
if(rnd==1)
{
//aparezca en el generador 1
Instantiate(bananas,generador1.transform.position,generador1.transform.rotation);
} 

if(rnd==2)
{
//aparezca en el generador 2
Instantiate(bananas,generador2.transform.position,generador2.transform.rotation);
} 

if(rnd==3)
{
//aparezca en el generador 3
Instantiate(bananas,generador3.transform.position,generador2.transform.rotation);
} 

}