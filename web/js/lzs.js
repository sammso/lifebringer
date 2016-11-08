/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.4.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2016
 * @license MIT
 */
!function(t){"use strict";function r(t){if(t)c[0]=c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0,this.blocks=c,this.buffer8=i;else if(n){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r),this.blocks=new Uint32Array(r)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=0,this.finalized=this.hashed=!1,this.first=!0}var e="object"==typeof process&&process.versions&&process.versions.node;e&&(t=global);var i,h=!t.JS_MD5_TEST&&"object"==typeof module&&module.exports,s="function"==typeof define&&define.amd,n=!t.JS_MD5_TEST&&"undefined"!=typeof ArrayBuffer,f="0123456789abcdef".split(""),a=[128,32768,8388608,-2147483648],o=[0,8,16,24],u=["hex","array","digest","buffer","arrayBuffer"],c=[];if(n){var p=new ArrayBuffer(68);i=new Uint8Array(p),c=new Uint32Array(p)}var y=function(t){return function(e){return new r(!0).update(e)[t]()}},d=function(){var t=y("hex");e&&(t=l(t)),t.create=function(){return new r},t.update=function(r){return t.create().update(r)};for(var i=0;i<u.length;++i){var h=u[i];t[h]=y(h)}return t},l=function(r){var e,i;try{if(t.JS_MD5_TEST)throw"JS_MD5_TEST";e=require("crypto"),i=require("buffer").Buffer}catch(h){return console.log(h),r}var s=function(t){if("string"==typeof t)return e.createHash("md5").update(t,"utf8").digest("hex");if(t.constructor==ArrayBuffer)t=new Uint8Array(t);else if(void 0===t.length)return r(t);return e.createHash("md5").update(new i(t)).digest("hex")};return s};r.prototype.update=function(r){if(!this.finalized){var e="string"!=typeof r;e&&r.constructor==t.ArrayBuffer&&(r=new Uint8Array(r));for(var i,h,s=0,f=r.length||0,a=this.blocks,u=this.buffer8;f>s;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(n)for(h=this.start;f>s&&64>h;++s)u[h++]=r[s];else for(h=this.start;f>s&&64>h;++s)a[h>>2]|=r[s]<<o[3&h++];else if(n)for(h=this.start;f>s&&64>h;++s)i=r.charCodeAt(s),128>i?u[h++]=i:2048>i?(u[h++]=192|i>>6,u[h++]=128|63&i):55296>i||i>=57344?(u[h++]=224|i>>12,u[h++]=128|i>>6&63,u[h++]=128|63&i):(i=65536+((1023&i)<<10|1023&r.charCodeAt(++s)),u[h++]=240|i>>18,u[h++]=128|i>>12&63,u[h++]=128|i>>6&63,u[h++]=128|63&i);else for(h=this.start;f>s&&64>h;++s)i=r.charCodeAt(s),128>i?a[h>>2]|=i<<o[3&h++]:2048>i?(a[h>>2]|=(192|i>>6)<<o[3&h++],a[h>>2]|=(128|63&i)<<o[3&h++]):55296>i||i>=57344?(a[h>>2]|=(224|i>>12)<<o[3&h++],a[h>>2]|=(128|i>>6&63)<<o[3&h++],a[h>>2]|=(128|63&i)<<o[3&h++]):(i=65536+((1023&i)<<10|1023&r.charCodeAt(++s)),a[h>>2]|=(240|i>>18)<<o[3&h++],a[h>>2]|=(128|i>>12&63)<<o[3&h++],a[h>>2]|=(128|i>>6&63)<<o[3&h++],a[h>>2]|=(128|63&i)<<o[3&h++]);this.lastByteIndex=h,this.bytes+=h-this.start,h>=64?(this.start=h-64,this.hash(),this.hashed=!0):this.start=h}return this}},r.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[r>>2]|=a[3&r],r>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,this.hash()}},r.prototype.hash=function(){var t,r,e,i,h,s,n=this.blocks;this.first?(t=n[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,i=(-1732584194^2004318071&t)+n[1]-117830708,i=(i<<12|i>>>20)+t<<0,e=(-271733879^i&(-271733879^t))+n[2]-1126478375,e=(e<<17|e>>>15)+i<<0,r=(t^e&(i^t))+n[3]-1316259209,r=(r<<22|r>>>10)+e<<0):(t=this.h0,r=this.h1,e=this.h2,i=this.h3,t+=(i^r&(e^i))+n[0]-680876936,t=(t<<7|t>>>25)+r<<0,i+=(e^t&(r^e))+n[1]-389564586,i=(i<<12|i>>>20)+t<<0,e+=(r^i&(t^r))+n[2]+606105819,e=(e<<17|e>>>15)+i<<0,r+=(t^e&(i^t))+n[3]-1044525330,r=(r<<22|r>>>10)+e<<0),t+=(i^r&(e^i))+n[4]-176418897,t=(t<<7|t>>>25)+r<<0,i+=(e^t&(r^e))+n[5]+1200080426,i=(i<<12|i>>>20)+t<<0,e+=(r^i&(t^r))+n[6]-1473231341,e=(e<<17|e>>>15)+i<<0,r+=(t^e&(i^t))+n[7]-45705983,r=(r<<22|r>>>10)+e<<0,t+=(i^r&(e^i))+n[8]+1770035416,t=(t<<7|t>>>25)+r<<0,i+=(e^t&(r^e))+n[9]-1958414417,i=(i<<12|i>>>20)+t<<0,e+=(r^i&(t^r))+n[10]-42063,e=(e<<17|e>>>15)+i<<0,r+=(t^e&(i^t))+n[11]-1990404162,r=(r<<22|r>>>10)+e<<0,t+=(i^r&(e^i))+n[12]+1804603682,t=(t<<7|t>>>25)+r<<0,i+=(e^t&(r^e))+n[13]-40341101,i=(i<<12|i>>>20)+t<<0,e+=(r^i&(t^r))+n[14]-1502002290,e=(e<<17|e>>>15)+i<<0,r+=(t^e&(i^t))+n[15]+1236535329,r=(r<<22|r>>>10)+e<<0,t+=(e^i&(r^e))+n[1]-165796510,t=(t<<5|t>>>27)+r<<0,i+=(r^e&(t^r))+n[6]-1069501632,i=(i<<9|i>>>23)+t<<0,e+=(t^r&(i^t))+n[11]+643717713,e=(e<<14|e>>>18)+i<<0,r+=(i^t&(e^i))+n[0]-373897302,r=(r<<20|r>>>12)+e<<0,t+=(e^i&(r^e))+n[5]-701558691,t=(t<<5|t>>>27)+r<<0,i+=(r^e&(t^r))+n[10]+38016083,i=(i<<9|i>>>23)+t<<0,e+=(t^r&(i^t))+n[15]-660478335,e=(e<<14|e>>>18)+i<<0,r+=(i^t&(e^i))+n[4]-405537848,r=(r<<20|r>>>12)+e<<0,t+=(e^i&(r^e))+n[9]+568446438,t=(t<<5|t>>>27)+r<<0,i+=(r^e&(t^r))+n[14]-1019803690,i=(i<<9|i>>>23)+t<<0,e+=(t^r&(i^t))+n[3]-187363961,e=(e<<14|e>>>18)+i<<0,r+=(i^t&(e^i))+n[8]+1163531501,r=(r<<20|r>>>12)+e<<0,t+=(e^i&(r^e))+n[13]-1444681467,t=(t<<5|t>>>27)+r<<0,i+=(r^e&(t^r))+n[2]-51403784,i=(i<<9|i>>>23)+t<<0,e+=(t^r&(i^t))+n[7]+1735328473,e=(e<<14|e>>>18)+i<<0,r+=(i^t&(e^i))+n[12]-1926607734,r=(r<<20|r>>>12)+e<<0,h=r^e,t+=(h^i)+n[5]-378558,t=(t<<4|t>>>28)+r<<0,i+=(h^t)+n[8]-2022574463,i=(i<<11|i>>>21)+t<<0,s=i^t,e+=(s^r)+n[11]+1839030562,e=(e<<16|e>>>16)+i<<0,r+=(s^e)+n[14]-35309556,r=(r<<23|r>>>9)+e<<0,h=r^e,t+=(h^i)+n[1]-1530992060,t=(t<<4|t>>>28)+r<<0,i+=(h^t)+n[4]+1272893353,i=(i<<11|i>>>21)+t<<0,s=i^t,e+=(s^r)+n[7]-155497632,e=(e<<16|e>>>16)+i<<0,r+=(s^e)+n[10]-1094730640,r=(r<<23|r>>>9)+e<<0,h=r^e,t+=(h^i)+n[13]+681279174,t=(t<<4|t>>>28)+r<<0,i+=(h^t)+n[0]-358537222,i=(i<<11|i>>>21)+t<<0,s=i^t,e+=(s^r)+n[3]-722521979,e=(e<<16|e>>>16)+i<<0,r+=(s^e)+n[6]+76029189,r=(r<<23|r>>>9)+e<<0,h=r^e,t+=(h^i)+n[9]-640364487,t=(t<<4|t>>>28)+r<<0,i+=(h^t)+n[12]-421815835,i=(i<<11|i>>>21)+t<<0,s=i^t,e+=(s^r)+n[15]+530742520,e=(e<<16|e>>>16)+i<<0,r+=(s^e)+n[2]-995338651,r=(r<<23|r>>>9)+e<<0,t+=(e^(r|~i))+n[0]-198630844,t=(t<<6|t>>>26)+r<<0,i+=(r^(t|~e))+n[7]+1126891415,i=(i<<10|i>>>22)+t<<0,e+=(t^(i|~r))+n[14]-1416354905,e=(e<<15|e>>>17)+i<<0,r+=(i^(e|~t))+n[5]-57434055,r=(r<<21|r>>>11)+e<<0,t+=(e^(r|~i))+n[12]+1700485571,t=(t<<6|t>>>26)+r<<0,i+=(r^(t|~e))+n[3]-1894986606,i=(i<<10|i>>>22)+t<<0,e+=(t^(i|~r))+n[10]-1051523,e=(e<<15|e>>>17)+i<<0,r+=(i^(e|~t))+n[1]-2054922799,r=(r<<21|r>>>11)+e<<0,t+=(e^(r|~i))+n[8]+1873313359,t=(t<<6|t>>>26)+r<<0,i+=(r^(t|~e))+n[15]-30611744,i=(i<<10|i>>>22)+t<<0,e+=(t^(i|~r))+n[6]-1560198380,e=(e<<15|e>>>17)+i<<0,r+=(i^(e|~t))+n[13]+1309151649,r=(r<<21|r>>>11)+e<<0,t+=(e^(r|~i))+n[4]-145523070,t=(t<<6|t>>>26)+r<<0,i+=(r^(t|~e))+n[11]-1120210379,i=(i<<10|i>>>22)+t<<0,e+=(t^(i|~r))+n[2]+718787259,e=(e<<15|e>>>17)+i<<0,r+=(i^(e|~t))+n[9]-343485551,r=(r<<21|r>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=r-271733879<<0,this.h2=e-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+r<<0,this.h2=this.h2+e<<0,this.h3=this.h3+i<<0)},r.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15]+f[r>>4&15]+f[15&r]+f[r>>12&15]+f[r>>8&15]+f[r>>20&15]+f[r>>16&15]+f[r>>28&15]+f[r>>24&15]+f[e>>4&15]+f[15&e]+f[e>>12&15]+f[e>>8&15]+f[e>>20&15]+f[e>>16&15]+f[e>>28&15]+f[e>>24&15]+f[i>>4&15]+f[15&i]+f[i>>12&15]+f[i>>8&15]+f[i>>20&15]+f[i>>16&15]+f[i>>28&15]+f[i>>24&15]},r.prototype.toString=r.prototype.hex,r.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},r.prototype.array=r.prototype.digest,r.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),r=new Uint32Array(t);return r[0]=this.h0,r[1]=this.h1,r[2]=this.h2,r[3]=this.h3,t},r.prototype.buffer=r.prototype.arrayBuffer;var v=d();h?module.exports=v:(t.md5=v,s&&define(function(){return v}))}(this);

