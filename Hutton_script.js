function favEvents(){
	document.write("<ol>");
		document.write("<li> Rwanada Blood Bath - 1994 </li>");
		document.write("<li> Indonesia gained Independance - 1949</li>");
		document.write("<li> England gained Star Wars - 1977</li>");
	document.write("</ol>");
}

function rsvp(e){

		 var name = document.getElementById("CName");
		 var email = document.getElementById("CEmail");
		 var phone = document.getElementById("CPhone");
		 var age = document.getElementById("CAge");
		 var bday = document.getElementById("CBday");
		 var color = document.getElementById("CColor");
		 var game = document.getElementById("CGame");
		 (name.value && email.value && phone.value && age.value && bday.value && color.value && game.value) ? alert("thank you!") : alert("please fill out first fieldset"); 
		 (name.value && email.value && phone.value && age.value && bday.value && color.value && game.value) ? alert("thank you!") : e.preventDefault();

}


function activities(mypic){
		alert(mypic);
}

var title = ["pc-part", "name", "price", "description", "link"];
var pcpart = ["CPU", "Motherboard", "Memory", "Storage", "Storage 2", "Case", "PSU", "VideoCard"];
var names = ["AMD Ryzen 7 5800x", "MSI MAG B550 ATX M4", "G.Skill Trident DDR4 16GB", "Western Digital Blue 500GB 2.5SSD", "ADATA 1TB NVME M2 SSD", "NZXT H510 ATX", "Corsair RM 850 W 80+ gold", "MSI Geforce GTX 3080 10GB"];
var price = ["$525.65", "$179.99", "$139.99", "$63.99", "$104.99", "$149.99", "$140.93", "$699.99"];
var desc = ["AMD's new Ryzen 7 with new 8-core processor", "MSI motherboard with various ports", "16GB memory in DDR4 with RGB",
			"500GB SSD 2.5", "1TB SSD m.2", "Mid tower ATX case by NZXT", "GOLD 850W PSU", "mid range Gcard from nvida"];
var links = ["www.Bestbuy.com", "www.Amazon.com", "www.Newegg.com", "www.Amazon.com", "www.Bhpphoto.com", "www.Amazon.com", "www.Bestbuy.com", "www.Amazon.com"];


function addColumnHeaders(){
	var i = 0;
	while (i < 5 ){ 
		document.getElementsByTagName("th")[i].innerHTML = title[i];
		i++;
		 }
}

function wishList() {
var pargs = "";

for( var i = 0; i < 8; i++) {
	var cell = i + 1;
	var tableCell = document.getElementById("a" + cell);
	pargs = tableCell.getElementsByTagName("p");
	pargs[0].innerHTML = pcpart[i];
}

for( var i = 0; i < 8; i++) {
	var cell = i + 1;
	var tableCell = document.getElementById("b" + cell);
	pargs = tableCell.getElementsByTagName("p");
	pargs[0].innerHTML = names[i];
}

for( var i = 0; i < 8; i++) {
	var cell = i + 1;
	var tableCell = document.getElementById("c" + cell);
	pargs = tableCell.getElementsByTagName("p");
	pargs[0].innerHTML = price[i];
}

for( var i = 0; i < 8; i++) {
	var cell = i + 1;
	var tableCell = document.getElementById("d" + cell);
	pargs = tableCell.getElementsByTagName("p");
	pargs[0].innerHTML = desc[i];
}

for( var i = 0; i < 8; i++) {
	var cell = i + 1;
	var tableCell = document.getElementById("e" + cell);
	pargs = tableCell.getElementsByTagName("p");
	pargs[0].innerHTML = links[i];
}
}


function setUpPage(){
	addColumnHeaders();
	wishList();
}

 	if(window.addEventListener){
   	window.addEventListener("load", setUpPage, false);
   } else if (window.attachEvent) {
   	window.attachEvent("onload", setUpPage);
   }