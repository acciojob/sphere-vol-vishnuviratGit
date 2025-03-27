document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    volume_sphere();
});
function volume_sphere() {
    //Write your code here
		let radiusInput=document.getElementById("radius").value;
	    let radius=parseFloat(radiusInput);
	   if(isNan(radius) || radius<0){
		   document.getElementById("volume").value="NaN";
		   return;
	   }
	  let volume=(4/3)*(Math.PI)*(radius**3);
	  document.getElementById("volume").value=volume.toFixed(4);
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
