//Setting up my firebase database in my application
var firebaseConfig = {
	apiKey: "AIzaSyCtRNmmVhqdH3xrEAtOZ8zKE-sLSKS21Sw",
	authDomain: "classapp-1b61b.firebaseapp.com",
	databaseURL: "https://classapp-1b61b.firebaseio.com",
	projectId: "classapp-1b61b",
	storageBucket: "",
	messagingSenderId: "500229754372",
	appId: "1:500229754372:web:cfc2e76462bb9a7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//creating a function that sets the num to 0 in the firebase database as well as the dom
var setNumberToZeroInFirebase = () => {
	var num = 0;
	$("#num").text(num);

	firebase.database().ref('number').set(num);
}
//setNumberToZeroInFirebase();

//Getting the current value of the "number" reference from the firebase database
firebase.database().ref('number').on('value', function(snapshot) {
	//logging the snapshot.val()
	//snapshot.val() is representative as the value of the data from the database
	console.log(snapshot.val())
	//Setting that number as the text for the #num tag
	$("#num").text(snapshot.val())
});

//When the #increment-button is clicked on
$("#increment-button").click(function(){
	//creating a variable and giving it no value
	var num;

	//Getting the current value of the "number" reference from the firebase database
	firebase.database().ref('number').on('value', function(snapshot) {
		//reassigning the num variable to equal the value of the number reference from the database
		console.log(num)
		num = snapshot.val();
		console.log(num)
	});
	//we got that snapshot.val() number outside of the function here using variable re-assigning
	console.log(num)
	//incrementing that number value by 1
	num++;
	//setting that new number value in the database
	firebase.database().ref('number').set(num)
});

//When the #decrement-button is clicked on
$("#decrement-button").click(function(){
	//creating a variable and giving it no value
	var num;
	//Getting the current value of the "number" reference from the firebase database
	firebase.database().ref('number').on('value', function(snapshot) {
		//reassigning the num variable to equal the value of the number reference from the database
		console.log(num)
		num = snapshot.val();
		console.log(num)
	});
	//we got that snapshot.val() number outside of the function here using variable re-assigning
	console.log(num)
	//decrementing that number value by 1
	num--;
	//setting that new number value in the database
	firebase.database().ref('number').set(num)
});
