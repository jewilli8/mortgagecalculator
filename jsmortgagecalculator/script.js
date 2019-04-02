function getInfo(){
    var ma = document.getElementById('mortgageAmount').value;
    var interest = document.getElementById('interestRate').value / 100;
    var numberYears = document.getElementById('numYears').value;
    var result = Math.floor(ma * interest /12);
    document.getElementById('getstarted').hidden = true;
    document.getElementById('formgroup2').hidden = true;
    document.getElementById('result').innerHTML="<h1>Your Monthly payment will be $ " +result + ".</h1>";
    
}
document.getElementById('btn').addEventListener('click', getInfo);
