//Problem TwentyOne
function countEvens(num){
    var count = 0;
    for(var i = 0; i < num.length; i++){
        if(num[i] % 2 == 0) {
            count++;
        }
    }
    return count;

}

//Problem TwentyTwo
function countHi(str) {
    var count = 0;
    for (var i=0; i < str.length; i++) {
        if (str[i] == "h" && str[i+1] == "i"){
            count++;
        }
    }
    return count;
}

//Problem TwentyThree
function no14(num) {
    var count1 = false;
    var count4 = false;
    for (var i = 0; i <= num.length; i++) {
        if (num[i] == 1) {
            count1 = true;
        }
        if (num[i] == 4) {
            count4 = true;
        }
    }
    if (count4 == true && count1 == true) {
        return false;
    } else {
        return true;
    }
}

//Problem TwentyFour
function either24(num){
    var count22 = false;
    var count44 = false;
    var both2244 = false;
    for (var i = 0; i <= num.length; i++) {
        if (num[i] == 2 && num[i+1] == 2) {
            count22 = true;
        }
        if (num[i] == 4 && num[i+1] == 4) {
            count44 = true;
        }
        if(count44 == true && count22 == true){
            both2244 = true;
        }
    }
    if (both2244 == true || (count22 == false && count44 == false)) {
        return false;
    }else {
        return true;
    }

}

//Problem TwentyFive
function makeChocolate(small, big, goal) {
    var total = goal/5;
    if(big > total){
        big = Math.floor(total);
    }
    var answer = goal - big*5
    if(answer > small){
        return -1;
    } else {
        return answer;
    }
}

//Problem TwentySix
function luckySum(a, b, c){
    var sum = a + b + c;
    if (a == 13) {
        sum = 0;
    }
    if (b == 13) {
        sum = a;
    }
    if (c == 13) {
        sum = a + b;
    }
    if(a == 13 && b == 13){
        sum = 0;
    }
    if(b == 13 && c == 13){
        sum = a;
    }
    if(a == 13 && c == 13){
        sum = 0;
    }
    return sum;
}

//Problem TwentySeven
function maxBlock(str){
    var count = 0;
    var x = 0;
    var max = 0;
    if(str.length == 0){
        return 0;
    }
    while(x < str.length - 1){
        if(str.charAt(x) == str.charAt(x +1)){
            count++;
            if(count > max){
                max = count;
            }
        } else {
            count = 0;
        }
        x++;
    }
    return max + 1;
}

//Problem TwentyEight
function linearIn(a, b){
    var x = 0;
    var y = 0;
    while(x < b.length && y < a.length){
        if(b[x] > a[y]){
            y++;
        } else {
            if(b[x] < a[y]){
                return false;
            } else {
                x++;
            }
        }
    }

    if(x != b.length){
        return false;
    }
    return true;
}

//Problem TwentyNine
function countTriple(str){
    var count = 0;
    for (var i=0; i < str.length; i++) {
        if (str[i] == str[i+1] && str[i+1] == str[i+2]){
            count++;
        }
    }
    return count;
}

//Problem Thirty
function sameEnds(str){
    var answer = str.substring(0, str.length/2)
    for(var i=0; i < str.length; i++) {
        if(answer == str.substring(str.length - answer.length)){
            return answer;
        } else {
            answer = answer.substring(0, answer.length -1 );
        }
    }
    return "";
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += countEvens(true, false);
    document.getElementById("output").innerHTML += countHi(true, false);
    document.getElementById("output").innerHTML += no14(true, false);
    document.getElementById("output").innerHTML += either24(true, false);
    document.getElementById("output").innerHTML += makeChocolate(true, false);
    document.getElementById("output").innerHTML += luckySum(true, false);
    document.getElementById("output").innerHTML += maxBlock(true, false);
    document.getElementById("output").innerHTML += linearIn(true, false);
    document.getElementById("output").innerHTML += countTriple(true, false);
    document.getElementById("output").innerHTML += sameEnds(true, false);
}