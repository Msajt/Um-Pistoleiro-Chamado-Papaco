// O JOGO NÃO ESTÁ ABRINDO NO NAVEGADOR (Chrome, Mozilla, etc...)
// SÓ NO BROWSER LOCAL DO ATOM
// Para movimentar use as teclas direcionais e espaço para atirar
// DIRECIONAL ESQUERDA OU DIREITA + CIMA OU BAIXO ---> PULA OU ROLA

// VARIAVEIS INTRO
var menu1, iniciar = true, cutscene, filme = false, fase1 = false,
    fase2 = false, fase3 = false, fase4= false, music1=0, music2=0, music3=0, music4=0

// VARIAVEIS HEROI
var spr_walk, bullets, life_heroi = 5, health_heroi = 500

//VARIAVEIS INIMIGO LV.1
var spr_inimigo, spr_inimigo_trigger=0, cont=2000, bala_vertical,
    bala_direita, bala_esquerda
//VARIAVEIS INIMIGO LV.2
var ursal, life_lv2= 2000, ursal_trigger=0, martelo,
    foice_direita, foice_esquerda
//VARIAVEIS INIMIGO LV.3
var andrade, mula, life_lv3= 4000, andrade_trigger=0, mula_trigger=0, algema,
    bicicleta, poste, estrela, garrafa, estacas,
    especial_appear= 0, especial, especial_time

//VARIAVEIS PARA POWER UPS
var power_ups = 0, time, shotgun, shotgun_time, life_up, health_up,
    damage_up, damage_up_time

//VARIAVEIS PARA MUSICAS E EFEITOS SONOROS
var music_level01, music_level02, music_level03


