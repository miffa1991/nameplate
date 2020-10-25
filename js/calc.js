let main = document.getElementById("list_table"); //list table
let main_big = document.getElementById("list_table_big"); //list big table
let inputModel = document.getElementsByClassName("ch_c"); //model colection
let inputModelBig = document.getElementsByClassName("ch_c_big"); //model colection
let colorsBox = document.getElementById("colors_nameplate"); //colors container
let colorInput = document.getElementsByClassName("color_input"); //color collection
let materialBox =  document.getElementById("materialContainer");
let colectionNameplateNumber = document.getElementsByClassName("ch_c"); //nameplate number collection
let colectionNameplateNumberBig = document.getElementsByClassName("ch_c_big"); //nameplate number collection
let dopFunctional =  document.getElementById("dopFunctional");

let pricePlate = 0;
let tab1 = document.getElementById("tab_a1"); //tab1 container
let tab2 = document.getElementById("tab_a2"); //tab2 container

let tab1Button = document.getElementById("tab1Button"); //tab1
let tab2Button = document.getElementById("tab2Button"); //tab2

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    function plateRender(){
      for (let i = 0; i < Object.keys(myObj.table).length; i++) {
        //задаем ячейкам поля координаты
        //переменные для маленьких табличек

        if (i == 0) {
          //задаем адрес макета первой таблички
          document.getElementById("big_img").setAttribute('href', myObj.table[i].img_model);
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
        label.innerHTML = `<input type='radio' data-number='${i}' class='ch_c' name='ch_c' ${
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
        label.onclick = function() {
          changeModelPlate();
          changeColorPlate();
        };
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
        label_big.innerHTML = `<input type='radio' data-number='${i}' class='ch_c_big' name='ch_c_big' ${
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
        label_big.onclick = function() {
          changeModelPlateBig();
          changeColorPlate();
        };
        img_big.src = myObj.table[i].img_preview;
        sw_a_title_big.textContent = myObj.table[i].size_big;
        changeModelPlate();
        // changeModelPlateBig();
      }



      for (let i = 0; i < Object.keys(myObj.dopFunctionalPrice).length; i++) { //container dop functional
      
        let label_functional = document.createElement("label");
        label_functional.setAttribute("for", `idf${i}`);
        label_functional.innerHTML = `<input type='checkbox' data-num='${i}' class='func_input' name='drillingHolesPrice' ${
          i == 0 ? "" : ""
        } id='idf${i}'>${myObj.dopFunctionalPrice[i].functional[0]}`;
        label_functional.onclick = function(){
          changeModelPlate();
          changeModelPlateBig();
        }
        dopFunctional.appendChild(label_functional);
      }


    }
    plateRender();


    function priceTotal(i, arrPriceDop){
     
      
  


      


      if (isVisible(tab1)) {
        price = myObj.table[i].price_small;
      }
      if (isVisible(tab2)) {
        price = myObj.table[i].price_big;
      }
      console.log(price);
      document.getElementById("totalPrice").textContent = price;  

        
 
      $('.func_input').each(function () {
        if ($(this).prop('checked')) {
      
        for (let i = 0; i < arrPriceDop.length; i++) {
          price =  price + myObj.dopFunctionalPrice[arrPriceDop[i]].functional[1];
          document.getElementById("totalPrice").textContent = price;
        }
        document.getElementById("drillingHoles").style.display = "table-row";
      } else {
        document.getElementById("drillingHoles").style.display = "none";
        document.getElementById("totalPrice").textContent = price;
      }
    });
    }

    function changeModelPlate() {
      if (isVisible(tab1)) {
        const myCount = function()  {
          let arrSumDop = new Array();
          $('.func_input:checked').each(function(index) {
            arrSumDop.push($(this).data('num'));
          });
          // console.log( arrSumDop );
          return arrSumDop;
        };

        let price = 0;
        let arrPriceDop = myCount();


        //model small img
        for (let i = 0; i < inputModel.length; i++) {
          if (inputModel[i].checked == true) {
            document.getElementById("big_img").setAttribute( 'href', myObj.table[i].img_model);
            document.getElementById("big_img_container").className =
            myObj.table[i].class; // add class main img
            //number characters
            document.getElementById("OutputNumber") .setAttribute( 'x', myObj.table[i].numberXY[0]);
            document.getElementById("OutputNumber") .setAttribute( 'y', myObj.table[i].numberXY[1]);
            document.getElementById("OutputNumber") .setAttribute( 'font-size', myObj.table[i].numberXY[2]);
            document.getElementById("OutputNumber") .setAttribute( 'textLength', myObj.table[i].numberXY[3]);
            //street characters
            document.getElementById("OutputStreet") .setAttribute( 'x', myObj.table[i].streetXY[0]);
            document.getElementById("OutputStreet") .setAttribute( 'y', myObj.table[i].streetXY[1]);
            document.getElementById("OutputStreet") .setAttribute( 'font-size', myObj.table[i].streetXY[2]);
            document.getElementById("OutputStreet") .setAttribute( 'textLength', myObj.table[i].streetXY[3]);
            //streetName characters
            document.getElementById("OutputStreetName") .setAttribute( 'x', myObj.table[i].street_nameXY[0]);
            document.getElementById("OutputStreetName") .setAttribute( 'y', myObj.table[i].street_nameXY[1]);
            document.getElementById("OutputStreetName") .setAttribute( 'font-size', myObj.table[i].street_nameXY[2]);
            document.getElementById("OutputStreetName") .setAttribute( 'textLength', myObj.table[i].street_nameXY[3]);
        



        
            priceTotal(i, arrPriceDop);
        
        
        
        // textArea and Date send
        
        
            document.getElementById("size_main").textContent = myObj.table[i].size_small; // small size plate
          }
        }
      }
    }
    function changeModelPlateBig() {
      if (isVisible(tab2)) {
        const myCount = function()  {
          let arrSumDop = new Array();
          $('.func_input:checked').each(function(index) {
            arrSumDop.push($(this).data('num'));
          });
          // console.log( arrSumDop );
          return arrSumDop;
        };

        let price = 0;
        let arrPriceDop = myCount();


        // model big img
        for (let i = 0; i < inputModelBig.length; i++) {
          if (inputModelBig[i].checked == true) {
            document.getElementById("big_img").setAttribute( 'href', myObj.table[i].img_model);
            document.getElementById("big_img_container").className =
              myObj.table[i].class; // add class main img
              //number characters
              document.getElementById("OutputNumber") .setAttribute( 'x', myObj.table[i].numberXY[0]);
              document.getElementById("OutputNumber") .setAttribute( 'y', myObj.table[i].numberXY[1]);
              document.getElementById("OutputNumber") .setAttribute( 'font-size', myObj.table[i].numberXY[2]);
              document.getElementById("OutputNumber") .setAttribute( 'textLength', myObj.table[i].numberXY[3]);
              //street characters
              document.getElementById("OutputStreet") .setAttribute( 'x', myObj.table[i].streetXY[0]);
              document.getElementById("OutputStreet") .setAttribute( 'y', myObj.table[i].streetXY[1]);
              document.getElementById("OutputStreet") .setAttribute( 'font-size', myObj.table[i].streetXY[2]);
              document.getElementById("OutputStreet") .setAttribute( 'textLength', myObj.table[i].streetXY[3]);
              //streetName characters
              document.getElementById("OutputStreetName") .setAttribute( 'x', myObj.table[i].street_nameXY[0]);
              document.getElementById("OutputStreetName") .setAttribute( 'y', myObj.table[i].street_nameXY[1]);
              document.getElementById("OutputStreetName") .setAttribute( 'font-size', myObj.table[i].street_nameXY[2]);
              document.getElementById("OutputStreetName") .setAttribute( 'textLength', myObj.table[i].street_nameXY[3]);
          


              priceTotal(i, arrPriceDop);


          // textArea and Date send
          
              document.getElementById("size_main").textContent = myObj.table[i].size_big; //size big plate
            
          }
        }
      }
    }
    for (let i = 0; i < Object.keys(myObj.colors).length; i++) { // выводим контейнер цветов
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
      changeColorPlate();
    }

    function changeColorPlate() {
      // background color main img
      for (let i = 0; i < colorInput.length; i++) {
        if (colorInput[i].checked == true) {
          document.getElementById("big_img_container").style.backgroundColor =
            myObj.colors[i].color[0];
            
          document.getElementById("colorNameSend").textContent = myObj.colors[i].color[1];
          for (let l = 0; l < Object.keys(myObj.table).length; l++) {
            if (isVisible(tab1)) {
              if (inputModel[l].checked == true) {
                if(myObj.table[l].number_color == 1){
                  document.getElementById("OutputNumber").setAttribute('fill', myObj.colors[i].color[0]);
                }
                if(myObj.table[l].number_color == 0) {
                  document.getElementById("OutputNumber").setAttribute('fill', '#fff');
                }
                if(myObj.table[l].street_name_color == 1){
                  document.getElementById("OutputStreetName").setAttribute('fill', myObj.colors[i].color[0]);
                }  
                if(myObj.table[l].street_name_color == 0) {
                  document.getElementById("OutputStreetName").setAttribute('fill', '#fff');
                }
                if(myObj.table[l].street_color == 1){
                  document.getElementById("OutputStreet").setAttribute('fill', myObj.colors[i].color[0]);
                }  
                if(myObj.table[l].street_color == 0) {
                  document.getElementById("OutputStreet").setAttribute('fill', '#fff');
                }
              }
            }
            if (isVisible(tab2)) {
              if (inputModelBig[l].checked == true) {
                if(myObj.table[l].number_color == 1){
                  document.getElementById("OutputNumber").setAttribute('fill', myObj.colors[i].color[0]);
                }
                if(myObj.table[l].number_color == 0) {
                  document.getElementById("OutputNumber").setAttribute('fill', '#fff');
                }
                if(myObj.table[l].street_name_color == 1){
                  document.getElementById("OutputStreetName").setAttribute('fill', myObj.colors[i].color[0]);
                }  
                if(myObj.table[l].street_name_color == 0) {
                  document.getElementById("OutputStreetName").setAttribute('fill', '#fff');
                }
                if(myObj.table[l].street_color == 1){
                  document.getElementById("OutputStreet").setAttribute('fill', myObj.colors[i].color[0]);
                }  
                if(myObj.table[l].street_color == 0) {
                  document.getElementById("OutputStreet").setAttribute('fill', '#fff');
                }
              }
            }
          }
        }
      }
    }
    tab1Button.onclick = function() {
      changeModelPlate();
      changeColorPlate();
    };
    tab2Button.onclick = function() {
      changeModelPlateBig();
      changeColorPlate();
    };

    for (let i = 0; i < Object.keys(myObj.materials).length; i++) { // выводим контейнер цветов
      // write colors with json
      let br = document.createElement("br");
      let label_material = document.createElement("label");
      label_material.setAttribute("for", `idm${i}`);
      label_material.innerHTML = `<input type='radio' class='material_input' name='ch_b' value='${myObj.materials[i].material}' ${
        i == 0 ? "checked" : ""
      } id='idm${i}'>${myObj.materials[i].material}`;
      
      materialBox.appendChild(label_material);
      if(i == 1){
        materialBox.appendChild(br);
      }
      label_material.onclick = function(){
        checkMaterial();
      }
      
    }
    let radiosMaterial = document.getElementsByName('ch_b');

    function checkMaterial(){
      
      for (let i = 0, length = radiosMaterial.length; i < length; i++) {
        if (radiosMaterial[i].checked) {
          // do whatever you want with the checked radio
          document.getElementById("materialSend").textContent = radiosMaterial[i].value;
          break;
        }
      }
    }
    checkMaterial();






  }
};
xmlhttp.open("GET", "json_nameplate.json", true);
xmlhttp.send();


function streetChange() {
  document.getElementById("street").textContent = document.getElementById(
    "id1"
  ).value;
  document.getElementById("OutputStreet").textContent = document.getElementById(
    "id1"
  ).value;
}

function streetNameChange() {
  document.getElementById("streetName").textContent = document.getElementById(
    "id2"
  ).value;
  document.getElementById("OutputStreetName").textContent = document.getElementById(
    "id2"
  ).value;
  
}

function streetNumberChange() {
  document.getElementById("streetNumber").textContent = document.getElementById(
    "id3"
  ).value;
  document.getElementById("OutputNumber").textContent = document.getElementById(
    "id3"
  ).value;
}


function isVisible(elem) {
  //проверка видимости елемента
  return elem.offsetWidth > 0 || elem.offsetHeight > 0;
}





