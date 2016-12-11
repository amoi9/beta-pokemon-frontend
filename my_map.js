var map_manager = {
    "map" : null,
    "map_items" : [],
}

map_manager.map_items = [
    {
        "pokemon_id": 12,
        "expiration_timestamp_ms": 1481423394,
        "latitude": 51.5033640,
        "longitude": -0.1276240,
    },
    {
        "pokemon_id": 2,
        "expiration_timestamp_ms": 1481423394,
        "latitude": 51.5133640,
        "longitude": -0.1286230,
    },
]

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AkXOPR73n33ySDiXHEoIiJodh58VRCLy-q6myErQF6m1ow8jzSThCI57vXwT8aFo'
    });
    map_manager.map = map
    
    for (var i in map_manager.map_items) {
        map_item = map_manager.map_items[i]
        var pushpin = new Microsoft.Maps.Pushpin(
            map.getCenter(), 
            new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]),
            { 
                icon: 'https://raw.githubusercontent.com/chenditc/mypokemon.io/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] +'.png'
            }); 
        map.entities.push(pushpin);
    }
}
