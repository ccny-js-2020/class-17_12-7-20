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

//Declaring a variable that will be re-assigned
var employees;

//retrieving the employees ref from my firebase database
firebase.database().ref("employees").on('value', function(snapshot) {
	//re-assigning the employees variable to equal the value of the employees reference from the firebase database
	employees = snapshot.val();
	console.log(employees)
});

//if you try to get the value of employees right when the page loads, it will come in as undefined
console.log(employees);

//at .1 seconds after the browser loads, log the employees variable
setTimeout(function(){
	console.log(employees)
}, 100);

//at .4 seconds after the browser loads, log the employees variable
setTimeout(function(){
	console.log(employees)
}, 400);

/*
	This is showing that the firebase database takes about 4/10 of a second to retrieve an item from the database
*/
