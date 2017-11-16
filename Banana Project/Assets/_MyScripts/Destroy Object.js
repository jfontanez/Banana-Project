#pragma strict
 //scrip para destruir un GameObject asignado
 
 var objeto : GameObject ;
     
 function Awake()
 {
    
 }                
 
 
 
 function Update ()
 {
 
     if(objeto.transform.position.y < -7)
     {
     
         Destroy(objeto); 
     }
 
 }
 
 function OnCollisionEnter(collision: Collision)
     
          {

          Destroy(objeto);            // cuando el objeto toque algo se destruye.
          
          }