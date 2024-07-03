var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let l = 0, r = s.length - 1;
    while (l <= r) {
        if (s[l] !== s[r]) {
            return false;
        }

        l++;
        r--;

    }
    return true
};

let s = "A man, a plan, a canal: Panama"


console.log(isPalindrome(s))
