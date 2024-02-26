let usCenterCoords = [35, -96];
let zoomLevel = 4;

let bridges = [
    {name: 'Verrazano-Narrows Bridge', cityState: 'New York, NY', span: 1298.4, location: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge', cityState: 'San Francisco and Marin, CA', span: 1280.2, location: [37.8199, -122.4783]},
    {name: 'Mackinac Bridge', cityState: 'Mackinaw and St Ignace, MI', span: 1158.0, location: [45.8174, -84.7278]},
    {name: 'George Washington Bridge', cityState: 'New York, NY and New Jersey, NJ', span: 1067.0, location: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', cityState: 'Tacoma and Kitsap, WA', span: 853.44, location: [47.2690, -122.5517]}
]

// the method finds the name of the bridge with the longest span and returns it
let findLongestBridge = () => {
    let bridgeName = '';
    let longestSpan = 0;
    for (let i in bridges) {
        let bridge = bridges[i];
        if (bridge.span > longestSpan) {
            bridgeName = bridge.name;
            longestSpan = bridge.span;
        }
    }
    return bridgeName;
}

// setting this variable equal to the bridge with the longest span
let longestBridgeName = findLongestBridge();

// the icon to be used for all the bridges except the longest one
let standardIcon = L.icon({
    iconUrl: 'icons/bridge.png',

    iconSize:     [35, 46], // size of the icon
    iconAnchor:   [17, 23], // point of the icon which will correspond to marker's location
    popupAnchor:  [1, -15] // point from which the popup should open relative to the iconAnchor
});

// the icon to be used with the longest bridge
let specialIcon = L.icon({
    iconUrl: 'icons/longest-bridge.png',

    iconSize:     [35, 46], // size of the icon
    iconAnchor:   [17, 23], // point of the icon which will correspond to marker's location
    popupAnchor:  [1, -15] // point from which the popup should open relative to the iconAnchor
});

// the map object
let map = L.map('bridges-map').setView(usCenterCoords, zoomLevel);

// adding the tilelayer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// iterating over the bridges array and adding the icons according to the bridge data.
for (let i in bridges) {
    let bridge = bridges[i];
    L.marker(bridge.location, (bridge.name === longestBridgeName) ? {icon: specialIcon} : {icon: standardIcon}).bindPopup(`<b>${bridge.name}</b><br>${bridge.cityState}<br>Length: ${bridge.span} meters`).addTo(map);
}

