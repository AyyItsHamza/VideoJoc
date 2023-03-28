class gameState extends Phaser.Scene{
    constructor(){
        //crear escena
        super({key: "gameState"});
    }
    preload(){
        //cargamos assets
        this.cameras.main.setBackgroundColor("#00F");
        this.load.image('backG','assets/images/bg.jpg');
        this.load.image('bird','assets/images/bird.png');
    }
    create(){
        //pintar assets
        //this.add.image(0,0,'backG').setOrigin(0,0);
        //this.add.image(config.width/2,config.height/2,'backG');
        this.bg = this.add.tileSprite(0,0,config.width,config.height,'backG').setOrigin(0,0);
        this.pajaro = this.add.sprite(config.width/2,config.height/2,'bird').setOrigin(0,0);
        this.pajaro.setFlipX(true)

        this.key_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.cursores = this.input.keyboard.createCursorKeys();
        
    }
    update(){
        //actualizar assets
        this.bg.tilePositionX += 1;
        if (this.cursores.right.isDown){
            this.pajaro.x += 1
        }if (this.cursores.left.isDown){
            this.pajaro.x -= 1
        }if (this.cursores.up.isDown){
            this.pajaro.y -= 1
        }if (this.cursores.down.isDown){
            this.pajaro.y += 1
        }
        
    }
}