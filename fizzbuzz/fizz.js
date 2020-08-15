var numeros = 100;
for (var i = 1; i <= numeros; i++)
{
    var divisible = false;
    if (esDivisible(i,3)) 
    {
        divisible = true;
        document.write("fizz");
    }
    if(esDivisible(i,5))
    {
        divisible = true;
        document.write("buzz");
    }
    if (!divisible) 
    {
        document.write(i);
    }
    document.write("<br/>")
}

function esDivisible(num, divisor) 
{
    if (num % divisor == 0) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}