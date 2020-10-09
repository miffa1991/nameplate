

let main = document.getElementById('list_table');
let main_big = document.getElementById('list_table_big');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		//document.getElementById("list_table").innerHTML = myObj.table_1[0].img_preview;
		//console.log(Object.keys(myObj.table).length);

        for (let i = 0; i < Object.keys(myObj.table).length; i++) { //задаем ячейкам поля координаты
        	//переменные для маленьких табличек
        	let preview_wrap = document.createElement('div');
        	let label = document.createElement('label');
        	let img = document.createElement('img');
        	let sw_a_in = document.createElement('span');
        	let sw_a_title = document.createElement('span');
        	let sw_a_thumb = document.createElement('span');


					//переменные для большых табличек
					let preview_wrap_big = document.createElement('div');
					let label_big = document.createElement('label');
					let img_big = document.createElement('img');
					let sw_a_in_big = document.createElement('span');
					let sw_a_title_big = document.createElement('span');
					let sw_a_thumb_big = document.createElement('span');

					//контент для маленьких табличек
					main.appendChild(preview_wrap);
					preview_wrap.classList.add('bi6_item');
					preview_wrap.appendChild(label);
					label.setAttribute('for', `ch_c${i}`);
					label.innerHTML = `<input type='radio' name='ch_c' ${(i==0)?'checked':''} id='ch_c${i}'>`;
					label.appendChild(sw_a_in);
					
					sw_a_in.appendChild(sw_a_thumb);
					sw_a_thumb.appendChild(img);
					sw_a_in.appendChild(sw_a_title);

					sw_a_thumb.classList.add('sw_a_thumb');
					sw_a_in.classList.add('sw_a_in');
					sw_a_title.classList.add('sw_a_title');
					label.classList.add('switch_a');
					img.src = myObj.table[i].img_preview;
					sw_a_title.textContent = myObj.table[i].size_small;




					//контент для большых табличек
					main_big.appendChild(preview_wrap_big);
					preview_wrap_big.classList.add('bi6_item');
					preview_wrap_big.appendChild(label_big);
					label_big.setAttribute('for', `ch_d${i}`);
					label_big.innerHTML = `<input type='radio' name='ch_c_big' ${(i==0)?'checked':''} id='ch_d${i}'>`;
					label_big.appendChild(sw_a_in_big);
					
					sw_a_in_big.appendChild(sw_a_thumb_big);
					sw_a_thumb_big.appendChild(img_big);
					sw_a_in_big.appendChild(sw_a_title_big);

					sw_a_thumb_big.classList.add('sw_a_thumb');
					sw_a_in_big.classList.add('sw_a_in');
					sw_a_title_big.classList.add('sw_a_title');
					label_big.classList.add('switch_a');




					img_big.src = myObj.table[i].img_preview;
					sw_a_title_big.textContent = myObj.table[i].size_big;

				}


			}
		};
		xmlhttp.open("GET", "json_demo.json", true);
		xmlhttp.send();















		function streetChange() {
			document.getElementById("street").textContent = document.getElementById("id1").value;
		} 

		function streetNameChange() {
			document.getElementById("streetName").textContent = document.getElementById("id2").value;
		} 

		function streetNumberChange() {
			document.getElementById("streetNumber").textContent = document.getElementById("id3").value;
		} 