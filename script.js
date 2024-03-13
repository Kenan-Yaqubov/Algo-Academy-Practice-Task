let palindrom = prompt("Enter your word or number:")
x = true;

for (let i = 0; i < palindrom.length; i++) {
    if (palindrom[i] != palindrom[(palindrom.length - 1) - i]) {
        x = false;
        break;
    }
}

if (x) {
    alert("It is a palindrom👍")
} else {
    alert("It is not a palindrom❌")
}