// --------------------------------------- PRELOAD --------------------------
function preload() {
  // -------------------------------- ANIMAÇÔES HEROI -----------------------
  // ANIMAÇÕES PARA A DIRETA
  // ANDAR A DIREITA
  anim_walk_right = loadAnimation(
  "SPRITES/walk_right/walk_right01.png",
  "SPRITES/walk_right/walk_right02.png",
  "SPRITES/walk_right/walk_right03.png",
  "SPRITES/walk_right/walk_right04.png",
  "SPRITES/walk_right/walk_right05.png",
  "SPRITES/walk_right/walk_right06.png"
  );
  // PULO DIRECIONAL A DIREITA
  anim_jump_right = loadAnimation(
  "SPRITES/jump_right/jump_right01.png",
  "SPRITES/jump_right/jump_right02.png",
  "SPRITES/jump_right/jump_right03.png",
  "SPRITES/jump_right/jump_right04.png",
  "SPRITES/jump_right/jump_right05.png",
  "SPRITES/jump_right/jump_right06.png"
  );
  // SEM MOVIMENTO A DIREITA
  anim_static_right = loadAnimation(
  "SPRITES/static/static_right01.png",
  "SPRITES/static/static_right01.png",
  "SPRITES/static/static_right01.png",
  "SPRITES/static/static_right01.png",
  "SPRITES/static/static_right02.png",
  "SPRITES/static/static_right02.png",
  "SPRITES/static/static_right02.png",
  "SPRITES/static/static_right02.png"
  );
  // ROLAMENTO A DIREITA
  anim_roll_right = loadAnimation(
  "SPRITES/roll_right/roll_right01.png",
  "SPRITES/roll_right/roll_right02.png",
  "SPRITES/roll_right/roll_right03.png",
  "SPRITES/roll_right/roll_right04.png",
  "SPRITES/roll_right/roll_right05.png",
  "SPRITES/roll_right/roll_right08.png"
  );
  // PULO PARADO A DIREITA
  anim_static_jump_right = loadAnimation(
  "SPRITES/static_jump_right/static_jump_right01.png",
  "SPRITES/static_jump_right/static_jump_right02.png",
  "SPRITES/static_jump_right/static_jump_right03.png",
  "SPRITES/static_jump_right/static_jump_right03.png",
  "SPRITES/static_jump_right/static_jump_right04.png",
  "SPRITES/static_jump_right/static_jump_right05.png",
  "SPRITES/static_jump_right/static_jump_right06.png"
  );
  // ESPECIAL A DIREITA
  anim_special_right = loadAnimation(
  "SPRITES/special_right/special_right01.png",
  "SPRITES/special_right/special_right02.png",
  "SPRITES/special_right/special_right03.png",
  "SPRITES/special_right/special_right04.png",
  "SPRITES/special_right/special_right05.png"
  );
  // ANIMAÇÕES PARA A ESQUERDA
  // ANDAR A ESQUERDA
  anim_walk_left = loadAnimation(
  "SPRITES/walk_left/walk_left01.png",
  "SPRITES/walk_left/walk_left02.png",
  "SPRITES/walk_left/walk_left03.png",
  "SPRITES/walk_left/walk_left04.png",
  "SPRITES/walk_left/walk_left05.png",
  "SPRITES/walk_left/walk_left06.png"
  );
  // PULO DIRECIONAL A ESQUERDA
  anim_jump_left = loadAnimation(
  "SPRITES/jump_left/jump_left01.png",
  "SPRITES/jump_left/jump_left02.png",
  "SPRITES/jump_left/jump_left03.png",
  "SPRITES/jump_left/jump_left04.png",
  "SPRITES/jump_left/jump_left05.png",
  "SPRITES/jump_left/jump_left06.png"
  );
  // ROLAMENTO A ESQUERDA
  anim_roll_left = loadAnimation(
  "SPRITES/roll_left/roll_left01.png",
  "SPRITES/roll_left/roll_left02.png",
  "SPRITES/roll_left/roll_left03.png",
  "SPRITES/roll_left/roll_left04.png",
  "SPRITES/roll_left/roll_left05.png",
  "SPRITES/roll_left/roll_left08.png"
  );
  // ESPECIAL A ESQUERDA
  anim_special_left = loadAnimation(
  "SPRITES/special_left/special_left01.png",
  "SPRITES/special_left/special_left02.png",
  "SPRITES/special_left/special_left03.png",
  "SPRITES/special_left/special_left04.png",
  "SPRITES/special_left/special_left05.png"
  );
  // SEM MOVIMENTO A ESQUERDA
  anim_static_left = loadAnimation(
  "SPRITES/static/static_left01.png",
  "SPRITES/static/static_left01.png",
  "SPRITES/static/static_left01.png",
  "SPRITES/static/static_left01.png",
  "SPRITES/static/static_left01.png",
  "SPRITES/static/static_left02.png",
  "SPRITES/static/static_left02.png",
  "SPRITES/static/static_left02.png",
  "SPRITES/static/static_left02.png"
  );
  // PULO PARADO A ESQUERDA
  anim_static_jump_left = loadAnimation(
  "SPRITES/static_jump_left/static_jump_left01.png",
  "SPRITES/static_jump_left/static_jump_left02.png",
  "SPRITES/static_jump_left/static_jump_left03.png",
  "SPRITES/static_jump_left/static_jump_left03.png",
  "SPRITES/static_jump_left/static_jump_left04.png",
  "SPRITES/static_jump_left/static_jump_left05.png",
  "SPRITES/static_jump_left/static_jump_left06.png"
  );
  // ==========================================================================

  // -------------------------------- BOSS 1 ----------------------
  anim_first_boss = loadAnimation(
  "SPRITES/FIRST_BOSS/first_boss01.png",
  "SPRITES/FIRST_BOSS/first_boss02.png",
  "SPRITES/FIRST_BOSS/first_boss03.png",
  );
  // -------------------------------- BOSS 2 ------------------------
  second_boss= loadAnimation("SPRITES/SECOND_BOSS/boss02_01.png");

  // -------------------------------- BOSS 3 ------------------------
  third_boss01_direita= loadAnimation("SPRITES/THIRD_BOSS/third_boss01_direita.png");
  third_boss01_esquerda= loadAnimation("SPRITES/THIRD_BOSS/third_boss01_esquerda.png")
  third_boss02_direita= loadAnimation("SPRITES/THIRD_BOSS/third_boss02_direita.png")
  third_boss02_esquerda= loadAnimation("SPRITES/THIRD_BOSS/third_boss02_esquerda.png")

  // ---------------------------- VIDA CHEFAO ---------------------------
  boss_life_full = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life_full.png");
  boss_life01 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life01.png");
  boss_life02 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life02.png");
  boss_life03 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life03.png");
  boss_life04 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life04.png");
  boss_life05 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life05.png");
  boss_life06 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life06.png");
  boss_life07 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life07.png");
  boss_life08 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life08.png");
  boss_life09 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life09.png");
  boss_life10 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life10.png");
  boss_life11 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life11.png");
  boss_life12 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life12.png");
  boss_life13 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life13.png");
  boss_life14 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life14.png");
  boss_life15 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life15.png");
  boss_life16 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life16.png");
  boss_life17 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life17.png");
  boss_life18 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life18.png");
  boss_life19 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life19.png");
  boss_life20 = loadImage("SPRITES/FIRST_BOSS/boss_life/boss_life20.png");

  // -------------------------------- TEMPORARIO: ATAQUES BOSS 1 ----------------
  laser_beam = loadAnimation(
  "SPRITES/FIRST_BOSS/laser_beam/tile001.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile002.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile003.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile004.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile005.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile006.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile007.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile008.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile009.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile010.png",
  "SPRITES/FIRST_BOSS/laser_beam/tile011.png"
  );
  // -------------------------------- VIDA E SAUDE HEROI --------------------
  hp_heroi01 = loadImage("SPRITES/icons/life/health_points/HP01.png");
  hp_heroi02 = loadImage("SPRITES/icons/life/health_points/HP02.png");
  hp_heroi03 = loadImage("SPRITES/icons/life/health_points/HP03.png");
  hp_heroi04 = loadImage("SPRITES/icons/life/health_points/HP04.png");
  hp_heroi05 = loadImage("SPRITES/icons/life/health_points/HP05.png");
  hp_heroi06 = loadImage("SPRITES/icons/life/health_points/HP06.png");


  lp_heroi01 = loadImage("SPRITES/icons/life/life_points/LP01.png");
  lp_heroi02 = loadImage("SPRITES/icons/life/life_points/LP02.png");
  lp_heroi03 = loadImage("SPRITES/icons/life/life_points/LP03.png");
  lp_heroi04 = loadImage("SPRITES/icons/life/life_points/LP04.png");
  lp_heroi05 = loadImage("SPRITES/icons/life/life_points/LP05.png");
  lp_heroi06 = loadImage("SPRITES/icons/life/life_points/LP06.png");
  // ==========================================================================

  //------------------------------- BACKGROUNDS ---------------------------
  background_01 = loadImage("SPRITES/FIRST_BOSS/BACKGROUND.png")
  background_02 = loadImage("SPRITES/SECOND_BOSS/background_02.png")
  background_03 = loadImage("SPRITES/THIRD_BOSS/background_03.png")

  // ------------------------------ MUSICAS E SONS ---------------------------
  soundFormats('mp3', 'ogg')
  music_level01 = loadSound('SOUND/music_level01.mp3')
  music_level02 = loadSound('SOUND/music_level02.mp3')
  music_level03 = loadSound('SOUND/music_level03.mp3')
  music_level04 = loadSound('SOUND/music_level04.mp3')

  // ------------------- GAME OVER -----------
  over = loadImage('SPRITES/game_over.png')
  gameovermusic = loadSound('SOUND/music_gameover.mp3')

  //-------------------- AGRADECIMENTOS E FINAL -------------------
  agradecimento = loadImage('SPRITES/tela_inicio.png')
}


