

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');

function setup(){
  var button = createButton("click here to Swap");
  button.mousePressed(swap);

  }
  function swap(){
    [a, b] = [b, a];
    
    console.log("The value of a after swapping:" +a);
    console.log("The value of b after swapping:"+b);
    }
    

function draw()
{
}
