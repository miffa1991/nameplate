let main = document.getElementById("list_table"); //list table
let main_big = document.getElementById("list_table_big"); //list big table
let inputModel = document.getElementsByClassName("ch_c"); //model colection
let inputModelBig = document.getElementsByClassName("ch_c_big"); //model colection
let colorsBox = document.getElementById("colors_nameplate"); //colors container
let colorInput = document.getElementsByClassName("color_input"); //color collection

let colectionNameplateNumber = document.getElementsByClassName("ch_c"); //nameplate number collection
let colectionNameplateNumberBig = document.getElementsByClassName("ch_c_big"); //nameplate number collection


let tab1 = document.getElementById("tab_a1"); //tab1
let tab2 = document.getElementById("tab_a2"); //tab2

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);

    for (let i = 0; i < Object.keys(myObj.table).length; i++) {
      //задаем ячейкам поля координаты
      //переменные для маленьких табличек

      if (i == 0) {
        //задаем адрес макета первой таблички
        document.getElementById("big_img").src = myObj.table[i].img_model;
      }

      let preview_wrap = document.createElement("div");
      let label = document.createElement("label");
      let img = document.createElement("img");
      let sw_a_in = document.createElement("span");
      let sw_a_title = document.createElement("span");
      let sw_a_thumb = document.createElement("span");
      //контент для маленьких табличек
      main.appendChild(preview_wrap);
      preview_wrap.classList.add("bi6_item");
      preview_wrap.appendChild(label);
      label.setAttribute("for", `ch_c${i}`);
      label.innerHTML = `<input type='radio' onclick='changeSize()' data-number='${i}' class='ch_c' name='ch_c' ${
        i == 0 ? "checked" : ""
      } id='ch_c${i}'>`;
      label.appendChild(sw_a_in);

      sw_a_in.appendChild(sw_a_thumb);
      sw_a_thumb.appendChild(img);
      sw_a_in.appendChild(sw_a_title);
      sw_a_thumb.classList.add("sw_a_thumb");
      sw_a_in.classList.add("sw_a_in");
      sw_a_title.classList.add("sw_a_title");
      label.classList.add("switch_a");
      img.src = myObj.table[i].img_preview;
      sw_a_title.textContent = myObj.table[i].size_small;
      label.onclick = changeModelPlate;

      if (inputModel[i].checked == true) {
        document.getElementById("big_img").src = myObj.table[i].img_model;
      }

      //переменные для большых табличек
      let preview_wrap_big = document.createElement("div");
      let label_big = document.createElement("label");
      let img_big = document.createElement("img");
      let sw_a_in_big = document.createElement("span");
      let sw_a_title_big = document.createElement("span");
      let sw_a_thumb_big = document.createElement("span");

      //контент для большых табличек
      main_big.appendChild(preview_wrap_big);
      preview_wrap_big.classList.add("bi6_item");
      preview_wrap_big.appendChild(label_big);
      label_big.setAttribute("for", `ch_d${i}`);
      label_big.innerHTML = `<input type='radio' onclick='changeSize()' data-number='${i}' class='ch_c_big' name='ch_c_big' ${
        i == 0 ? "checked" : ""
      } id='ch_d${i}'>`;
      label_big.appendChild(sw_a_in_big);

      sw_a_in_big.appendChild(sw_a_thumb_big);
      sw_a_thumb_big.appendChild(img_big);
      sw_a_in_big.appendChild(sw_a_title_big);

      sw_a_thumb_big.classList.add("sw_a_thumb");
      sw_a_in_big.classList.add("sw_a_in");
      sw_a_title_big.classList.add("sw_a_title");
      label_big.classList.add("switch_a");
      label_big.onclick = changeModelPlateBig;

      img_big.src = myObj.table[i].img_preview;
      sw_a_title_big.textContent = myObj.table[i].size_big;

      if (inputModelBig[i].checked == true) {
        document.getElementById("big_img").src = myObj.table[i].img_model;
        document.getElementById("big_img_container").className =
          myObj.table[i].class; // add class main img
      }
    }

    function changeModelPlate() {
      //model small img
      for (let i = 0; i < inputModel.length; i++) {
        if (inputModel[i].checked == true) {
          document.getElementById("big_img").src = myObj.table[i].img_model;
          document.getElementById("big_img_container").className =
            myObj.table[i].class; // add class main img
        }
      }
    }
    function changeModelPlateBig() {
      // model big img
      for (let i = 0; i < inputModelBig.length; i++) {
        if (inputModelBig[i].checked == true) {
          document.getElementById("big_img").src = myObj.table[i].img_model;
        }
      }
    }
    for (let i = 0; i < Object.keys(myObj.colors).length; i++) {
      // write colors with json

      let label_color = document.createElement("label");
      let div_color = document.createElement("div");
      label_color.setAttribute("for", `idc${i}`);
      label_color.innerHTML = `<input type='radio' class='color_input' name='ch_a' ${
        i == 1 ? "checked" : ""
      } id='idc${i}'>`;
      div_color.style.backgroundColor = myObj.colors[i].color[0];

      label_color.appendChild(div_color);
      label_color.classList.add("custom_radio");
      label_color.onclick = changeColorPlate;
      colorsBox.appendChild(label_color);
      if (colorInput[i].checked == true) {
        document.getElementById("big_img").style.backgroundColor =
          myObj.colors[i].color[0];
      }
    }

    function changeColorPlate() {
      // background color main img
      for (let i = 0; i < colorInput.length; i++) {
        if (colorInput[i].checked == true) {
          document.getElementById("big_img").style.backgroundColor =
            myObj.colors[i].color[0];
        }
      }
    }
  }
};
xmlhttp.open("GET", "json_nameplate.json", true);
xmlhttp.send();



function changeSize() { //click tabs and nameplates 

  let checkedNumber = 0;

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let myObj = JSON.parse(this.responseText);
      if (isVisible(tab1)) {

        for (let i = 0; i < colectionNameplateNumber.length; i++) {
          if (colectionNameplateNumber[i].checked == true) {
            checkedNumber = colectionNameplateNumber[i].getAttribute('data-number');
          }
        }

        document.getElementById("size_main").textContent =
          myObj.table[checkedNumber].size_small;
      }

      if (isVisible(tab2)) {
        
        for (let i = 0; i < colectionNameplateNumberBig.length; i++) {
          if (colectionNameplateNumberBig[i].checked == true) {
            checkedNumber = colectionNameplateNumberBig[i].getAttribute('data-number');
          }
        }

        document.getElementById("size_main").textContent =
          myObj.table[checkedNumber].size_big;
      }
    }
  };

  xmlhttp.open("GET", "json_nameplate.json", true);
  xmlhttp.send();
  
}
  

function streetChange() {
  document.getElementById("street").textContent = document.getElementById(
    "id1"
  ).value;
}

function streetNameChange() {
  document.getElementById("streetName").textContent = document.getElementById(
    "id2"
  ).value;
}

function streetNumberChange() {
  document.getElementById("streetNumber").textContent = document.getElementById(
    "id3"
  ).value;
}

function drillingHolesPrice() {
  if(document.getElementById("id19").checked == true ){
    document.getElementById("drillingHoles").style.display = "table-row";
    
  } else {
    document.getElementById("drillingHoles").style.display = "none";
  }
}
drillingHolesPrice();

function isVisible(elem) {
  //проверка видимости елемента
  return elem.offsetWidth > 0 || elem.offsetHeight > 0;
}
