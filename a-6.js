let str = "racecar";

function isPalindrome(str) {

    str = str.toLowerCase();

    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str == reverse) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome(str));