
$("#numvalue").on("change paste keyup", function() {
   var result = FibonacciSequence($(this).val());
   $("#facval").val(result);  
});


function FibonacciSequence(x){
   var arr = [1,1];
   var maxval = 0;  
	for (var i = 2;  i < x; i++){
		maxval = arr[i -1]+arr[i - 2];
		   if(maxval>=x){
			   break;
			}
		arr.push(maxval);
	}
 return arr;
}