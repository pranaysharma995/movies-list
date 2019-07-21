
    console.log("Document loaded");
    var movies_list_container=document.querySelector(".movies-list-container");
     var library_container=document.querySelector(".movies-library-container");
    
    //set up new http request 
    var xhr=new XMLHttpRequest();
    xhr.onload=() =>
    {
        if(xhr.status >=200 && xhr.status < 300)
            {
                //run when request success
                let data=JSON.parse(xhr.response);
                for(let i=0;i<data.length;i++)
                    {
                       console.log(data[i]);
                        let node = document.createElement("div");
                        node.classList.add("col");
                        node.classList.add("mgb-30");
                        node.classList.add("bg-green");
                         node.classList.add("movies-box");
                        
                        let movie_title=data[i].Title.split("(");
                        let release_data=movie_title[1].split(")");
                        node.innerHTML="<img src='"+data[i].Poster+"' Alt='"+movie_title[0]+"' /><div class='movie-title'><p class='title-text opensans color-white fz-15'>"+movie_title[0]+"</p></div><div class='relese-container'><p class='relese-date opensans color-white fz-15'>"+release_data[0]+"</p><button type='button' class='add-to-library active'>Add</button><button type='button' class='delete-from-library'>Delete</button></div>";
                    movies_list_container.appendChild(node);
                    }
            }
        else{
            console.log("Failed");
        }
        console.log("This run all the time");
    }
    
    xhr.open("GET","dataset/data.json");
    xhr.send();
