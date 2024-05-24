class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");
        this.load.atlas("LetterFrames", "Letter.png", "Letter.json");

        //console.log("attempting plugin");
        //add animation plugin
        //this.load.scenePlugin('AnimatedTiles', './lib/AnimatedTiles.js', 'animatedTiles', 'animatedTiles');
        //console.log("attempted plugin");

        //particle effects
        this.load.multiatlas("kenny-particles", "kenny-particles.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "tilemap_packed.png");                         // Packed tilemap
        this.load.image("moon_tiles", "Moon v2.png");                         // Packed tilemap
        this.load.image("background_tiles", "bg-tiles.png");                         // Packed tilemap
        this.load.tilemapTiledJSON("platformer-level-1", "platformer-level-1.tmj");   // Tilemap in JSON
        this.load.tilemapTiledJSON("title-screen-level", "title-screen-level.tmj");   // Tilemap in JSON
    }

    create() {
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_characters', {
                prefix: "tile_",
                start: 0,
                end: 1,
                suffix: ".png",
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0000.png" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0001.png" }
            ],
        });

        //I guessed how to do like 90% of this and it seems to have somehow worked.
        this.anims.create({
            key: 'letter',
            defaultTextureKey: "LetterFrames",
            frames: [
                { frame: "tile_1.png" },
                { frame: "tile_2.png" },
                { frame: "tile_3.png" },
                { frame: "tile_4.png" }
            ],
            frameRate: 4,
            repeat: -1
        })

         // ...and pass to the next Scene
         this.scene.start("titleScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}