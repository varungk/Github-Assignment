var values;
function clickme() {
    console.log("hello");
    var values = {
        "b_s_p" : document.getElementById("b_s_p").value,
        "b_s_a" : document.getElementById("b_s_a").value,
        "b_d_p" : document.getElementById("b_d_p").value,
        "b_d_a" : document.getElementById("b_d_a").value,
        "r_ma_p" : document.getElementById("r_ma_p").value,
        "r_ma_a" : document.getElementById("r_ma_a").value,
        "r_mi_p" : document.getElementById("r_mi_p").value,
        "r_mi_a" : document.getElementById("r_mi_a").value,
        "bu_ma_p" : document.getElementById("bu_ma_p").value,
        "bu_ma_a" : document.getElementById("bu_ma_a").value,
        "bu_mi_p" : document.getElementById("bu_mi_p").value,
        "bu_mi_a" : document.getElementById("bu_mi_a").value,
        "c_w_p" : document.getElementById("c_w_p").value,
        "c_w_a" : document.getElementById("c_w_a").value,
        "c_wo_p" : document.getElementById("c_wo_p").value,
        "c_wo_a" : document.getElementById("c_wo_a").value,

    };
    //tring to get sum of prob as 1
    var j = 0;
    var v = 0;
    var t = [];
    for(var i in values)
    {
        if(j%4 == 0 && j != 0)
        {
            t.push(v);
            v = 0;
        }
        if(j%2 == 0)
        {
            v = v + Number(values[i]);
        }
        j++;
    }
    t.push(v);
    element = 1;
    const r = t.every(element => {
        if (element === t[0]) {
          return true;
        }
    });
    //*********************//
    if(r == true)
        calculate(values);
    else
        alert("The sum of the probability value should be 1");
}

function calculate(values){
    var min_value = 0;
    var b = 0;
    var total_values = [];
    for(var k in values){
        if(b%4 == 0&&b != 0){
            total_values.push(min_value);
            min_value = 0;
        }
        if(b%2 == 0){
            var i = 0;
            var a;
            for(var l in values){
                if(i == 1){
                    a = l;
                    break;
                }
                if(k==l){
                    i = 1;
                }
            }
            min_value =min_value + (values[k] * values[a]);
            b++;
        }
        else{
            b++;
            continue;
        }
    }
    total_values.push(min_value);
    
    display(values,total_values);
}

function display(values,total_values){
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    document.getElementById("temp").style.display = "block";
    var a = 0;
    j = 0;
    for(var i in values){
        document.getElementById(arr[j]).innerHTML = values[i];
        j++;
    }
    document.getElementById('1').innerHTML = total_values[0];
    document.getElementById('2').innerHTML = total_values[1];
    document.getElementById('3').innerHTML = total_values[2];
    document.getElementById('4').innerHTML = total_values[3];

    var min_no = total_values[0];
    for(i = 1; i < 4; i++)
    {
        if(total_values[i] < min_no)
            min_no = total_values[i];
    }
    var index;
    var the_ans;
    for(var i = 0; i < 4; i++)
    {
        if(total_values[i] == min_no)
            index = i;
    }
    switch(index)
    {
        case 0:
            document.getElementById("ans").innerHTML = "Build";
            break;
        case 1:
            document.getElementById("ans").innerHTML = "Reuse";
            break;
        case 2:
            document.getElementById("ans").innerHTML = "Buy";
            break;
        case 3:
            document.getElementById("ans").innerHTML = "Contract";
            break;
    }
}
