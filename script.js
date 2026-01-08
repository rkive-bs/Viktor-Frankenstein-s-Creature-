// Location data for Gothic novels
const locations = [
    // Frankenstein (1818)
    {
        name: "Geneva, Switzerland",
        lat: 46.2044,
        lng: 6.1432,
        novel: "frankenstein",
        color: "#8B4513",
        description: "The Frankenstein family home. Victor's childhood was spent here before his fateful journey to Ingolstadt.",
        significance: "Victor's childhood home and place of his family's tragic fate"
    },
    {
        name: "Ingolstadt, Germany",
        lat: 48.7665,
        lng: 11.4257,
        novel: "frankenstein",
        color: "#8B4513",
        description: "University of Ingolstadt, where Victor Frankenstein studied natural philosophy and created his creature.",
        significance: "Birthplace of the creature - the site of Victor's greatest triumph and curse"
    },
    {
        name: "Mont Blanc, France",
        lat: 45.8326,
        lng: 6.8652,
        novel: "frankenstein",
        color: "#8B4513",
        description: "The majestic Alps where Victor encounters his creature for a fateful conversation in the Sea of Ice.",
        significance: "Site of Victor's confrontation with the creature and hearing its tale"
    },
    {
        name: "Orkney Islands, Scotland",
        lat: 59.0000,
        lng: -3.0000,
        novel: "frankenstein",
        color: "#8B4513",
        description: "Remote Scottish islands where Victor begins creating a companion for his creature, only to destroy it.",
        significance: "Where Victor destroys the female creature, sealing his doom"
    },
    {
        name: "Arctic Ocean",
        lat: 80.0000,
        lng: 0.0000,
        novel: "frankenstein",
        color: "#8B4513",
        description: "The frozen wasteland where Walton's ship encounters Victor pursuing his creature to the ends of the earth.",
        significance: "Final confrontation and Victor's death in the eternal ice"
    },

    // Jane Eyre (1847)
    {
        name: "Gateshead Hall",
        lat: 54.9609,
        lng: -1.6087,
        novel: "jane-eyre",
        color: "#8B0000",
        description: "The Reed family estate where young Jane Eyre suffered a miserable childhood as an orphan.",
        significance: "Jane's childhood home and site of her first rebellion"
    },
    {
        name: "Lowood School",
        lat: 54.2000,
        lng: -1.5000,
        novel: "jane-eyre",
        color: "#8B0000",
        description: "The harsh charity school where Jane received her education and met Helen Burns.",
        significance: "Where Jane gains education and her first true friend"
    },
    {
        name: "Thornfield Hall",
        lat: 53.8000,
        lng: -1.5500,
        novel: "jane-eyre",
        color: "#8B0000",
        description: "Mr. Rochester's estate where Jane works as governess. A place of mystery, madness, and dark secrets.",
        significance: "Site of Jane and Rochester's romance and the revelation of Bertha Mason"
    },
    {
        name: "Moor House",
        lat: 54.0000,
        lng: -2.0000,
        novel: "jane-eyre",
        color: "#8B0000",
        description: "The Rivers family home where Jane finds refuge after fleeing Thornfield.",
        significance: "Where Jane discovers her family and nearly marries St. John Rivers"
    },
    {
        name: "Ferndean Manor",
        lat: 53.7000,
        lng: -1.8000,
        novel: "jane-eyre",
        color: "#8B0000",
        description: "Rochester's remote hunting lodge where Jane and Rochester are finally reunited.",
        significance: "Jane and Rochester's final home and their happy ending"
    },

    // Wuthering Heights (1847)
    {
        name: "Wuthering Heights",
        lat: 53.7500,
        lng: -2.0000,
        novel: "wuthering-heights",
        color: "#2F4F4F",
        description: "The wild, windswept farmhouse on the Yorkshire moors, home to the Earnshaws and later Heathcliff.",
        significance: "Heathcliff's domain and symbol of passionate, destructive love"
    },
    {
        name: "Thrushcross Grange",
        lat: 53.7200,
        lng: -1.9500,
        novel: "wuthering-heights",
        color: "#2F4F4F",
        description: "The refined home of the Linton family, contrasting sharply with the savage Heights.",
        significance: "Symbol of civilization and refinement, opposite to the Heights' wildness"
    },
    {
        name: "Yorkshire Moors",
        lat: 53.8000,
        lng: -2.0000,
        novel: "wuthering-heights",
        color: "#2F4F4F",
        description: "The desolate, romantic moorland where Catherine and Heathcliff roamed freely in their youth.",
        significance: "The wild landscape that mirrors the untamed passion of the characters"
    },

    // Dracula (1897)
    {
        name: "Castle Dracula, Transylvania",
        lat: 47.4979,
        lng: 25.3767,
        novel: "dracula",
        color: "#800020",
        description: "The ancient, forbidding castle in the Carpathian Mountains, home to Count Dracula.",
        significance: "The vampire's lair and Jonathan Harker's prison"
    },
    {
        name: "Bistritz, Romania",
        lat: 47.1333,
        lng: 24.5000,
        novel: "dracula",
        color: "#800020",
        description: "The town where Jonathan Harker stays before his journey to Castle Dracula.",
        significance: "Last stop before entering Dracula's domain"
    },
    {
        name: "Whitby, England",
        lat: 54.4858,
        lng: -0.6206,
        novel: "dracula",
        color: "#800020",
        description: "The Yorkshire coastal town where Dracula arrives in England aboard the Demeter, a ghost ship.",
        significance: "Dracula's arrival in England and Lucy's transformation"
    },
    {
        name: "London, England",
        lat: 51.5074,
        lng: -0.1278,
        novel: "dracula",
        color: "#800020",
        description: "The great metropolis where Dracula hunts and where Van Helsing leads the fight against him.",
        significance: "Main battleground between Dracula and the vampire hunters"
    },
    {
        name: "Carfax Estate, Purfleet",
        lat: 51.4831,
        lng: 0.2297,
        novel: "dracula",
        color: "#800020",
        description: "The ruined abbey near London that Dracula purchases as his English base.",
        significance: "Dracula's English stronghold adjacent to the asylum"
    },

    // Northanger Abbey (1817)
    {
        name: "Bath, England",
        lat: 51.3811,
        lng: -2.3590,
        novel: "northanger-abbey",
        color: "#4B0082",
        description: "The fashionable Georgian spa town where Catherine Morland meets the Tilneys and begins her adventures.",
        significance: "Social center and where Catherine's Gothic imagination is sparked"
    },
    {
        name: "Northanger Abbey, Gloucestershire",
        lat: 51.8000,
        lng: -2.2000,
        novel: "northanger-abbey",
        color: "#4B0082",
        description: "The Tilney family's medieval abbey, which Catherine imagines to be full of Gothic horrors.",
        significance: "Catherine's Gothic fantasies meet mundane reality"
    },
    {
        name: "Fullerton, England",
        lat: 51.5000,
        lng: -1.8000,
        novel: "northanger-abbey",
        color: "#4B0082",
        description: "The Morland family's country parsonage in the English countryside.",
        significance: "Catherine's home and starting point of her journey"
    }
];

