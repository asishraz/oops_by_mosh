const human = {
  isHuman: false,
  showDetails: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHumna}`);
  },
};

const me = Object.create(human);

me.name = "gareeb";

me.isHuman = true;
me.showDetails();
