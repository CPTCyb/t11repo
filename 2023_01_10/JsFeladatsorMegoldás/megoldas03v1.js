<script>
let also=Number(prompt("Add meg az kisebbik szám értékét:"));
let felso=Number(prompt("Add meg a nagyobb szám értékét:"));
let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
if(generaltParosSzam%2==0){
	document.write("A generált random szám:"+generaltParosSzam);
}
else if(generaltParosSzam!=felso)
{
	document.write(`A generált random szám: ${generaltParosSzam+1}`);
}
else{

	document.write(`A generált random szám: ${generaltParosSzam-1}`);
}
</script>