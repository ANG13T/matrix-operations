
$('#selectOperation').change(function(){
   var operator =  $(this).val();
   console.log(operator)
   if(operator === 'Add'){
       $('#operatorSymbol').html('+');
   }
   else if(operator === 'Subtract'){
       $('#operatorSymbol').html('-')
   }

   else if(operator === 'Transpose'){
    $('#operatorSymbol').html('')
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

    else if(operator === 'Transpose'){
        matrix1 = parseMatrix(matrix1);
        console.log(transposingMatrix(matrix1))
        var result = printMatrix(transposingMatrix(matrix1))
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
      m1[i] = m1[i].trim();

      let oldRow1 = m1[i].split(' ') //gets each element
      let oldRow2 = m2[i].split(' ')
        for(let j =0; j < oldRow1.length; j++){ //loops through elements
            // oldRow1[j] = oldRow1[j].trim()
            // oldRow2[j] = oldRow2[j].trim()
           
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
        m1[i] = m1[i].trim();
        let oldRow1 = m1[i].split(' ');
        let oldRow2 = m2[i].split(' ');
            for(var j = 0; j < oldRow1.length; j++){ //loops through elements
                newRow += parseInt(oldRow1[j]) - parseInt(oldRow2[j]) + " "
            }
            newMatrix += newRow + "<br>"
    }
    return newMatrix;
}

//Transpose Matrix Function
function transposingMatrix(matrix){
    let newMatrix = [];
    for(var i = 0; i < matrix[0].length; i++){
      newMatrix.push([]) //creates an array of empty arrays
    }
  
    for(var i = 0; i < matrix.length; i++){
  
      for(var j = 0; j < matrix[0].length; j++){
         newMatrix[j].push(matrix[i][j])     
      }
    }
    return newMatrix;
  }
  
  //print the matrix stated in the above
  function printMatrix(matrix){
    for(var i = 0; i < matrix.length; i++){
      matrix[i] = matrix[i].join(" ");
    }
  
    matrix = matrix.join("<br>")
    return matrix;
  }

  function parseMatrix(strMat){
    var matrix = strMat.split("\n"); //splits it up based on new lines
    for(var i = 0; i < matrix.length; i++){
      matrix[i] = matrix[i].split(" ")
    }
    return matrix;
  
  }