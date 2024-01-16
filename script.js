function calculate() {
    var g_name = document.getElementById("girl-name").value.trim();
    var b_name = document.getElementById("boy-name").value.trim();

    if (g_name.length < 2 || b_name.length < 2 || g_name === "" || b_name === "") {
        alert("ENTER A VALID NAME");
        return this;
    }
    else (g_name.length > 2 && b_name.length > 2 && g_name === "" && b_name === "");{
        
        var lovescore = (Math.random()*100)+1;
        lovescore = Math.floor(lovescore);

        if (lovescore >= 70) {
            document.getElementById("vyy").innerText="Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day";
            document.getElementById("vyy1").innerText="YOUR LOVE SCORE IS: "+lovescore+"%";
            document.getElementById("vyy2").innerText="YOUR COUPLE NAME IS: "+g_name.slice(0,3)+b_name.slice(b_name.length-3,b_name.length);
        }
        if (lovescore > 40 && lovescore < 70) {
            document.getElementById("vyy").innerText='"Love is an endless mystery, for it has nothing else to explain it." - Rabindranath Tagore';
            document.getElementById("vyy1").innerText="YOUR LOVE SCORE IS: "+lovescore+"%";
            document.getElementById("vyy2").innerText="YOUR COUPLE NAME IS: "+g_name.slice(0,3)+b_name.slice(b_name.length-3,b_name.length);
        }
        if (lovescore < 40) {
            document.getElementById("vyy").innerText='CAUTION:BETTER TO BREAK YOUR LOVE!!!';
            document.getElementById("vyy1").innerText="YOUR LOVE SCORE IS: "+lovescore+"%";
            document.getElementById("vyy2").innerText="YOUR COUPLE NAME IS: "+g_name.slice(0,3)+b_name.slice(b_name.length-3,b_name.length);
        }
    }
}
