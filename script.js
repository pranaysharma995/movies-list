
window.onload=function()
{
    var add_to_library=document.getElementsByClassName("add-to-library");
    var delete_from_library=document.getElementsByClassName("delete-from-library");
    var movies_library_container=document.getElementsByClassName("movies-library-container")[0];
    var movies_list_container=document.getElementsByClassName("movies-list-container")[0];
    var sort_list=document.getElementsByClassName("sort-list")[0];
    var show_movies_library_container=document.getElementsByClassName("show-movies-library")[0];
    var show_movies_list_container=document.getElementsByClassName("show-movies-list")[0];
        var search=document.getElementsByClassName("search-box")[0];  
    var filmArray=document.getElementsByClassName("movies-box");
    for(let i=0;i<add_to_library.length;i++)
        {
            add_to_library[i].addEventListener("click",(e) =>
                                              {
                let movies_block=e.target.parentElement.parentElement;
                add_movies_to_library(movies_block,movies_library_container);
            })
            delete_from_library[i].addEventListener("click",(e) =>{
                 let movies_block=e.target.parentElement.parentElement;
                delete_movies_from_library(movies_block,movies_library_container);
            })
        }
    
    function add_movies_to_library(movie,library)
    {
                
        library.appendChild(movie);
        
    }
    function delete_movies_from_library(movie,library)
    {
        library.removeChild(movie);
        add_movies_to_list(movie,movies_list_container);
    }
    function add_movies_to_list(movie,list)
    {
        list.appendChild(movie);
    }
    
    
    
    
    
    
    
    
    
    
    
    show_movies_list_container.addEventListener("click",() =>
                                  {
        movies_library_container.style.display="none";
        movies_list_container.style.display="flex";
        sort_list.classList.add("in-list");
        sort_list.classList.remove("in-library");
    })
    show_movies_library_container.addEventListener("click",function()
                                   {
         movies_library_container.style.display="flex";
        movies_list_container.style.display="none";
         sort_list.classList.remove("in-list");
        sort_list.classList.add("in-library");
    })
    
    
    
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
    
    
    
    function sortByTitleInList()
    {
        console.log("Sort by title");
        
        let list, i, switching, b, shouldSwitch;
  list = movies_list_container.getElementsByClassName("movies-box");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = movies_list_container.getElementsByClassName("title-text");
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
      movies_list_container.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
}

    function sortByYearInList()
    {
        console.log("Sort by year");
        
        let list, i, switching, b, shouldSwitch;
  list = movies_list_container.getElementsByClassName("movies-box");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = movies_list_container.getElementsByClassName("relese-date");
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
      movies_list_container.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
    }
    
    function sortByTitleInLibrary()
    {
        console.log("Sort by title");
        
        let list, i, switching, b, shouldSwitch;
  list = movies_library_container.getElementsByClassName("movies-box");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = movies_library_container.getElementsByClassName("title-text");
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
      //movies_list_container.insertBefore(list[i + 1], list[i]);
      movies_library_container.insertBefore(list[i+1],list[i]);
      switching = true;
    }
  }
}

    function sortByYearInLibrary()
    {
        console.log("Sort by year");
        
        let list, i, switching, b, shouldSwitch;
  list = movies_library_container.getElementsByClassName("movies-box");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = movies_library_container.getElementsByClassName("relese-date");
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
      //movies_list_container.insertBefore(list[i + 1], list[i]);
      movies_library_container.insertBefore(list[i+1],list[i]);
      switching = true;
    }
  }
    }
    
    var sortList=document.getElementsByClassName("sort-list")[0];
    sortList.addEventListener("change",(e) => {
        let value=e.target.value;
        if(value == "Movie title" && e.target.classList.contains('in-list'))
            {
                sortByTitleInList();
            }
        if(value == "Year of relese" && e.target.classList.contains('in-list'))
            {
                sortByYearInList();
            }
         if(value == "Movie title" && e.target.classList.contains('in-library'))
            {
                sortByTitleInLibrary();
            }
        if(value == "Year of relese" && e.target.classList.contains('in-library'))
            {
                sortByYearInLibrary();
            }
    })
    
    
}
    
    