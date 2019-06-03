var apiKey = "26fb307a06f76f03e40712869b202ee6",
    actor,
    adult = "true",
    actorId = "",
    jsonData,
    actorName,
    url,
    total,

    i = 0;

   

var machanism = function () {
    actorName = document.getElementById("actorName").value

    if (actorName != "") {
        actorName = actorName.split(" ")
        if (actorName.length > 1) {
            actorName.forEach(element => {
                if (!actor)
                    actor = element
                else
                    actor = actor + "%20" + element

            });
        } else {
            actor = actorName[0]
        }
        console.log(actor)

        console.log(url)

        actorId = getActorId();
        
        // setTimeout(() => {
        //     data =  getMovies(actorId); 
        //     console.log(data)
        //   }, 2000);

        // console.log(this.actorId)



        //         fetch(url)
        //         .then(res => res.json())
        //         .then(json => {
        //         console.log(json)
        //         console.log(url)
        //  });

        // })












    }
    this.actorName = "" ;



}
var getActorId = async function () {
     data = []; 
    this.url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actor}&include_adult=${adult}`
    let personId;

    await fetch(url)
        .then(res => res.json())
        .then(async json => {

            personId = json.results[0].id

        })


    console.log(personId)
    this.url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
        .then(json => {
            json.cast.forEach(element => {
                data.push(element.title)
                   
            })
            console.log(data)
            table = document.getElementById("outputTable") 
            
            for (var i = 0; i < data.length; i++) {
                var tr = table.insertRow(i);
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = data[i];
                tr.appendChild(th);
            }
            this.actor = "" ;
            actorName = "" ;
            
            


        })

    


}



