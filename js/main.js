

window.addEventListener("load",()=>{
/*
    Page Loader
*/
document.querySelector(".js-page-loader").classList.add("fade-out");
setTimeout(()=> {
    document.querySelector(".js-page-loader").style.display= "none";
}, 600);
});

/*---------------
testimonial slider
---------------*/
function testimonialSlider() {
    const carouselOne = document.getElementById('carouselOne');

    if (carouselOne) { /* eğer element varsa*/

        carouselOne.addEventListener('slid.bs.carousel', function () {
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
                activeItem.getAttribute("data-js-testimonial-img");

        })

    }
}
testimonialSlider();


/*------------------
COURSE PREVIEW VIDEO
--------------------*/
/*fonksiyonu yazmadan önce console.log("gdf") diye yazarak consoledan tanımlanmıs mı bakabilirsin*/
function coursePreviewVideo() {

    const coursePreviewModal = document.querySelector(".js-course-preview-modal");
    if (coursePreviewModal) {
        coursePreviewModal.addEventListener("shown.bs.modal", function () {
            this.querySelector(".js-course-preview-video").play();
            this.querySelector(".js-course-preview-video").currentTime = 0; /*videonun kaçıncı snde baslayacağı*/
        });

        coursePreviewModal.addEventListener("hide.bs.modal", function () {
            this.querySelector(".js-course-preview-video").pause();

        });
    }
}
coursePreviewVideo();


/*---------------
HEADER MENU
-----------------*/
function headerMenu() {

    const menu = document.querySelector(".js-header-menu"),
        backdrop = document.querySelector(".js-header-backdrop"),
        menuCollapseBreakpoint = 991;

    //6. kod    
    function toggleMenu() {

        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    }

    //7.kod
    document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
        item.addEventListener("click", toggleMenu);
    });

    //8.kod
    //kapatma tusuna basmadan yan menüyü kapatmayı sağlar
    backdrop.addEventListener("click", toggleMenu)



    // 4.kod
    function collapse() { // bir sub menu açıkken 2. sub menüye tıklarken öncekinin kapanması ve 2.sinin acılması
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }

    // 1.kod
    menu.addEventListener("click", (event) => {
        const { target } = event;
        /* console.log(target); tıkladıgında js class ismi cıkıyor*/

        if (target.classList.contains("js-toggle-sub-menu") &&
            window.innerWidth <= menuCollapseBreakpoint) {
            // prevent default anchor click behavior
            // varsayılan bağlantı tıklama davranışını engelle
            // kullanıcı tıklamadan sub menunun açılmasını engellemek / kapalı olmasını sağlamak
            event.preventDefault();


            // 5.kod
            //if menu-item already expanded, collapse it and exit
            //menü öğesi zaten genişletilmişse, daraltın ve çıkın
            //menu itemin kendisine tıklanarak tek basına kapanıp acılması
            if (target.parentElement.classList.contains("active")) {
                collapse();
                return;//return olmayınca aynı sub menu kapanmıyor ancak baska sub menuye tıklarsan kapanır!!

            }

            //eğer zaten genişletilmemisse alttaki kod çalısır direkt

            //3. kod
            //collapse the other expanded menu-item if exist 
            //varsa diğer genişletilmiş menü öğesini daralt 
            //kapalı menu itemi açmak için tıklarken diğer açık menu itemin kapanması
            if (menu.querySelector(".active")) {
                collapse();
            }

            // 2.kod
            //expand new menu-item
            //yeni menü öğesini genişlet
            //kapalı itemi açmak
            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
        }
    });

    // 9.kod 
    //windowu yeniden boyutlandırmak sayfa genişliği dar ve yan menü açıkken sayfayı genişletince yan menü kaybolur sonra tekrar sayfa küçültüldüğünde yan menü açılmaz hamburger butonu çıkar amaç bu
    window.addEventListener("resize", function () {
        if (this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")) {
            toggleMenu();
        }
        if (this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")) {
            collapse();
        }
    });

}
headerMenu();


/*---------------
STYLE SWITCHER
-----------------*/
function styleSwitcherToggle() {
    const styleSwitcher = document.querySelector(".js-style-switcher"),
        styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", function () {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");/*ayarlar ikonu*/
        this.querySelector("i").classList.toggle("fa-cog");/*kapatma ikonu*/
    });
}
styleSwitcherToggle();


/*console.log(target.getAttribute("data-js-theme-color"));*/

/*-------------
THEME COLORS
---------------*/
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");

    themeColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColor();
        }
    });

    function setColor() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }
    if (localStorage.getItem("color") !== null) {
        setColor();
    }
    else {
        const defaultColor = colorStyle.getAttribute("href");
        console.log(defaultColor);
    }
}
themeColors();

/*---------------------*/


/*------LIGHT DARK THEME------- */
function themeLightDark() {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    /*console.log(this.checked); checkboxı tanımlamıs mı diye bakabilirsin true/false değeri çıkacak */
    darkModeCheckbox.addEventListener("click", function () {

        /*Dark modu aktifleştirdiği zaman true renk değişimi henüz başlamadı*/
        if (this.checked) {
            localStorage.setItem("theme-dark", "true");
        }

        /*Dark modu inaktifleştirdiği zaman false diyecek*/
        else {
            localStorage.setItem("theme-dark", "false");
        }
        themeMode(); /*--bir sonraki fonksiyonun adı const içine yazılır--*/
    });

    /*dark mod değişimi burada başlıyor*/
    function themeMode() {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark"); /*cssteki t-dark sınıfın özellikleri*/
        }
        else {
            document.body.classList.add("t-dark");
        }
    }
    if (localStorage.getItem("theme-dark") !== null) {
        themeMode(); /*app kısmında true false kontrolü */
    }
    if (document.body.classList.contains("t-dark")) {
        darkModeCheckbox.checked = true; /*dark modda olduğu zaman checkboxın aktifleşmiş gözükmesi için yazılan kod (dark modda olsa bile sayfa yenilendiğinde dark mode butonu tıklanmamıs gibi gözükür amaç bunu önlemek)*/
    }

}
themeLightDark();



/*------GLASS EFFECT------*/
function themeGlassEffect() {
    const glassEffectCheckbox = document.querySelector(".js-glass-effect"),
        glassStyle = document.querySelector(".js-glass-style");     /*glass sınıfını burada atadık çünkü css dosyasında t-dark gibi özel bir glass classı yok*/

    glassEffectCheckbox.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("glass-effect", "true");
        }
        else {
            localStorage.setItem("glass-effect", "false");
        }
        glass(); /*--bir sonraki fonksiyonun adı const içine yazılır--*/
    });

    /*bu kısım checkboxa tıkladığında istenilen özelliğin olması için*/
    function glass() {
        if (localStorage.getItem("glass-effect") === "true") {
            glassStyle.removeAttribute("disabled");
        }
        else {
            glassStyle.disabled = true;
        }
    }
    /*bu kısım sayfa yenilendiğinde de seçili özelliğin aynı kalması için*/
    if (localStorage.getItem("glass-effect") !== null) {
        glass();
    }
    if (!glassStyle.hasAttribute("disabled")) {
        glassEffectCheckbox.checked = true;
    }
}
themeGlassEffect();

