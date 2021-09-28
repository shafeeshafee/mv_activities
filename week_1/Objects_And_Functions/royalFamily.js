class FamilyMember {
  constructor(name, parents) {
    this.name = name;
    this.parents = parents;
  }

  childOf() {
    let bothParents = this.parents;
    console.log(bothParents);
    return this.parents.map((item) => item.name).join(" & ");
  }
}

let kingGeorgeVI = new FamilyMember("King George VI");

let queenElizabeth = new FamilyMember("Queen Elizabeth");
let princePhillip = new FamilyMember("Prince Phillip", [
  queenElizabeth,
  kingGeorgeVI,
]);

console.log(princePhillip.childOf());
