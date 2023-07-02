function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRaund: 0,
      winner: null,
      logs: []
    };
  },
  computed: {
    monsterBar() {
      return { width: `${this.monsterHealth}%` };
    },
    playerBar() {
      return { width: `${this.playerHealth}%` };
    }

  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw"
        this.playerHealth = 0;
        this.monsterHealth = 0;
      } else if (value <= 0) {
        this.winner = "Monster"
        this.playerHealth = 0;
      }

    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "Draw"
        this.playerHealth = 0;
        this.monsterHealth = 0;
      } else if (value <= 0) {
        this.winner = "Player"
        this.monsterHealth = 0;
      }
    }
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRaund = 0;
      this.winner = null;
      this.log = []
    },
    attackMonster() {
      this.currentRaund++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLoge("Player","attack",attackValue);

    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLoge("Monster","attack",attackValue);

    },
    specialAttack() {
      this.currentRaund++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLoge("Player","attack",attackValue);

    },
    healPlayer() {
      this.currentRaund++;
      const healValue = getRandomValue(8, 20);

      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
      this.addLoge("Player","heal",healValue);
    },
    addLoge(who, action, value) {
      this.logs.unshift({ who, action, value });

    },
    surrender(){
      this.winner="Monster";
    }

  },




});

app.mount("#game");