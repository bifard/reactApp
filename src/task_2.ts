interface IMyHometask {
  howIDoIt: string;
  simeArray: Array<string|number>;
  withData: Array<Object>;
}


const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
}