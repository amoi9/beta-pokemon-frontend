function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AkXOPR73n33ySDiXHEoIiJodh58VRCLy-q6myErQF6m1ow8jzSThCI57vXwT8aFo'
    });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/chenditc/mypokemon.io/blob/gh-pages/images/pushpin_images/pokemon/1.png',
        anchor: new Microsoft.Maps.Point(12, 39) });
    map.entities.push(pushpin);
}