// Novel metadata
const novels = {
    "frankenstein": {
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        color: "#8B4513"
    },
    "jane-eyre": {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        year: 1847,
        color: "#8B0000"
    },
    "wuthering-heights": {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        year: 1847,
        color: "#2F4F4F"
    },
    "dracula": {
        title: "Dracula",
        author: "Bram Stoker",
        year: 1897,
        color: "#800020"
    },
    "northanger-abbey": {
        title: "Northanger Abbey",
        author: "Jane Austen",
        year: 1817,
        color: "#4B0082"
    }
};

// Initialize map
const map = L.map('map').setView([51.5074, 10.0], 4);

// Add dark themed tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
}).addTo(map);

// Store markers for filtering
let markers = [];

// Create custom icon
function createCustomIcon(color) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background-color: ${color};
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
        "></div>`,
        iconSize: [25, 25],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
    });
}

// Add markers to map
function addMarkers(filterNovel = 'all') {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Filter locations
    const filteredLocations = filterNovel === 'all'
        ? locations
        : locations.filter(loc => loc.novel === filterNovel);

    // Add filtered markers
    filteredLocations.forEach(location => {
        const marker = L.marker([location.lat, location.lng], {
            icon: createCustomIcon(location.color)
        }).addTo(map);

        const novelInfo = novels[location.novel];
        const popupContent = `
            <h3>${location.name}</h3>
            <p><strong>Novel:</strong> ${novelInfo.title} (${novelInfo.year})</p>
            <p><strong>Author:</strong> ${novelInfo.author}</p>
            <p><strong>Description:</strong> ${location.description}</p>
            <p><strong>Significance:</strong> ${location.significance}</p>
        `;

        marker.bindPopup(popupContent);
        markers.push(marker);
    });

    // Adjust map view to show all markers
    if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Initial marker display
addMarkers();

// Filter button functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter markers
        const novel = button.dataset.novel;
        addMarkers(novel);
    });
});

// Add some interactivity on hover
markers.forEach(marker => {
    marker.on('mouseover', function() {
        this.openPopup();
    });
});
