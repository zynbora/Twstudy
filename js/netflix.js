
 const tabItems =document.querySelectorAll('.tab-item');
   const tabContentItems = document.querySelectorAll('.tab-content-item');
   
   //2-)tab content item seçimi
    function selectItem(e){
        removeBorder();

        this.classList.add('tab-border');
        //3-) this ile istenilen şey çağrılır.

        //tab-border cssteki classı çağırdı ve özelliğini buraya ekledik
    }

    //4-)
    function removeBorder(){
        tabItems.forEach(item => item.classList.remove('tab-border'));
        
    }

   tabItems.forEach(item => item.addEventListener('click', selectItem));
   //1-) selectItem burda bizim isimlendirdiğimiz fonksiyonun adı ve tabiteme tıkladıgında istenilen borderın gelmesini sağlayan kısmı içeriyor.
