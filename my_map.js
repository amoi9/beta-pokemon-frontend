var map_manager = {
    "map" : null,
    "map_items" : [],
}

map_manager.map_items = [
    {
        "pokemon_id": 12,
        "expiration_timestamp_ms": 1481433445,
        "latitude": 37.54,
        "longitude": -122.26,
    },
    {
        "pokemon_id": 2,
        "expiration_timestamp_ms": 1481433443,
        "latitude": 37.55,
        "longitude": -122.25,
    },
]

function get_count_down_from_timestap(expire) {
    var now_time = new Date().getTime() / 1000;
    var time_left = expire - now_time;
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AkXOPR73n33ySDiXHEoIiJodh58VRCLy-q6myErQF6m1ow8jzSThCI57vXwT8aFo'
    });
    map_manager.map = map
    
    refresh_pokemons();
}

function refresh_pokemon() {
    var pushpins = []
    for (var i in map_manager.map_items) {
        map_item = map_manager.map_items[i]
        var icon_url = 'https://raw.githubusercontent.com/chenditc/mypokemon.io/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] +'.png'
        var pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]),
            { 
                icon: icon_url,
                title: get_count_down_from_timestap(map_item["expiration_timestamp_ms"]),
            }); 
        pushpins.push(pushpin);
    }
    
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpins);
    
    map_manager.map.layers.clear();
    
    map_manager.map.layers.insert(layer);
}
