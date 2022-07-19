
var mainQ = document.querySelectorAll('.question-title');

for (var i = 0; i < mainQ.length; i++) {

    mainQ[i].addEventListener('click', function(){
        
        var arr = this.children[1];
        var ttl = this.children[0];
        var ans = this.nextElementSibling;


        

         if(ttl.style.fontWeight != "800"){
            ttl.style.fontWeight = "800";
      
         } else {
            ttl.style.fontWeight = "400";
         }
      
        if(arr.classList.contains('rotate180') === false){
            arr.classList.add('rotate180');
        } else {
            arr.classList.remove('rotate180');
        }
   
        if(ans.classList.contains('hidden') === true){
            ans.classList.remove('hidden');
        } else {
            ans.classList.add('hidden');
        }
        
        
    })
}

