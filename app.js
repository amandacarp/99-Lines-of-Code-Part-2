//listen for button function 
document.addEventListener("DOMContentLoaded", function () {

    //create button
    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.style.display = "block"

    //array of friends
    button.addEventListener("click", function () {
        var friends = ["Alexandra", "Alex", "Carolyn", "Roger", "Adam"];

        //create h3s
        for (var i = 0; i < friends.length; i++) {
            let div = document.createElement("div");
            div.className = "friend";
            document.body.appendChild(div);
            let h3 = document.createElement("h3");
            let h3Text = document.createTextNode(friends[i]);
            h3.appendChild(h3Text);
            div.appendChild(h3);

            //print lyrics for each friend
            for (var j = 99; j >= 1; j--) {
                let p = document.createElement("p");
                let pText;
                if (j > 2) {
                    pText = document.createTextNode([j] + " lines of code in the file, " + [j] + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                } else if (j == 2) {
                    pText = document.createTextNode([j] + " lines of code in the file, " + [j] + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
                } else if (j == 1) {
                    pText = document.createTextNode([j] + " line of code in the file, " + [j] + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                }

                p.appendChild(pText);
                div.appendChild(p);
            }
        }


    })


})




