
window.onload=function()
{
    var add_to_library=document.getElementsByClassName("add-to-library");
    var delete_from_library=document.getElementsByClassName("delete-from-library");
    var movies_library=document.getElementsByClassName("movies-library-container")[0];
    var movies_list=document.getElementsByClassName("movies-container")[0];
    for(let i=0;i<add_to_library.length;i++)
        {
            add_to_library[i].addEventListener("click",(e) =>
                                              {
                let movies_block=e.target.parentElement.parentElement;
                add_movies_to_library(movies_block,movies_library);
            })
            delete_from_library[i].addEventListener("click",(e) =>{
                 let movies_block=e.target.parentElement.parentElement;
                delete_movies_from_library(movies_block,movies_library);
            })
        }
    
    function add_movies_to_library(movie,library)
    {
                
        library.appendChild(movie);
        
    }
    function delete_movies_from_library(movie,library)
    {
        library.removeChild(movie);
        add_movies_to_list(movie,movies_list);
    }
    function add_movies_to_list(movie,list)
    {
        list.appendChild(movie);
    }
    
    var library_array=[];
    
    
    
    
    
    
    
    
    
    
   var search_toggle=document.getElementsByClassName("search-toggle")[0];
    var movies_library=document.getElementsByClassName("movies-library-container")[0];
    var movies_container=document.getElementsByClassName("movies-container")[0];
    search_toggle.addEventListener("click",() =>
                                  {
        movies_library.style.display="none";
        movies_container.style.display="flex";
    })
    var library_toggle=document.getElementsByClassName("library-toggle")[0];
    library_toggle.addEventListener("click",function()
                                   {
         movies_library.style.display="flex";
        movies_container.style.display="none";
    })
    
    
    var search=document.getElementsByClassName("search-box")[0];  
    var filmArray=document.getElementsByClassName("movies-box");
    
    
     search.addEventListener("keyup",function(e)
                            {
      let searchText=search.value.toUpperCase();
         for(let i=0;i<filmArray.length;i++)
             {
                 let titleText=filmArray[i].getElementsByClassName("title-text")[0];
                 let movieTitle=titleText.innerHTML.toUpperCase()
                 console.log(movieTitle,searchText);
                 console.log(searchText.indexOf(movieTitle));
                 if(movieTitle.indexOf(searchText) > -1)
                     {
                         filmArray[i].style.display="";
                         
                     }
                 else{
                     filmArray[i].style.display="none";
                 }
             }
        
    })
    
    
    
    function sortByTitle()
    {
        console.log("Sort by title");
        
        let list, i, switching, b, shouldSwitch;
  list = document.getElementsByClassName("movies-box");
    let parent=document.getElementsByClassName("movies-container")[0];
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = document.getElementsByClassName("title-text");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      parent.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
}

    function sortByYear()
    {
        console.log("Sort by year");
        
        let list, i, switching, b, shouldSwitch;
  list = document.getElementsByClassName("movies-box");
    let parent=document.getElementsByClassName("movies-container")[0];
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = document.getElementsByClassName("relese-date");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      parent.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
    }
    
    var sortList=document.getElementsByClassName("sort-list")[0];
    sortList.addEventListener("change",(e) => {
        let value=e.target.value;
        if(value == "Movie title")
            {
                sortByTitle();
            }
        if(value == "Year of relese")
            {
                sortByYear();
            }
    })
    
    
}
    
    