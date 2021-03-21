var main_list_array = ["Chicken Tandoori Pizza", 
                       "Veg Supreme Pizza", 
                       "Paneer Tika Pizz ", 
                       "Deluxe Veggie Pizza", 
                       "Veg Extravaganza Pizza"
                    ];
                       function getMenu(){
                         var htmldata ;
                         htmldata = "<ol class='menulist'>"
                         main_list_array.sort();
                         for (var i=0; i<main_list_array.length;i++){
                             htmldata=htmldata+'<li>'+main_list_array[i] + '<li>';
                            
                         }
                         htmldata=htmldata+"</ol>"
                         document.getElementById("display_menu").innerHTML = htmldata;
                       }
                       function add_item(){
                           var htmldata;
                           var item=document.getElementById("add_item").value;
                           main_list_array.push(item);
                           main_list_array.sort();
                           htmldata="<section class='cards'>"
                           for(var i = 0;i<main_list_array; i++){
                               htmldata=htmldata+'<div class="card">' + '<img src="images/pizzaImg.png"/>'+ main_list_array[i] + '</div>';
                           }
                           htmldata+htmldata+"</section>"
                           document.getElementById("display_addedmenu").innerHTML = htmldata;
                       }