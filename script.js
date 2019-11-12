
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
    var matrix1 = $('#one').val();
    var matrix2 = $('#matrix2').val();
    // var mat1Rows = matrix1.split('\n');
    // var mat2Rows = matrix2.split('\n');
    var result = addMatrix(matrix1, matrix2)
    console.log(result);
    $('#result').html(result)
})

function addMatrix(m1, m2){
    m1 = m1.split('\n'); //rows
    m2 = m2.split('\n');
    let newMatrix = "";
    for(let i = 0; i < m1.length; i++){ //loops through rows
      let newRow = " "
      let oldRow1 = m1[i].split(' ')
      let oldRow2 = m2[i].split(' ')
        for(let j =0; j < oldRow1.length; j++){ //loops through elements
          newRow += parseInt(oldRow1[j]) + parseInt(oldRow2[j]) + " "
        }
        newMatrix += newRow + "<br>"
    }
    return newMatrix;
  }