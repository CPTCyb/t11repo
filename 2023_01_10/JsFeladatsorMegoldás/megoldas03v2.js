<script>
let also=Number(prompt("Add meg az kisebbik szám értékét:"));
let felso=Number(prompt("Add meg a nagyobb szám értékét:"));
let megvan=false;
let generaltParoSzam=0;
while(megvan==false)
{
	generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
	if(generaltParosSzam%2==0){
    	megvan=true;
    }
}
document.write(`A generált random szám: ${generaltParosSzam}`);
</script>