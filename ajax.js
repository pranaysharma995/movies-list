window.onload=() =>
{
    console.log("Document loaded");
    var movies_container=document.querySelector(".movies-container");
    
    //set up new http request 
    var xhr=new XMLHttpRequest();
    xhr.onload=() =>
    {
        if(xhr.status >=200 && xhr.status < 300)
            {
                //run when request success
                console.log("Success");
                let data=JSON.parse(xhr.response);
                for(let i=0;i<data.length;i++)
                    {
                       console.log(data[i]);
                        let node = document.createElement("div");
                        node.classList.add("col");
                        node.classList.add("mgb-30");
                        node.classList.add("bg-green");
                        let movie_title=data[i].Title.split("(");
                        console.log(movie_title[0]);
                        let release_data=movie_title[1].split(")");
                        console.log(release_data);
                        node.innerHTML="<img src='"+data[i].Poster+"' Alt='"+movie_title[0]+"' /><div class='movie-title'><p class='title-text opensans color-white fz-15'>"+movie_title[0]+"</p></div><div class='relese-container'><p class='relese-date opensans color-white fz-15'>"+release_data[0]+"</p></div>";
                    movies_container.appendChild(node);
                    }
            }
        else{
            console.log("Failed");
        }
        console.log("This run all the time");
    }
    
    xhr.open("GET","dataset/data.json");
    xhr.send();
}