var pattern = /[A-Z]/;

var str = "HELLO WORLD";

var result = str.match(pattern);

if (result) {
    document.write(true);
} else {
    document.write("არ არსებობს");
}