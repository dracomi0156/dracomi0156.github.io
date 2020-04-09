let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc==='images/05-nyhvan.jpg'){
		myImage.setAttribute('src','images/01-lamp.jpg');
	} else{
		myImage.setAttribute('src','images/05-nyhvan.jpg');
	}
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Please enter your name.');
	if(!myName || myName === null) {
      setUserName();
    } else {
	  localStorage.setItem('name', myName);
	  myHeading.innerHTML = 'Hello, Denmark!, ' + myName;
  }
}

if(!localStorage.getItem('name')){
	setUserName();
} else{
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Hello, Denmark!, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}







