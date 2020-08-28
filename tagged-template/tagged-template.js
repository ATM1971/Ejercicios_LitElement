const person = 'Amet';
const age = 24;

function taggedTemplate(strings, personExpression, ageExpression) {
  if (ageExpression < 18) {
    return `${personExpression} no puede pasar`;
  }

  return `${personExpression} puede pasar`;
}

const output = taggedTemplate`${person} tiene ${age}`;

console.log(output);