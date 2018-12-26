function takeANumber(line, newPerson){
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  return line.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if (line.length === 0)
    return "The line is currently empty."
  var currentLine = ''
  for (var i = 0; i < )
}