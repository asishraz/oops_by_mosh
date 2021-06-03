// todo  2 object HtmlElement and HtmlSelectElement
// todo HtmlSelectElement- will represent drop down list
// todo Prototypical inheritance between HSE and parent HE(HtmlElement)

// todo HE will have one method 'click' and in its prototype, one more method 'focus'

function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

// todo HSE
function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// * this will create a new object and set the prototype of that obj to the prototype of HtmlELement

// baseHE - lets say, this is the prototype of HE
// baseHE - obj with only one method 'focus' - line13

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

// the object which is return here, lets say baseHSE
// when we create an instance of HSE, its protoype will be baseHSE(which is an empty obj) and linked to baseHE

const he = new HtmlElement();

const hse = new HtmlSelectElement();
