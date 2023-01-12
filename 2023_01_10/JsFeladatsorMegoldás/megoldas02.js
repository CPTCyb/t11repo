<script>
let szam=prompt("Add meg a szám értékét:");
let hatvany=prompt("Add meg hanyadik hatványra akarod emelni:");
//var eredmeny=szam**hatvany;
var eredmeny=Math.pow(szam,hatvany);
document.write(`A ${szam}<sup>${hatvany}</sup> = ${eredmeny}`);
</script>