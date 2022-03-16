
document.getElementById("artist_submit").addEventListener("click", function(event) {
  console.log(event)
  event.preventDefault();
  
  const value = document.getElementById("artist_input").value;
  if (value === "")
    return;
  console.log(value);
  
  const url = "https://rest.bandsintown.com/artists/" + value + "/?app_id=2f221d342f2ec16b6fade96e55fff099";
  console.log(url);
  
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      console.log(json);
		let upcoming_event_count = json.upcoming_event_count;
      document.getElementById("event_count").innerHTML = upcoming_event_count;
      
      let artist_picture = json.image_url;
	  document.getElementById("artist_image").src = artist_picture;

		let name = json.name;
		
      artist_name_nodes = document.getElementsByClassName("artist_name");
      
      for (var i=0; i<artist_name_nodes.length; i++)
      {
      	var that_node = artist_name_nodes[i];
      	console.log(that_node);
      	that_node.innerHTML = name;
      }
      
      if (upcoming_event_count == 0)
      {
      document.getElementById("find_events").style.display = "none";
      	
      }
      else
      {
      document.getElementById("find_events").style.display = "inline-block";
      }
      
      document.getElementById("output_display").style.display = "inline-block";

	  let upcoming = json.url;
      document.getElementById("find_events").href = upcoming;

      
    });
    
	
});