// =========================================================================
// --------------------------------- SETUP --------------------------------
// =========================================================================

function setup() {
  createCanvas(352, 216);
  noSmooth();
  // ---------------------------- MENU DO JOGO ---------------------------
  if(iniciar == true){
    menu1 = createVideo('INTRO.mp4', function() {
         menu1.loop()
         menu1.position(0,0)

    });
  }

  // ----------------------- HEROI ---------------------------------
  spr_walk = createSprite(184,150);
  // MOVIMENTOS PARA A DIREITA
  spr_walk.addAnimation('anim_walk_right', anim_walk_right);
  spr_walk.addAnimation('anim_jump_right', anim_jump_right);
  spr_walk.addAnimation('anim_static_right', anim_static_right);
  spr_walk.addAnimation('anim_roll_right', anim_roll_right);
  spr_walk.addAnimation('anim_static_jump_right', anim_static_jump_right)
  spr_walk.addAnimation('anim_special_right', anim_special_right)
  // MOVIMENTOS PARA A ESQUERDA
  spr_walk.addAnimation('anim_walk_left', anim_walk_left);
  spr_walk.addAnimation('anim_jump_left', anim_jump_left);
  spr_walk.addAnimation('anim_static_left', anim_static_left);
  spr_walk.addAnimation('anim_roll_left', anim_roll_left);
  spr_walk.addAnimation('anim_static_jump_left', anim_static_jump_left)
  spr_walk.addAnimation('anim_special_left', anim_special_left)

  //BALA
  bullets = new Group();
  bulletImage= loadImage('SPRITES/icons/bullet.png')

  // ------------------------ BOSS 1 -------------------------------
  spr_inimigo = createSprite(175,40);
  spr_inimigo.addAnimation('first_boss', anim_first_boss);
  // ----------------------- BOSS 1 ATAQUES ------------------------------
  // ATAQUE DE CIMA PRA BAIXO
  bala_vertical = new Group();
  bala_verticalImage = loadImage('SPRITES/FIRST_BOSS/bala_vertical.png')
  // PARA DIREITA
  bala_direita = new Group();
  bala_direitaImage = loadImage('SPRITES/FIRST_BOSS/bala_direita.png')
  // PARA ESQUERDA
  bala_esquerda = new Group();
  bala_esquerdaImage = loadImage('SPRITES/FIRST_BOSS/bala_esquerda.png')

  // ------------------------ BOSS 2 -------------------------------------
  ursal= createSprite(-50, 55);
  ursal.addAnimation('second_boss', second_boss)

  // ------------------------ BOSS 2 ATAQUES -------------------------------
  // MARTELAO
  martelo = new Group();
  marteloImage= loadImage('SPRITES/SECOND_BOSS/martelo.png')
  // FOICE DIREITA
  foice_direita = new Group();
  foice_direitaImage= loadImage('SPRITES/SECOND_BOSS/foice_direita.png')
  // FOICE ESQUERDA
  foice_esquerda = new Group();
  foice_esquerdaImage= loadImage('SPRITES/SECOND_BOSS/foice_esquerda.png')

  // ------------------------------- BOSS 3 ---------------------------
  andrade= createSprite(-59,44);
  andrade.addAnimation('third_boss01_direita', third_boss01_direita)
  andrade.addAnimation('third_boss01_esquerda', third_boss01_esquerda)
  mula= createSprite(-50,44);
  mula.addAnimation('third_boss02_direita', third_boss02_direita)
  mula.addAnimation('third_boss02_esquerda', third_boss02_esquerda)

  // -------------------------- BOSS 3 ATAQUES --------------------------
  // ATAQUES DO ANDRADE
  bicicleta = new Group();
  bicicletaImage = loadImage('SPRITES/THIRD_BOSS/bicicleta.png');
  poste = new Group();
  posteImage = loadImage('SPRITES/THIRD_BOSS/poste.png');
  estrela = new Group();
  estrelaImage = loadImage('SPRITES/THIRD_BOSS/estrela.png');
  //ATAQUES DO MULA
  garrafa= new Group();
  garrafaImage= loadImage('SPRITES/THIRD_BOSS/garrafa.png');
  estacas= new Group();
  estacasImage= loadImage('SPRITES/THIRD_BOSS/estacas.png');

  //POWER UP PARA DERROTAR A 2 FORMA
  especial= new Group();
  especialImage = loadImage('SPRITES/icons/power_ups/special.png');
  algema= new Group();
  algemaImage = loadImage('SPRITES/THIRD_BOSS/algema.png')

  // ------------------------ POWER UPS -----------------------
  shotgun = new Group();
  shotgunImage= loadImage('SPRITES/icons/power_ups/shotgun.png');
  life_up = new Group();
  life_upImage= loadImage('SPRITES/icons/power_ups/life_up.png');
  health_up = new Group();
  health_upImage= loadImage('SPRITES/icons/power_ups/health_up.png');
  damage_up = new Group();
  damage_upImage= loadImage('SPRITES/icons/power_ups/faster.png');
}

