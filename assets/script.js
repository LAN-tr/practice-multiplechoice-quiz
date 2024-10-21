function check() {
    // document.write("Never give up!"); (test)
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    if (q1=="Javascript") {c++}
    if (q2=="China") {c++}
    if (q3=="Beijing") {c++}
    if (q4=="White and Blue") {c++}
    if (q5=="Four") {c++}
    quiz.style.display="none";
    // result.textContent=`${c}`;

    if (c<=3) {
       result.textContent= `Your result is ${c}. Please try again!`
    } else { 
        result.textContent= `Your result is ${c}. Well done!`
    }


}