function debug_basicAddSub(){
    console.log("Addition");
    console.log("count should be 0 and count = " + count);
    add_one();
    add_two();
    add_three();
    add_four();
    add_five();
    add_ten();
    add_fifty();
    add_hundred();
    add_five_hundred();
    add_thousand();
    console.log("count should be '1675' and count = " + count);
    console.log("subtraction");
    sub_one();
    sub_two();
    sub_three();
    sub_four();
    sub_five();
    sub_ten();
    sub_fifty();
    sub_hundred();
    sub_five_hundred();
    sub_thousand();
    console.log("count should be '0' and count = " + count);
}
function debug_basicMultiplyDivide(){
    console.log("Multiplication");
    count = 50;
    multiply_two();
    multiply_three();
    multiply_four();
    multiply_five();
    multiply_ten();
    multiply_hundred();
    multiply_thousand();
    console.log("count should be '6000000000' and count = " + count);
    console.log("Division");
    divide_two();
    divide_three();
    divide_four();
    divide_five();
    divide_ten();
    divide_fifty();
    divide_hundred();
    divide_thousand();
    console.log("count should be '1' and count = " + count);
}