(function(window,$, undefined) {

    window.runLifeBringer = function(config) {

        //
        //Game vars
        //

        var portletId = "lzs";

        var alive;
        var bulletSpeed = 1500;
        var cursors;
        var fireButton;
        var fireDelay = 200;
        var fireTime = 0;
        var gameLost = false;
        var hit;
        var level = 1;
        var levelText = 'Level ';
        var levelUpCounter = 0;
        var levelUpReq = 20;
        var logo;
        var loseText = 'Game over, man! Game over!';
        var pauseText = 'Paused';
        var pew;
        var ray;
        var gameOverSound;
        var raySpeed = 500;

        var score = 0;
        var missedTotal = 0;
        var firedTotal = 0;
        var redZombiesKilledTotal = 0;
        var greenZombiesKilledTotal = 0;


        var redZombiesKilled = 0;
        var greenZombiesKilled = 0;

        var scoreString = 'Score: ';
        var scoreText;
        var soundtrack;
        var stateText;
        var bonusText;
        var tween;
        var volume = 1;
        var zombieHitboxScale = 0.5;
        var zombieHitPoints = 3;
        var zombies;
        var zombieSpawn;
        var zombieSpawnLoop;
        var zombieSpeed = 50;
        var zombieWidth = 119;
        var missedCount = 0;

        var bullets;

        var touchDown=false;
        var touchLeft=false;
        var touchRight=false;
        var touchUp=false;
        var touchFire=false;
        var gameId = 0;

        if (!config.namespace) {
            config.namespace = "";
        };

        var currentUser = config.currentUser;
        var WeDeploy = config.weDeploy;

        var sendScoreToServer = function() {

            WeDeploy.data('db.lifebringer.wedeploy.io').where('id', window.md5(currentUser.email))
                .get('game').then(
                    function(result) {

                        var game = {};

                        if (result.length>0) {
                            game = result[0];
                        }

                        game.id = window.md5(currentUser.email);
                        game.name = currentUser.name;

                        if (!game.games) {
                            game.games = [];
                            game.count = 0;
                            game.maxScore = 0;
                        }

                        game.count++;

                        if (score >  game.maxScore) {
                            game.maxScore = score;
                        }

                        game.games[game.games.length] = {

                            gameDate: ((new Date()).toJSON()),
                            score: score,
                            redZombiesKilled: redZombiesKilledTotal,
                            greenZombiesKilled: greenZombiesKilledTotal,
                            fired: firedTotal,
                            missed: missedTotal,
                            level: level
                        };

                        WeDeploy.data('db.lifebringer.wedeploy.io')
                            .update('game', game    )
                            .then(function(item) {
                                setTimeout(redirectToGameOverPage, 4000);
                            });

                    });
        }


        var redirectToGameOverPage = function() {

            var url = config.gameOverPageUrl.replace("QWEQWE", gameId);
            window.location = url;
        };

        var gameWidth = 720;
        var gameHeight = 1280;

        var missedCountFromLevelStart = 0;

        var lzs = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, portletId + "gamearea", { preload: preload, create: create, update: update, render: render });

        var contextRoot = config.contextRoot;

            function preload() {
                lzs.load.spritesheet('ray', contextRoot + 'assets/sprites/ray-sheet.png', 145, 128, 7);
                lzs.load.spritesheet('zombie', contextRoot + 'assets/sprites/zombie-sheet.png', 119, 128);

                lzs.load.spritesheet('buttonvertical', contextRoot + 'assets/buttons/button-vertical.png',64,64);
                lzs.load.spritesheet('buttonhorizontal', contextRoot + 'assets/buttons/button-horizontal.png',96,64);
                lzs.load.spritesheet('buttonbox', contextRoot + 'assets/buttons/button-vertical.png',64,64);
                lzs.load.spritesheet('buttonsquare', contextRoot + 'assets/buttons/button-square.png',120,120);

                lzs.load.spritesheet('buttonfire', contextRoot + 'assets/buttons/button-round-a-big.png',150,150);

                //lzs.load.spritesheet('buttonfire', contextRoot + 'assets/buttons/button-round-a.png',96,96);

                lzs.load.image('beam', contextRoot + 'assets/sprites/beam-01.png');
                lzs.load.image('background', contextRoot + 'assets/sprites/grass-dirt-mix-pixeled-gray.png');
                lzs.load.image('logo', contextRoot + 'assets/sprites/logo-720.png');

                lzs.load.audio('alive', contextRoot + 'assets/sounds/angel1.mp3');
                lzs.load.audio('hit', contextRoot + 'assets/sounds/grunt1.mp3');
                lzs.load.audio('pew', contextRoot + 'assets/sounds/raygun1.mp3');
                lzs.load.audio('soundtrack', contextRoot + 'assets/sounds/soundtrack.mp3');
                lzs.load.audio('zombie', contextRoot + 'assets/sounds/zombie1.mp3');
                lzs.load.audio('gameover', contextRoot + 'assets/sounds/we-need-your-brains.mp3');
                // fullscreen setup

                lzs.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
                lzs.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

                if (lzs.device.desktop)
                {
                    lzs.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    lzs.scale.pageAlignHorizontally = true;
                    lzs.scale.pageAlignVertically = true;
                }
                else
                {
                    var gameHeight = (window.screen.height*gameWidth) / window.screen.width;
                    lzs.scale.setGameSize(gameWidth, gameHeight); //
                    //lzs.scale.setMinMax(gameWidth, gameHeight, gameWidth, gameHeight);
                    lzs.scale.pageAlignHorizontally = true;
                    lzs.scale.pageAlignVertically = true;
                    lzs.scale.forceOrientation(false, true);
                    lzs.scale.forceOrientation(false,true);
                    lzs.scale.enterIncorrectOrientation.add(function() {
                        lzs.paused = true;
                        document.getElementById('orientation').style.display = 'block';
                    }, lzs);
                    lzs.scale.leaveIncorrectOrientation.add(function() {
                        lzs.paused = false;
                        document.getElementById('orientation').style.display = 'none';
                    }, lzs);
                }
            }

        function gofull() {
            lzs.scale.startFullScreen(false);
        }

        function create() {
            if (!lzs.device.desktop){ lzs.input.onDown.add(gofull, this); } //go fullscreen on mobile devices


            lzs.add.tileSprite(0, 0, lzs.world.width, lzs.world.height, 'background');

            //logo = lzs.add.sprite((lzs.width - 937)/2, (lzs.height - 311)/2, 'logo');

            logo = lzs.add.sprite((lzs.width - 720)/2, (lzs.height - 230)/2, 'logo');

            setTimeout(function() {
                logo.destroy();
                ray.play('walkForward');
            }, 4000);

            lzs.physics.startSystem(Phaser.Physics.ARCADE);

            ray = lzs.add.sprite(lzs.world.width * 0.5, lzs.world.height * 0.8, 'ray');

            ray.animations.add('walkForward', [1, 2], 6, false);
            ray.animations.add('walkSide', [3, 4], 6, false);
            ray.animations.add('walkBack', [0], 6, false);
            ray.animations.add('fireForward', [5], true);

            ray.anchor.setTo(0.5, 1);

            //rays
            bullets = lzs.add.group();
            bullets.enableBody = true;
            bullets.physicsBodyType = Phaser.Physics.ARCADE;
            bullets.createMultiple(30, 'beam');
            bullets.setAll('anchor.x', 0.5);
            bullets.setAll('anchor.y', 1);
            bullets.setAll('outOfBoundsKill', true);
            bullets.setAll('checkWorldBounds', true);

            lzs.physics.enable(ray, Phaser.Physics.ARCADE);

            //controls
            cursors = lzs.input.keyboard.createCursorKeys();
            fireButton = lzs.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

            var pauseButton = lzs.input.keyboard.addKey(Phaser.Keyboard.P);

            pauseButton.onDown.add(togglePaused, this);

            var muteButton = lzs.input.keyboard.addKey(Phaser.Keyboard.M);

            muteButton.onDown.add(toggleMuted, this);

            createZombies();

            //audio
            alive = lzs.add.audio('alive', volume);
            hit = lzs.add.audio('hit', volume);
            pew = lzs.add.audio('pew', volume);
            zombieSpawn = lzs.add.audio('zombie', volume);
            soundtrack = lzs.add.audio('soundtrack');
            gameOverSound = lzs.add.audio('gameover');

            soundtrack.play('', 0, volume / 3, true);

            setTimeout(function() {
                zombieSpawn.play();
            }, 2000);

            //text
            stateText = lzs.add.text(lzs.world.centerX, lzs.world.centerY, ' ', {fill: '#E9B3F7'});
            stateText.anchor.setTo(0.5, 0.5);
            stateText.visible = false;
            stateText.font = 'badaboom';
            stateText.fontSize  = '56';

            bonusText = lzs.add.text(lzs.world.centerX, lzs.world.centerY - 100, ' ', {fill: '#E9B3F7'});
            bonusText.anchor.setTo(0.5, 0.5);
            bonusText.visible = false;
            bonusText.font = 'badaboom';
            bonusText.fontSize  = '56';

            //Score
            scoreText = lzs.add.text(20, 20, scoreString + score, {fill: '#E9B3F7' });
            scoreText.font = 'badaboom';
            scoreText.fontSize  = '42';
            scoreText.visible = false;

            if (!lzs.device.desktop){
                //var buttondown = lzs.add.button(20+96, lzs.height - (20 + 64), 'buttonvertical', null, this, 0, 1, 0, 1);

                var buttondown = lzs.add.button(120 + 20, lzs.height - (120), 'buttonsquare', null, this, 0, 1, 0, 1);

                buttondown.fixedToCamera = true;
                buttondown.events.onInputOver.add(function(){touchDown=true;});
                buttondown.events.onInputOut.add(function(){touchDown=false;});
                buttondown.events.onInputDown.add(function(){touchDown=true;});
                buttondown.events.onInputUp.add(function(){touchDown=false;});

                //var buttonleft = lzs.add.button(20, lzs.height - (20 + 64 + 64), 'buttonhorizontal', null, this, 0, 1, 0, 1);
                var buttonleft = lzs.add.button(0, lzs.height - (120 + 120 - 40), 'buttonsquare', null, this, 0, 1, 0, 1);
                buttonleft.fixedToCamera = true;
                buttonleft.events.onInputOver.add(function(){touchLeft=true;});
                buttonleft.events.onInputOut.add(function(){touchLeft=false;});
                buttonleft.events.onInputDown.add(function(){touchLeft=true;});
                buttonleft.events.onInputUp.add(function(){touchLeft=false;});

                //var buttonright = lzs.add.button(20+96+64, lzs.height - (20 + 64 + 64), 'buttonhorizontal', null, this, 0, 1, 0, 1);
                var buttonright = lzs.add.button(120+120+40, lzs.height - (120 + 120 - 40), 'buttonsquare', null, this, 0, 1, 0, 1);
                buttonright.fixedToCamera = true;
                buttonright.events.onInputOver.add(function(){touchRight=true;});
                buttonright.events.onInputOut.add(function(){touchRight=false;});
                buttonright.events.onInputDown.add(function(){touchRight=true;});
                buttonright.events.onInputUp.add(function(){touchRight=false;});

                //var buttonup = lzs.add.button(20+96, lzs.height - (20 + 64 + 64 + 64), 'buttonvertical', null, this, 0, 1, 0, 1);
                var buttonup = lzs.add.button(120 + 20, lzs.height - (120 + 120 + 120 - 80), 'buttonsquare', null, this, 0, 1, 0, 1);
                buttonup.fixedToCamera = true;
                buttonup.events.onInputOver.add(function(){touchUp=true;});
                buttonup.events.onInputOut.add(function(){touchUp=false;});
                buttonup.events.onInputDown.add(function(){touchUp=true;});
                buttonup.events.onInputUp.add(function(){touchUp=false;});



                // create our virtual game controller buttons
                //var buttonfire = lzs.add.button(lzs.width - (20+96), lzs.height-(20+96), 'buttonfire', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
                var buttonfire = lzs.add.button(lzs.width - (20+150), lzs.height-(20+150), 'buttonfire', null, this, 0, 1, 0, 1);
                buttonfire.fixedToCamera = true;  //our buttons should stay on the same place
                buttonfire.events.onInputOver.add(function(){touchFire=true;});
                buttonfire.events.onInputOut.add(function(){touchFire=false;});
                buttonfire.events.onInputDown.add(function(){touchFire=true;});
                buttonfire.events.onInputUp.add(function(){touchFire=false;});
            }
        }

        function walkLeft() {
            if (ray.position.x > 0) {
                ray.body.velocity.x = -raySpeed;
                ray.scale.x = 1;
                ray.play('walkSide');
            }
        }

        function walkRight() {
            if (ray.position.x < lzs.world.width) {
                ray.body.velocity.x = raySpeed;
                ray.scale.x = -1;
                ray.play('walkSide');
            }
        }

        function walkUp() {
            if (ray.position.y > (lzs.world.height / 2)) {
                ray.body.velocity.y = -raySpeed;
                ray.scale.x = 1;
                ray.play('walkForward');
            }
        }

        function walkDown() {
            if (ray.position.y < (lzs.world.height)) {
                ray.body.velocity.y = raySpeed;
                ray.scale.x = 1;
                ray.play('walkBack');
            }
        }


        function update() {
            updateRay();
            updateMissedBullets();

            if (lzs.input.currentPointers == 0 && !lzs.input.activePointer.isMouse){ touchFire=false; touchDown=false; touchUp=false; touchRight=false; touchLeft=false;} //this works around a "bug" where a button gets stuck in pressed state
        }

        function updateRay() {
            if (ray.alive) {
                ray.body.velocity.setTo(0, 0);

                if (cursors.left.isDown || touchLeft) {
                    walkLeft();
                }
                else if (cursors.right.isDown || touchRight) {
                    walkRight();
                }
                else if (cursors.up.isDown || touchUp) {
                    walkUp();
                }
                else if (cursors.down.isDown || touchDown) {
                    walkDown();
                }

                if (fireButton.isDown || touchFire) {
                    fireRay();
                }

                //collision detection
                lzs.physics.arcade.overlap(bullets, zombies, zombieBulletCollisionHandler);
                lzs.physics.arcade.overlap(ray, zombies, loseGame);

                // Check gamelost
                zombies.forEach(function(zombie) {
                    if (zombie.position.y > (lzs.world.height - zombie.height)) {
                        gameLost = true;
                    }
                }, this);

                if (gameLost) {
                    loseGame();
                }
                else if (levelUpCounter == levelUpReq) {
                    levelUpCounter = 0;

                    increaseLevel();
                }
            }
        }

        function updateMissedBullets() {
            bullets.forEach(function(bullet) {

                if (bullet.fireY && bullet.position.y < 0) {
                    bullet.fireY=undefined;
                    bullet.fireX=undefined;
                    redZombiesKilled=0;
                    greenZombiesKilled=0;
                    missedCount++;
                    missedTotal++;
                    addScore(-5);
                }
            });
        }

        function fireRay() {
            if (lzs.time.now > fireTime) {
                pew.play();

                bullet = bullets.getFirstExists(false);

                if (bullet) {

                    bullet.fireX = ray.x + 10;
                    bullet.fireY = ray.y - ray.height;

                    bullet.reset(bullet.fireX, bullet.fireY);
                    bullet.body.velocity.y = -bulletSpeed;
                    fireTime = lzs.time.now + fireDelay;

                    firedTotal++;

                    ray.play('fireForward');

                    setTimeout(function() {
                        ray.play('walkForward');
                    }, 100);
                }
            }
        }

        function createZombies() {
            zombies = lzs.add.group();
            zombies.enableBody = true;
            zombies.physicsBodyType = Phaser.Physics.ARCADE;
            zombies.setAll('outOfBoundsKill', true);

            zombieSpawnLoop = lzs.time.events.loop(2000, createZombie, this);
        }

        function createZombie() {
            var position = Math.min(lzs.world.width * Math.random(), lzs.world.width - zombieWidth);
            var zombie = zombies.create(position, -30, 'zombie');

            zombie.anchor.setTo(0.5, 1);

            zombie.animations.add('walkGreen', [0, 1, 2, 3], 3, true);
            zombie.animations.add('walkRed', [4, 5, 6, 7], 3, true);
            zombie.animations.add('leave', [9, 10, 11], 6, true);
            zombie.animations.add('transform', [8], 1, false);

            if (Math.random() > 0.5) {
                zombie.play('walkGreen');
                zombie.hits = 0;
                zombie.type="green";
            }
            else {
                zombie.play('walkRed');
                zombie.hits = 0;
                zombie.type="red";
            }

            zombie.body.velocity.y = zombieSpeed;
            zombie.alive = false;

            zombie.body.setSize(zombie.width * zombieHitboxScale, zombie.height * zombieHitboxScale, 0, -40);
        }

        function zombieBulletCollisionHandler(bullet, zombie) {
            if (!zombie.alive) {
                bullet.fireY=undefined;
                bullet.fireX=undefined;
                bullet.kill();
                zombie.hits++;
                var bulletExtra = 1;
                var rayExtra = 1;

                var bulletDistance = (bullet.fireY - bullet.position.Y);

                if (bulletDistance < 200 ) {
                    bulletExtra = 2;
                }
                if (bulletDistance < 100 ) {
                    bulletExtra = 3;
                }

                var hitPoints = zombieHitPoints;

                if (zombie.type==="red") {
                    hitPoints = zombieHitPoints * 2;
                    greenZombiesKilled=0;
                }
                else {
                    redZombiesKilled=0;
                }


                if (zombie.hits < hitPoints) {
                    hit.play();
                    if (zombie.type==="red") {
                        addScore(1 * bulletExtra)
                    }
                    else {
                        addScore(2 * bulletExtra)
                    }
                }

                if (zombie.hits == hitPoints) {
                    zombie.alive = true;
                    zombie.body.velocity.y = 0;
                    levelUpCounter++;

                    if (zombie.position.x > (lzs.world.width * 0.5)) {
                        zombie.body.velocity.x = zombieSpeed * 3;
                    }
                    else {
                        zombie.body.velocity.x = -zombieSpeed * 3;
                        zombie.scale.x = -1;
                    }

                    if (zombie.type==="red") {
                        redZombiesKilled++;
                        redZombiesKilledTotal++;
                    }
                    else {
                        greenZombiesKilled++;
                        greenZombiesKilledTotal++;
                    }

                    if (redZombiesKilled>=3) {
                        if (redZombiesKilled===3) {
                            addScore(500);
                            showBonusText("BONUS 500");
                        }
                        else {
                            addScore(500);
                            showBonusText("BONUS 200");
                        }
                    }
                    if (greenZombiesKilled>=5) {
                        if (redZombiesKilled===3) {
                            addScore(300);
                            showBonusText("BONUS 300");
                        }
                        else {
                            addScore(100);
                            showBonusText("BONUS 100");
                        }
                    }

                    zombie.play('transform');

                    setTimeout(function() {
                        zombie.play('leave');
                    }, 200);

                    alive.play();

                    addScore(countKillScore(10 * bulletExtra));
                }
            }
        }

        function countKillScore(points) {
            var levelScore = 10 * level;
            points = points * 10;

            var countedScore= (levelScore * points)/100;

            if (missedCount===0) {
                countedScore = countedScore + 20;
            }

            return countedScore;
        }

        function addScore(points) {

            score = score + points;

            if (score<0)
                score=0;

            scoreText.visible = true;
            scoreText.text = scoreString + score;
        }


        function increaseLevel() {
            level++;
            levelUpReq += 5;
            zombieSpawnLoop.delay -= 80;
            zombieSpeed += 12;

            zombieHitPoints=zombieHitPoints+1;

            var levelMissedCount = missedCount - missedCountFromLevelStart;

            if (levelMissedCount < 5) {
                var bonusScore = 200 * ( 5 - levelMissedCount);
                addScore(200 * levelMissedCount);
                showBonusText("EXCELENT !! Bonus " + bonusScore);
            }


            missedCountFromLevelStart = missedCount;

            stateText.text = levelText + level;
            stateText.visible = true;

            setTimeout(function() {
                stateText.visible = false;
            }, 2000);
        }

        function showBonusText(text) {
            bonusText.text = text;
            bonusText.visible = true;
            setTimeout(function() {
                bonusText.visible = false;
            }, 1000);
        }

        function loseGame() {
            gameOverSound.play();
            stateText.text = loseText;
            stateText.visible = true;
            zombies.destroy();
            bullets.destroy();
            ray.destroy();
            sendScoreToServer();

        }

        function render() {
            // debug

            lzs.debug.text("", 20, 20);
        }

        function toggleMuted() {
            volume = 1 - volume;

            for (var audio in [alive, hit, pew, zombieSpawn]) {
                audio.volume = 1 - audio.volume;
            }

            if (!soundtrack.paused) {
                soundtrack.pause();

                document.getElementById('mute').innerHTML = 'Unmute';
            }
            else {
                soundtrack.resume();

                document.getElementById('mute').innerHTML = 'Mute';
            }
        }

        function togglePaused(game) {
            lzs.paused = !lzs.paused;

            if (lzs.paused) {
                stateText.text = pauseText;
                stateText.visible = true;

                document.getElementById('pause').innerHTML = 'Unpause';
            }
            else {
                stateText.visible = false;

                document.getElementById('pause').innerHTML = 'Pause';
            }
        }
    }
})(window, jQuery, undefined);
