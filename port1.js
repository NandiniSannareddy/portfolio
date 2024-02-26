const menu= document.getElementById('menu');
const total= document.getElementById('total');
const close= documnet.getElementById('close');
function func1()
{
 total.style.left = (total.style.left === '0%' ? '-80%' : '0%');
 
}
function func2()
{
	total.style.left=(total.style.left === '-80%' ? '0%' : '-80%');
}