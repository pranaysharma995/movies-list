
window.onload=function()
{
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
    
    