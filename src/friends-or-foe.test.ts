import friend from "./friends-or-foe";

test("return all names which have 4 letters", () => {
  expect(friend(["Ryan", "Kieran", "Mark"])).toEqual(["Ryan", "Mark"]);
});
