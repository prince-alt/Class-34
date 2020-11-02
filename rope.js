class rope {

constructor (bodyA,pointB){

var options = {

bodyA : bodyA,
pointB : pointB,
length : 250,
stiffness : 1.2

}

this.pointB = pointB;
 this.chain = Constraint.create(options);
 World.add(world,this.chain);

}

attach(body){

this.chain.bodyA = body;

}

fly(){

this.chain.bodyA = null;

}

display(){

if(this.chain.bodyA){ 

push ();    
strokeWeight(7);
line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
pop ();

}
}




}