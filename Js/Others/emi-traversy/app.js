document.getElementById('loan-form').addEventListener('submit',function(e){
	document.getElementById('results').style.display = 'none';
	document.getElementById('loading').style.display = 'block';	


	setTimeout(calculateResults,2000);

	e.preventDefault();
});

function calculateResults(){
	

	const principal = document.getElementById('amount');
	const rate  = document.getElementById('interest');
	const time  = document.getElementById('years');


	const monthlyPayment  = document.getElementById('monthly-payment');
	const totalPayment  = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	const p = parseFloat(principal.value);
	const r = parseFloat(rate.value)/100/12;
	const t = parseFloat(time.value)*12;	


	const x =Math.pow(1+r,t);
 	const emi = p*r*x/(x-1);


 	if(isFinite(emi)){
 		monthlyPayment.value = emi.toFixed(2);
 		totalPayment.value = (emi * t).toFixed(2);
 		totalInterest.value = ((emi * t)-p).toFixed(2); 

 		document.getElementById('results').style.display='block';
		document.getElementById('loading').style.display='none'; 		
	}else{
		showError("Please Check input Fields");
	}

}


function showError(error){
	document.getElementById('results').style.display = 'none';
	document.getElementById('loading').style.display = 'none';	

	const errorDiv = document.createElement('div');
	const card = document.querySelector('.card');


	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));

	card.insertBefore(errorDiv,card.firstChild);
	//insert errorDiv in card before firstChild of card

	setTimeout(clearError,3000);
}

function clearError(){
	document.querySelector('.alert').remove();
}