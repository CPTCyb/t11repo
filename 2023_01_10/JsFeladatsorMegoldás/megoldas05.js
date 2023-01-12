let vizsgalandoSzam=Number(prompt("Add meg a vizsgálandó számot:"));
let oszto=Number(prompt("Add meg a vizsgálni kívánt osztót:"));
if(vizsgalandoSzam%oszto==0){
	document.write(`A(z) ${oszto} osztója a ${vizsgalandoSzam} értéknek`);
}
else{
	
	document.write(`A(z) ${oszto} NEM osztója a ${vizsgalandoSzam} értéknek`);
}