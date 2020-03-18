let startSpace = /^(\s){2,}/;
let endSpace = /\s+$/;
let result = hello.replace(wsRegex, "").replace(endRegex, "");

// OR

let wsRegex = /^(\s+) | (\s+)$/g;
let result = hello.replace(wsRegex, "");
