var count;
    function randomNumber(){
        count = Math.floor(Math.random()*9)+1;
        document.getElementById("randomnum").innerHTML = count;
        var row = document.getElementById("inputfriend");
        for (let i = 0; i < count; i++){
            //name
            const name = document.createElement("h3");
            name.innerHTML = "Enter friend nickname : ";
            const nameinput = document.createElement("input");
            nameinput.id = "name"+i;
            nameinput.type = "text";
            row.appendChild(name);
            name.appendChild(nameinput);

            //age
            const age = document.createElement("span");
            age.innerHTML = "  Age : ";
            const ageinput = document.createElement("input");
            ageinput.id = "age"+i;
            ageinput.type = "number";
            name.appendChild(age);
            age.appendChild(ageinput);

            const br = document.createElement("br");
            row.appendChild(br);
        }
        
        const nextbtn = document.createElement("button");
        nextbtn.innerHTML = "Next";
        nextbtn.type = "button";
        nextbtn.onclick = goNext;

        const resetbtn = document.createElement("button");
        resetbtn.innerHTML = "Reset";
        resetbtn.type = "button";
        resetbtn.onclick = reset;

        row.appendChild(nextbtn);
        row.appendChild(resetbtn);
        row.style = "border : solid #45a049; 2px;border-radius:25px; padding:5px";
        document.getElementById("randombtn").style.display="none";

    }

    //Next button
    function goNext() {
        var check;
        var result = document.getElementById("result");
        // Loop each input
        for (let i = 0; i < count; i++) {
            const nameValue = document.getElementById("name" + i).value;
            const ageValue = document.getElementById("age" + i).value;
    
            // Check empty
            if (nameValue.trim() == "" || ageValue.trim() == "") {
                check = "กรุณาเติมคำในช่องว่างให้ครบ";
                break; 
            }
        }
        if(check != undefined){
            alert(check);
            result.style = "";
        } else {
            //create button
            const sumbtn = document.createElement("button"); 
            sumbtn.innerHTML = "Sum";
            sumbtn.type = "button";
            sumbtn.onclick = sum;
            result.appendChild(sumbtn);
            
            const averagebtn = document.createElement("button");
            averagebtn.innerHTML = "Average";
            averagebtn.type = "button";
            averagebtn.onclick = average;
            result.appendChild(averagebtn);
            
            const minbtn = document.createElement("button");
            minbtn.innerHTML = "Min";
            minbtn.type = "button";
            minbtn.onclick = min; 
            result.appendChild(minbtn);
            
            const maxbtn = document.createElement("button"); 
            maxbtn.innerHTML = "Max";
            maxbtn.type = "button";
            maxbtn.onclick = max;
            result.appendChild(maxbtn);
            
            result.style = "text-align:center; margin-top:10px;"
        }
    }

    //Reset button
    function reset(){
        var row = document.getElementById("inputfriend");
        var result = document.getElementById("result");
        while (row.firstChild) {
            row.removeChild(row.firstChild);
        }
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        while (ans.firstChild) {
            ans.removeChild(ans.firstChild);
        }
        row.style = "";
        result.style = "";
        ans.style = "";
        document.getElementById("randombtn").style.display="";
        document.getElementById("randomnum").innerHTML="";
    }

    //ฟังก์ชั่นหาผลบวก
    function sum(){
        var sum = 0;
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            sum += ageValue;
        }
        console.log("Sum of ages: " + sum);
        const resultsum = document.createElement("p");
        const hr = document.createElement("hr");
        resultsum.id = "resultsum";
        resultsum.innerHTML = "ผลรวมของอายุทั้งหมดคือ : "+ sum;
        var ans = document.getElementById("ans");
        ans.appendChild(resultsum);
        ans.appendChild(hr);
        resultsum.style = "text-align:center;margin-top:10px;"
        
    }

    //ฟังก์ชั่นหาค่าเฉลี่ย
    function average(){
        var sum = 0;
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            sum += ageValue;
        }
        var average = sum / count;
        console.log("Average age: " + average.toFixed(2));

        const resultavg =  document.createElement("p");
        const hr = document.createElement("hr");
        resultavg.id = "resultavg";
        resultavg.innerHTML = "ค่าเฉลี่ยของอายุคือ : "+average.toFixed(2);
        var ans = document.getElementById("ans");
        ans.appendChild(resultavg);
        ans.appendChild(hr);
        resultavg.style = "text-align:center;margin-top:10px;"
    }

    //ฟังก์ชั่นหาค่าน้อยสุด
    function min(){
        var minAge = Infinity;
        var minAgename = [];
        const resmin = document.createElement("p");
        const hr = document.createElement("hr");
        var ans = document.getElementById("ans");
        resmin.id = "resmin";
    
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            const nameValue = document.getElementById("name" + i).value;
    
            if (ageValue < minAge) {
                minAge = ageValue;
                minAgename = [nameValue];
            } else if (ageValue == minAge) {
                minAgename.push(nameValue);
            }
        }
    
        if (minAgename.length > 0) {
            resmin.innerHTML = "คนที่อายุน้อยที่สุดคือ : " + minAgename.join(", ") + "  มีอายุ : " + minAge;
            ans.appendChild(resmin);
        }
        ans.appendChild(hr);
        resmin.style = "text-align:center;margin-top:10px;"
    }

    //ฟังก์ชั่นหาค่ามากสุด
    function max(){
        var maxAge = -Infinity;
        var maxAgename = [];
        const resmax = document.createElement("p");
        const hr = document.createElement("hr");
        var ans = document.getElementById("ans");
        resmax.id = "resmax";
    
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            const nameValue = document.getElementById("name" + i).value;
    
            if (ageValue > maxAge) {
                maxAge = ageValue;
                maxAgename = [nameValue];
            } else if (ageValue == maxAge) {
                maxAgename.push(nameValue);
            }
        }
    
        if (maxAgename.length > 0) {
            resmax.innerHTML = "คนที่อายุมากที่สุดคือ : " + maxAgename.join(", ") +"  มีอายุ : " + maxAge;
            ans.appendChild(resmax);
        }
    
        ans.appendChild(hr);
        resmax.style = "text-align:center;margin-top:10px;"
    }