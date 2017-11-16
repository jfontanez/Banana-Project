#pragma strict
var enemy          : GameObject;
var spawnTime      : float = 0.0f;
var turnOffUpdate1 : boolean = false;
var maxTime        : float = 500.0f;

   function Update() {
      if (spawnTime >= 0.5f && !turnOffUpdate1) {
         Spawn();
         turnOffUpdate1 = true;
      }
      if (spawnTime >= 1.0) { 
        Spawn();
        turnOffUpdate1 = false;
        spawnTime = 0.0f;
      }
      spawnTime += Time.deltaTime; 
     }
     

function Spawn () {                                            //duplicar objeto
Instantiate(enemy, transform.position, transform.rotation);
}