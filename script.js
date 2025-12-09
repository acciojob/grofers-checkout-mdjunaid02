const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table=document.querySelector("table");
	const prices=document.querySelectorAll(".price");

	let sum=0;

	prices.forEach(cell =>{
		sum+=Number(cell.innerText);
	});

	const oldRow=document.getElementById("totalRow");
	if(oldRow) oldRow.remove();

	const tr=document.createElement("tr");
	tr.id="totalRow";

	const td=document.createElement("td");
	td.colSpan=2;
	td.innerText=sum;

	tr.appendChild(td);
	table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

