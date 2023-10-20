    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }

    var navigate = document.querySelector('.containe');
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
        navigate.classList.toggle('active');
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
        navigate.classList.toggle('active');
    } 
    
    const boxes = document.querySelectorAll('.box')
    window.addEventListener('scroll', check_animation)
    check_animation()
    function check_animation () {
        const trigger = window.innerHeight / 6 * 4;
        
        boxes.forEach(box => {

            console.log(box);
            const top = box.getBoundingClientRect().top
            
            if (trigger > top) {
                box.classList.add('show_content')
            } else {
                box.classList.remove('show_content')
            }
        })
    }