// =====================================================================
// ----------------------------- DRAW ----------------------------------
// =====================================================================

function draw() {
updateSprites();
if(iniciar == true){
  if(keyDown('ENTER')) {
    iniciar = false
    filme = true
    cutscene = createVideo('CUTSCENE.mp4', function() {
        menu1.remove();
        cutscene.play();
        cutscene.position(0,0);
        cutscene.onended(end_cutscene);
    });
  }
}

function end_cutscene(){
  cutscene.remove()
  fase1 = true
}

if(fase1 == true) {
  level1();
}
if(fase2 == true) {
  fase1 == false;
  level2();
}
if(fase3 == true) {
  fase2 == false;
  level3();
}
if(fase4 == true){
  music4++
  if(music4 == 1) {
    music_level03.stop()
    music_level04.loop()
  }
  background(agradecimento)
}

}

// ------------------ ABA DAS FUNÇÕES -----------------
function level1(){
  // TOCA MUSICA
  music1++
  if(music1 == 1){
    music_level01.loop()
  }

  background(background_01);
  drawSprites();
  poderes();
  papaco();

  // MOSTRAR A COLISÃO DO PERSONAGEM
  spr_walk.debug = mouseIsPressed // VER O HITBOX

  // MOVIMENTAÇÃO INIMIGO
  spr_inimigo_trigger++
  if(spr_inimigo_trigger%150 == 0){
    spr_inimigo.position.x = 45
  }
  if(spr_inimigo_trigger%300 == 0){
    spr_inimigo.position.x = 305
  }
  //ATAQUES INIMIGO
  if(cont > 0) {
    if (spr_inimigo_trigger%150 == 0) {
      var bala_vertical_trigger = createSprite(spr_inimigo.position.x, spr_inimigo.position.y);
      bala_vertical_trigger.addImage(bala_verticalImage);
      bala_vertical_trigger.setSpeed(3, 90);
      bala_vertical_trigger.life = 75;
      bala_vertical.add(bala_vertical_trigger);
    }
    if (spr_inimigo_trigger%300 == 0) {
      var bala_direita_trigger = createSprite(-10, 140);
      bala_direita_trigger.addImage(bala_direitaImage);
      bala_direita_trigger.setSpeed(3, 0);
      bala_direita_trigger.life = 150;
      bala_direita.add(bala_direita_trigger);
    }
    if (spr_inimigo_trigger%500 == 0) {
      var bala_esquerda_trigger = createSprite(370, 140);
      bala_esquerda_trigger.addImage(bala_esquerdaImage);
      bala_esquerda_trigger.setSpeed(-3, 0);
      bala_esquerda_trigger.life = 150;
      bala_esquerda.add(bala_esquerda_trigger);
    }
  }

  //COLOCA UM POLÍGONO DE COLISÃO NO INIMIGO
  spr_inimigo.setCollider('circle', -2, 17, 25)

  // NÃO CONSEGUI FAZER USANDO O FOR, ENTÃO FIZ DESSE JEITO
  if(bullets.overlap(spr_inimigo)){
    cont = cont - 2
  }

    if(cont <= 2000 && cont > 1900){
      image(boss_life_full, 149,199)
    } else {
      if(cont <= 1900 && cont > 1800){
        image(boss_life01, 149,199)
      } else {
        if(cont <= 1800 && cont > 1700){
          image(boss_life02, 149,199)
        } else {
          if(cont <= 1700 && cont > 1600){
            image(boss_life03, 149,199)
          } else {
            if(cont <= 1600 && cont > 1500){
              image(boss_life04, 149,199)
            } else {
              if(cont <= 1500 && cont > 1400){
                image(boss_life05, 149,199)
              } else {
                if(cont <= 1400 && cont > 1300){
                  image(boss_life06, 149,199)
                } else {
                  if(cont <= 1300 && cont > 1200){
                    image(boss_life07, 149,199)
                  } else {
                    if(cont <= 1200 && cont > 1100){
                      image(boss_life08, 149,199)
                    } else {
                      if(cont <= 1100 && cont > 1000){
                        image(boss_life09, 149,199)
                      } else {
                        if(cont <= 1000 && cont > 900){
                          image(boss_life10, 149,199)
                        } else {
                          if(cont <= 900 && cont > 800){
                            image(boss_life11, 149,199)
                          } else {
                            if(cont <= 800 && cont > 700){
                              image(boss_life12, 149,199)
                            } else {
                              if(cont <= 700 && cont > 600){
                                image(boss_life13, 149,199)
                              } else {
                                if(cont <= 600 && cont > 500){
                                  image(boss_life14, 149,199)
                                } else {
                                  if(cont <= 500 && cont > 400){
                                    image(boss_life15, 149,199)
                                  } else {
                                    if(cont <= 400 && cont > 300){
                                      image(boss_life16, 149,199)
                                    } else {
                                      if(cont <= 300 && cont > 200){
                                        image(boss_life17, 149,199)
                                      } else {
                                        if(cont <= 200 && cont > 100){
                                          image(boss_life18, 149,199)
                                        } else {
                                          if(cont <= 100 && cont > 0){
                                            image(boss_life19, 149,199)
                                          } else {
                                            if(cont < 0){
                                              image(boss_life20, 149,199)
                                              spr_inimigo.remove()
                                              fase2 = true
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if(bala_vertical.overlap(spr_walk)){
      health_heroi= health_heroi - 4
    }
    if(bala_direita.overlap(spr_walk)){
      health_heroi= health_heroi - 4
    }
    if(bala_esquerda.overlap(spr_walk)){
      health_heroi= health_heroi - 4
    }
// MOSTRAR HITBOX
  spr_inimigo.debug = mouseIsPressed

}

function level2() {
  // TOCA MUSICA
  music2++
  if(music2 == 1){
    music_level01.stop()
    music_level02.loop()
  }

  background(background_02);
  drawSprites();
  ursal_trigger++

  // POSIÇÕES DO URSAL
  if(ursal_trigger%50 == 0){
    ursal.setSpeed(3)
  }
  if(ursal_trigger%100 == 0){
    ursal.setSpeed(-3)
  }
  if(ursal_trigger%500 == 0){
    ursal.setSpeed(0)
  }
  if(ursal.position.x > 320){
    ursal.position.x = 0
  }
  if(ursal.position.x < 0){
    ursal.position.x = 316
  }

  // ATAQUES BOSS 2
  if(life_lv2 > 0) {
    if (ursal_trigger%50 == 0) {
      var martelo_trigger = createSprite(ursal.position.x, ursal.position.y);
      martelo_trigger.addImage(marteloImage);
      martelo_trigger.setSpeed(3, 90);
      martelo_trigger.life = 75;
      martelo.add(martelo_trigger);
    }
    if (ursal_trigger%100 == 0) {
      var foice_direita_trigger = createSprite(ursal.position.x, ursal.position.y);
      foice_direita_trigger.addImage(foice_direitaImage);
      foice_direita_trigger.setSpeed(3, 45);
      foice_direita_trigger.life = 75;
      foice_direita.add(foice_direita_trigger);
    }
    if (ursal_trigger%100 == 0) {
      var foice_esquerda_trigger = createSprite(ursal.position.x, ursal.position.y);
      foice_esquerda_trigger.addImage(foice_esquerdaImage);
      foice_esquerda_trigger.setSpeed(3, 135);
      foice_esquerda_trigger.life = 75;
      foice_esquerda.add(foice_esquerda_trigger);
    }
  }
  // BALA COLIDE COM BOSS
  ursal.setCollider('rectangle', 0, 20, 40,40)
  ursal.debug = mouseIsPressed

  if(bullets.overlap(ursal)){
    life_lv2--
  }

    if(life_lv2 <= 2000 && life_lv2 > 1900){
      image(boss_life_full, 149,199)
    } else {
      if(life_lv2 <= 1900 && life_lv2 > 1800){
        image(boss_life01, 149,199)
      } else {
        if(life_lv2 <= 1800 && life_lv2 > 1700){
          image(boss_life02, 149,199)
        } else {
          if(life_lv2 <= 1700 && life_lv2 > 1600){
            image(boss_life03, 149,199)
          } else {
            if(life_lv2 <= 1600 && life_lv2 > 1500){
              image(boss_life04, 149,199)
            } else {
              if(life_lv2 <= 1500 && life_lv2 > 1400){
                image(boss_life05, 149,199)
              } else {
                if(life_lv2 <= 1400 && life_lv2 > 1300){
                  image(boss_life06, 149,199)
                } else {
                  if(life_lv2 <= 1300 && life_lv2 > 1200){
                    image(boss_life07, 149,199)
                  } else {
                    if(life_lv2 <= 1200 && life_lv2 > 1100){
                      image(boss_life08, 149,199)
                    } else {
                      if(life_lv2 <= 1100 && life_lv2 > 1000){
                        image(boss_life09, 149,199)
                      } else {
                        if(life_lv2 <= 1000 && life_lv2 > 900){
                          image(boss_life10, 149,199)
                        } else {
                          if(life_lv2 <= 900 && life_lv2 > 800){
                            image(boss_life11, 149,199)
                          } else {
                            if(life_lv2 <= 800 && life_lv2 > 700){
                              image(boss_life12, 149,199)
                            } else {
                              if(life_lv2 <= 700 && life_lv2 > 600){
                                image(boss_life13, 149,199)
                              } else {
                                if(life_lv2 <= 600 && life_lv2 > 500){
                                  image(boss_life14, 149,199)
                                } else {
                                  if(life_lv2 <= 500 && life_lv2 > 400){
                                    image(boss_life15, 149,199)
                                  } else {
                                    if(life_lv2 <= 400 && life_lv2 > 300){
                                      image(boss_life16, 149,199)
                                    } else {
                                      if(life_lv2 <= 300 && life_lv2 > 200){
                                        image(boss_life17, 149,199)
                                      } else {
                                        if(life_lv2 <= 200 && life_lv2 > 100){
                                          image(boss_life18, 149,199)
                                        } else {
                                          if(life_lv2 <= 100 && life_lv2 > 0){
                                            image(boss_life19, 149,199)
                                          } else {
                                            if(life_lv2 < 0){
                                              image(boss_life20, 149,199)
                                              ursal.remove()
                                              fase3 = true
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  // HEROI
  poderes();
  papaco();
  if(martelo.overlap(spr_walk)){
    health_heroi--
  }
  if(foice_direita.overlap(spr_walk)){
    health_heroi = health_heroi - 3
  }
  if(foice_esquerda.overlap(spr_walk)){
    health_heroi = health_heroi - 3
  }
}

function level3(){
  //TOCA MUSICA
  music3++
  if(music3 == 1){
    music_level02.stop()
    music_level03.loop()
  }

  background(background_03)
  drawSprites();
  papaco();
  poderes();

  andrade_trigger++
  mula_trigger++
  andrade.setCollider('rectangle', 10, 0, 40, 60)
  mula.setCollider('rectangle', 0, 0, 40, 60)
  andrade.debug = mouseIsPressed
  mula.debug = mouseIsPressed

  // MOVIMENTAÇÃO ANDRADE
if(life_lv3 > 2000){
  if(andrade_trigger%25 == 0){
    andrade.changeAnimation('third_boss01_direita')
    andrade.setSpeed(3)
  }
  if(andrade_trigger%50 == 0){
    andrade.changeAnimation('third_boss01_esquerda')
    andrade.setSpeed(-3)
  }
  if(andrade_trigger%75 == 0){
    andrade.setSpeed(5)
  }
  if(andrade_trigger%100 == 0){
    var estrela_trigger = createSprite(andrade.position.x, andrade.position.y);
    estrela_trigger.addImage(estrelaImage);
    estrela_trigger.setSpeed(3, random()*120);
    estrela_trigger.life = 150;
    estrela.add(estrela_trigger);
    andrade.setSpeed(-5)
  }
  if(andrade_trigger%200 == 0){
    var estrela_trigger = createSprite(andrade.position.x, andrade.position.y);
    estrela_trigger.addImage(estrelaImage);
    estrela_trigger.setSpeed(3, random()*120);
    estrela_trigger.life = 150;
    estrela.add(estrela_trigger);
    andrade.setSpeed(0)
  }
  if(andrade_trigger%300 == 0){
    var poste_trigger = createSprite(andrade.position.x, andrade.position.y);
    poste_trigger.addImage(posteImage);
    poste_trigger.setSpeed(3, 90);
    poste_trigger.life = 100;
    poste.add(poste_trigger);
    andrade.setSpeed(0)
  }
  if(andrade_trigger%500 == 0){
    var bicicleta_trigger = createSprite(0, 190);
    bicicleta_trigger.addImage(bicicletaImage);
    bicicleta_trigger.setSpeed(3, 0);
    bicicleta_trigger.life = 150;
    bicicleta.add(bicicleta_trigger);
    andrade.setSpeed(0)
  }
  if(andrade.position.x > 350){
    andrade.position.x = 0
  }
  if(andrade.position.x < -10){
    andrade.position.x = 316
  }
  // TIRA VIDA DO ANDRADE
  if(bullets.overlap(andrade)){
    life_lv3--
  }
}

// MOVIMENTAÇÃO MULA
if(life_lv3 <= 2000 && life_lv3 > 0){
  if(mula_trigger%20 == 0){
    mula.changeAnimation('third_boss02_direita')
    mula.setSpeed(3)
  }
  if(mula_trigger%40 == 0){
    var garrafa_trigger = createSprite(mula.position.x, mula.position.y);
    garrafa_trigger.addImage(garrafaImage);
    garrafa_trigger.setSpeed(3, 90);
    garrafa_trigger.life = 100;
    garrafa.add(garrafa_trigger);
    mula.changeAnimation('third_boss02_esquerda')
    mula.setSpeed(-3)
  }

  if(mula_trigger%100 == 0){
    var estrela_trigger = createSprite(andrade.position.x, andrade.position.y);
    estrela_trigger.addImage(estrelaImage);
    estrela_trigger.setSpeed(3, random()*120);
    estrela_trigger.life = 150;
    estrela.add(estrela_trigger);

    var estrela_trigger = createSprite(andrade.position.x, andrade.position.y);
    estrela_trigger.addImage(estrelaImage);
    estrela_trigger.setSpeed(3, random()*120);
    estrela_trigger.life = 150;
    estrela.add(estrela_trigger);
    mula.setSpeed(0)
  }
  if(mula_trigger%500 == 0){
    var estacas_trigger = createSprite(178,194);
    estacas_trigger.addImage(estacasImage);
    estacas_trigger.setSpeed(0);
    estacas_trigger.life = 150;
    estrela.add(estacas_trigger);
  }
  if(mula.position.x > 350){
    mula.position.x = 0
  }
  if(mula.position.x < -10){
    mula.position.x = 316
  }

  // ----------------------------- ESPECIAL ---------------------------
  especial_appear++
  if(especial_appear%500 == 0) {
    var especial_trigger = createSprite(Math.random()*316, 170);
    especial_trigger.addImage(especialImage);
    especial_trigger.life = 300;
    especial.add(especial_trigger);
  }

  if(especial.overlap(spr_walk)) {
  especial.removeSprites()
  especial_time = window.setInterval(function() {
    if (keyWentDown(' ')) {
      var algema_trigger = createSprite(spr_walk.position.x, spr_walk.position.y);
      algema_trigger.addImage(algemaImage);
      algema_trigger.setSpeed(3, -90);
      algema_trigger.life = 40;
      algema.add(algema_trigger);
    }
    }, 1);

      window.setTimeout(function() {
      clearInterval(especial_time);
    }, 5000);
  }
  if(algema.overlap(mula)){
    life_lv3 = life_lv3 - 10
  }
}

  // VIDA BOSS
  if(life_lv3 <= 4000 && life_lv3 > 3800){
    image(boss_life_full, 149,199)
  } else {
    if(life_lv3 <= 3800 && life_lv3 > 3600){
      image(boss_life01, 149,199)
    } else {
      if(life_lv3 <= 3600 && life_lv3 > 3400){
        image(boss_life02, 149,199)
      } else {
        if(life_lv3 <= 3400 && life_lv3 > 3200){
          image(boss_life03, 149,199)
        } else {
          if(life_lv3 <= 3200 && life_lv3 > 3000){
            image(boss_life04, 149,199)
          } else {
            if(life_lv3 <= 3000 && life_lv3 > 2800){
              image(boss_life05, 149,199)
            } else {
              if(life_lv3 <= 2800 && life_lv3 > 2600){
                image(boss_life06, 149,199)
              } else {
                if(life_lv3 <= 2600 && life_lv3 > 2400){
                  image(boss_life07, 149,199)
                } else {
                  if(life_lv3 <= 2400 && life_lv3 > 2200){
                    image(boss_life08, 149,199)
                  } else {
                    if(life_lv3 <= 2200 && life_lv3 > 2000){
                      image(boss_life09, 149,199)
                    } else {
                      if(life_lv3 <= 2000 && life_lv3 > 1800){
                        image(boss_life10, 149,199)
                        andrade.remove()
                      } else {
                        if(life_lv3 <= 1800 && life_lv3 > 1600){
                          image(boss_life11, 149,199)
                        } else {
                          if(life_lv3 <= 1600 && life_lv3 > 1400){
                            image(boss_life12, 149,199)
                          } else {
                            if(life_lv3 <= 1400 && life_lv3 > 1200){
                              image(boss_life13, 149,199)
                            } else {
                              if(life_lv3 <= 1200 && life_lv3 > 1000){
                                image(boss_life14, 149,199)
                              } else {
                                if(life_lv3 <= 1000 && life_lv3 > 800){
                                  image(boss_life15, 149,199)
                                } else {
                                  if(life_lv3 <= 800 && life_lv3 > 600){
                                    image(boss_life16, 149,199)
                                  } else {
                                    if(life_lv3 <= 600 && life_lv3 > 400){
                                      image(boss_life17, 149,199)
                                    } else {
                                      if(life_lv3 <= 400 && life_lv3 > 200){
                                        image(boss_life18, 149,199)
                                      } else {
                                        if(life_lv3 <= 200 && life_lv3 > 0){
                                          image(boss_life19, 149,199)
                                        } else {
                                          if(life_lv3 <= 0){
                                            image(boss_life20, 149,199)
                                            mula.remove()
                                            fase4 = true
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // COISAS COLIDEM NO PERSONAGEM
  if(estrela.overlap(spr_walk)){
    health_heroi = health_heroi - 2
  }
  if(bicicleta.overlap(spr_walk)){
    health_heroi = health_heroi - 2
  }
  if(poste.overlap(spr_walk)){
    health_heroi = health_heroi - 4
  }
  if(garrafa.overlap(spr_walk)){
    health_heroi = health_heroi - 3
  }
  if(estacas.overlap(spr_walk)){
    health_heroi = health_heroi - 0.5
  }

}

function game_over(){
  background(over)

  // REMOVE MUSICAS
  music1 = 0
  music2 = 0
  music3 = 0
  music1--
  music2--
  music3--
  if(music1 < 0) {
    music_level01.stop()
  }
  if(music2 < 0) {
    music_level02.stop()
  }
  if(music3 < 0){
    music_level03.stop()
  }
  // QUANDO APERTA ENTER VOLTA AO INÍCIO DO JOGO
  if(keyDown('ENTER')){
    // VOLTA AS QUANTIDADES DE VIDA
    life_heroi = 5
    // RETORNA PERSONAGEM A POSIÇÃO
    spr_walk.position.x = 170
    // RETORNA A 1 FASE
    fase1 = true
    fase2 = false
    fase3 = false
    // RETORNA A VIDA DOS INIMIGOS
    cont = 2000
    life_lv2 = 2000
    life_lv3 = 4000
  }
}


//FUNÇÕES QUE REPETEM
function papaco(){
  if(keyDown('RIGHT_ARROW') && spr_walk.position.x < 338) {
    if(keyDown('RIGHT_ARROW')){
      spr_walk.changeAnimation('anim_walk_right')
      spr_walk.velocity.x = 2
      spr_walk.setCollider("rectangle", 0, 17, 25, 62)
    }
    if(keyDown('UP_ARROW')){
      spr_walk.changeAnimation('anim_static_jump_right')
      spr_walk.velocity.x = 2
      spr_walk.setCollider("rectangle", 0, -20, 25, 70)
    }
    if(keyDown('DOWN_ARROW') && keyDown('RIGHT_ARROW')){
      spr_walk.changeAnimation('anim_roll_right')
      spr_walk.velocity.x = 3
      spr_walk.setCollider("rectangle", 0, 30, 35, 35)
    }
  } else {
      spr_walk.changeAnimation('anim_static_right')
      spr_walk.velocity.x = 0
      spr_walk.setCollider("rectangle", 0, 20, 25, 55)
    }
  // DIRECIONAIS DE MOVIMENTO PARA O LADO ESQUERDO
  if(keyDown('LEFT_ARROW') && spr_walk.position.x > 15){
    if(keyDown('LEFT_ARROW')){
      spr_walk.changeAnimation('anim_walk_left')
      spr_walk.velocity.x = -2
      spr_walk.setCollider("rectangle", 0, 17, 25, 62)
    }
    if(keyDown('DOWN_ARROW') && keyDown('LEFT_ARROW')){
      spr_walk.changeAnimation('anim_roll_left')
      spr_walk.velocity.x = -3
      spr_walk.setCollider("rectangle", 0, 30, 35, 35)
    }
    if(keyDown('UP_ARROW')){
      spr_walk.changeAnimation('anim_static_jump_left')
      spr_walk.velocity.x = -2
      spr_walk.setCollider("rectangle", 0, -20, 25, 70)
    }
  }

  //BALA
  if (keyWentDown(' ')) {
    var bullet = createSprite(spr_walk.position.x, spr_walk.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(3, -90);
    bullet.life = 35;
    bullets.add(bullet);
  }

// VIDA DO PERSONAGEM
// HP
  if(health_heroi <= 500 && health_heroi > 400) {
    image(hp_heroi01, 0, 184)
  } else {
    if(health_heroi <= 400 && health_heroi > 300) {
      image(hp_heroi02, 0, 184)
    } else {
      if(health_heroi <= 300 && health_heroi > 200) {
        image(hp_heroi03, 0, 184)
      } else {
        if(health_heroi <= 200 && health_heroi > 100) {
          image(hp_heroi04, 0, 184)
        } else {
          if(health_heroi <= 100 && health_heroi > 0) {
            image(hp_heroi05, 0, 184)
          } else {
            if(health_heroi <= 0) {
              image(hp_heroi06, 0, 184)
              life_heroi--
              health_heroi = 500
            }
          }
        }
      }
    }
  }
// LP
if(life_heroi == 5) {
  image(lp_heroi01, 0, 184)
} else {
  if(life_heroi == 4) {
    image(lp_heroi02, 0, 184)
  } else {
    if(life_heroi == 3) {
      image(lp_heroi03, 0, 184)
    } else {
      if(life_heroi == 2) {
        image(lp_heroi04, 0, 184)
      } else {
        if(life_heroi == 1) {
          image(lp_heroi05, 0, 184)
        } else {
          if(life_heroi <= 0) {
            image(lp_heroi06, 0, 184)
            health_heroi = 0
            game_over()
          }
        }
      }
    }
  }
}
}

function poderes(){
  // ----------------- POWER UPS ----------------------------
  power_ups++
  // ---------------------- SHOTGUN -------------------------
  if(power_ups%1000 == 0) {
    var shotgun_trigger = createSprite(Math.random()*316, 170);
    shotgun_trigger.addImage(shotgunImage);
    shotgun_trigger.life = 300;
    shotgun.add(shotgun_trigger);
  }

  if(shotgun.overlap(spr_walk)) {
  shotgun.removeSprites()
  shotgun_time = window.setInterval(function() {
    if (keyWentDown(' ')) {
      var bullet = createSprite(spr_walk.position.x, spr_walk.position.y);
      bullet.addImage(bulletImage);
      bullet.setSpeed(3, -70);
      bullet.life = 35;
      bullets.add(bullet);
    }
      if (keyWentDown(' ')) {
        var bullet = createSprite(spr_walk.position.x, spr_walk.position.y);
        bullet.addImage(bulletImage);
        bullet.setSpeed(3, -110);
        bullet.life = 35;
        bullets.add(bullet);
      }
    }, 1);

      window.setTimeout(function() {
      clearInterval(shotgun_time);
    }, 5000);
  }
  // ---------------------- BARRA DE VIDA ------------------------------

  if(power_ups%2000 == 0) {
    var health_up_trigger = createSprite(Math.random()*316, 170);
    health_up_trigger.addImage(health_upImage);
    health_up_trigger.life = 300;
    health_up.add(health_up_trigger);
  }
  if(health_up.overlap(spr_walk)){
    if(health_heroi < 400){
      health_heroi = health_heroi + 50
      health_up.removeSprites()
    } else {
      health_heroi = health_heroi + 0
      health_up.removeSprites()
    }
  }
  // ---------------------- NUMERO DE VIDAS -----------------------------
  if(power_ups%3000 == 0) {
    var life_up_trigger = createSprite(Math.random()*316, 170);
    life_up_trigger.addImage(life_upImage);
    life_up_trigger.life = 300;
    life_up.add(life_up_trigger);
  }
  if(life_up.overlap(spr_walk)){
    if(life_heroi < 5){
      life_heroi = life_heroi + 1
      life_up.removeSprites()
    } else {
      life_heroi = life_heroi + 0
      life_up.removeSprites()
    }
  }

  // ---------------------- DANO AUMENTADO ------------------------------
  if(power_ups%4000 == 0) {
    var damage_up_trigger = createSprite(Math.random()*316, 170);
    damage_up_trigger.addImage(damage_upImage);
    damage_up_trigger.life = 300;
    damage_up.add(damage_up_trigger);
  }
  if(damage_up.overlap(spr_walk)) {
  damage_up.removeSprites()
  damage_up_time = window.setInterval(function() {
    if(bullets.overlap(ursal)){
      life_lv2 = life_lv2 - 0.25
    }
    }, 1);

      window.setTimeout(function() {
      clearInterval(damage_up);
    }, 5000);
  }
}
