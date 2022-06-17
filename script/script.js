window.addEventListener("load", function () {
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});


//add save view

var save_show = document.querySelector('.save_btn');

save_show.addEventListener('click', function (event) {

    var main_box = document.querySelector('.shipments');
    main_box.classList.toggle("save");
    setTimeout(() => {
        main_box.classList.toggle("save");
    }, 1300);
});




  let checkAll = document.getElementById("checkboxAll");
        let el = document.getElementsByClassName("checkStatus");

        const funcCheckAll = (bool) => {
            for (let i = 0; i < el.length; i++) {
                el[i].checked = bool;
            }
        };
        const funcCheck = () => {
            let count = 0;

            for (let i = 0; i < el.length; i++) {
                if (el[i].checked) {
                    count += 1;
                }
            }

            if (el.length === count) {
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
        };

        checkAll.addEventListener(
            "click",
            () => {
                funcCheckAll(checkAll.checked);
            },
            false
        );


        let checkboxAllChanel = document.getElementById("checkboxAllChanel");
        let checkChannel = document.getElementsByClassName("checkChannel");

        const funcCheckAllChanel = (bool) => {
            for (let i = 0; i < checkChannel.length; i++) {
                checkChannel[i].checked = bool;
            }
        };
        const funcCheckChanel = () => {
            let count = 0;

            for (let i = 0; i < checkChannel.length; i++) {
                if (checkChannel[i].checked) {
                    count += 1;
                }
            }

            if (checkChannel.length === count) {
                checkboxAllChanel.checked = true;
            } else {
                checkboxAllChanel.checked = false;
            }
        };

        checkboxAllChanel.addEventListener(
            "click",
            () => {
                funcCheckAllChanel(checkboxAllChanel.checked);
            },
            false
        );


        let checkboxAllChanel2 = document.getElementById("checkboxAllChanel2");
        let checkChannel2 = document.getElementsByClassName("checkChannel2");

        const funcCheckAllChanel2 = (bool) => {
            for (let i = 0; i < checkChannel2.length; i++) {
                checkChannel2[i].checked = bool;
            }
        };
        const funcCheckChanel2 = () => {
            let count = 0;

            for (let i = 0; i < checkChannel2.length; i++) {
                if (checkChannel2[i].checked) {
                    count += 1;
                }
            }

            if (checkChannel2.length === count) {
                checkboxAllChanel2.checked = true;
            } else {
                checkboxAllChanel2.checked = false;
            }
        };

        checkboxAllChanel2.addEventListener(
            "click",
            () => {
                funcCheckAllChanel2(checkboxAllChanel2.checked);
            },
            false
        );



        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", funcCheck, false);
        }


        var close_message = document.querySelector('.close_message');

        close_message.addEventListener("click", function(event) {
            this.parentElement.classList.toggle('show')
        });
