let metroAreaCenterCoordinates = [44.96, -93.2];
let zoomLevel = 9; // 1 = whole world 20 = city blocks

// map function takes an id of a div to draw the map under
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel);

// L refers to the leaflet object
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

// looping over the campuses array and adding popups for each of the campuses
for (let i in campuses) {
    let campus = campuses[i];
    L.marker(campus.coordinates).bindPopup(`<b>${campus.name}</b><br><a href="${campus.website}">Website</a>`).addTo(map);
}

// let mctcCoordinates = [44.9724, -93.2844];
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://mineapolis.edu">Website</a>')
//     .addTo(map);
//
// let stPaulCoordinates = [44.9483, -93.1099];
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map);
//
// let nmdCoordinates = [44.8297, -93.3312];
// let nmdMarker = L.marker(nmdCoordinates)
//     .bindPopup('Normandale Community College<br><a href="http://www.normandale.edu">Website</a>')
//     .addTo(map);

// here we are adding the circle for the area that is the metro area
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'green',
        radius: 30000,
        fillOpacity: 0.1
    })
    .bindPopup('Twin Cities Metro Area')
    .addTo(map);
