$(document).ready(() => {
    //ACTIVE NAV
    $("ul li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    //TOGGLE BARS
    $(".fa-bars").on("click", function() {
        $("#sidebar").css({ width: "17%", display: "block" });
        $("main").css({ "margin-left": "17vw", width: "85% auto" });
        $(".content").css("width", "50% auto");
        $(".main-content").css("flex-direction", "row");
        // $('.closebtn').css('display', 'block');
    });
    //CLOSE_BUTTON
    $(".closebtn").on("click", function() {
        $("#sidebar").css("width", "0px");
        $("main").css("margin-left", "10px");
        $(".main-content").css("flex-direction", "column");
    });
    //DISPLAY SPECIFIC CONTENT
    $("#dashboard").show();
    $("#student").hide();
    $("#faculty").hide();
    $("#recognition").hide();
    $("ul").on("click", "li", function(e) {
        var id = $(this).find("a").attr("href");
        $(id).show().siblings().hide();
    });
    //DARK MODE
    $(".btn-mode").on("click", function() {
        let body = $("body");
        let buttontext = $(".btn-mode");
        body.toggleClass("dark-mode");
        if (buttontext.html("Dark mode")) {
            console.log(buttontext.html());
            buttontext.html("Light mode");
            $(".btn-mode").css({ "background-color": "white", color: "black" });
        } else {
            console.log(buttontext.html());
            buttontext.html("Dark mode");
            $(".btn-mode").css({ "background-color": "black", color: "white" });
        }
    });
    //CHARTS DASHBOARD
    phil = document.getElementById("philStudent").innerHTML;
    console.log(phil);
    new Chart(document.getElementById("bar-chart"), {
        type: "bar",
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "Philippines"],
            datasets: [{
                label: "University of Southampton",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                ],
                data: [1478, 2267, 734, 784, phil],
            }, ],
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Number of Students from University of Southampton Campuses all over the world",
            },
        },
    });
});

// sorting student table
function sortStudent() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("studentTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// sorting the faculty table
function sortTeacher() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("facultyTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}