function Collision(Bullet, Wall){
    bulletRightEdge = Bullet.x + Bullet.width;
    wallLeftEdge = Wall.x;
    if(bulletRightEdge >= wallLeftEdge){
        return true;
    }else {
        return false;
    }   
}