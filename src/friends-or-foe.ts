function friend(friends: string[]): string[] {
  let returnArray = [];
  for (let name of friends) {
    if (name.length === 4) {
      returnArray.push(name);
    }
  }
  return returnArray;
}

export default friend;
