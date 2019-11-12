
$('#selectOperation').change(function(){
   var operator =  $(this).val();
   console.log(operator)
   if(operator === 'Add'){
       $('#operatorSymbol').html('+');
   }
   else if(operator === 'Subtract'){
       $('#operatorSymbol').html('-')
   }
   else{
       $('#operatorSymbol').html('x')
   }
});

$('#calculateButton').click(function(){
    var operator = $('#selectOperation').val();
    var matrix1 = $('#one').val();
    var matrix2 = $('#matrix2').val();
    // var mat1Rows = matrix1.split('\n');
    // var mat2Rows = matrix2.split('\n');
    if(operator === 'Add'){
        console.log('The operator is addition')
        var result = addMatrix(matrix1, matrix2)
    }
    else if(operator === 'Subtract'){
        console.log('The operator is subtraciton')
        var result = subtractMatrix(matrix1, matrix2)
    }
    else if(operator === 'Multiply'){
        console.log('The operator is the multiplication')
    }

    else{
        console.log('Operation has not been selected')
    }

    
    console.log(result);
    $('#result').html(result)
})

//Addition Matrix Code
function addMatrix(m1, m2){
    m1 = m1.split('\n'); //rows
    m2 = m2.split('\n');
    let newMatrix = "";
    for(let i = 0; i < m1.length; i++){ //loops through rows
      let newRow = " "
      let oldRow1 = m1[i].split(' ') //gets each element
      let oldRow2 = m2[i].split(' ')
        for(let j =0; j < oldRow1.length; j++){ //loops through elements
          newRow += parseInt(oldRow1[j]) + parseInt(oldRow2[j]) + " "
        }
        newMatrix += newRow + "<br>"
    }
    return newMatrix;
  }

//Subtraction Functionality
function subtractMatrix(m1, m2){
    m1 = m1.split('\n');
    m2 = m2.split('\n');
    let newMatrix = "";
    for(let i = 0; i < m1.length; i++){ //loops through rows
        let newRow = " ";
        let oldRow1 = m1[i].split(' ');
        let oldRow2 = m2[i].split(' ');
            for(var j = 0; j < oldRow1.length; j++){ //loops through elements
                newRow += parseInt(oldRow1[j]) - parseInt(oldRow2[j]) + " "
            }
            newMatrix += newRow + "<br>"
    }
    return newMatrix;
}