window.addEventListener('DOMContentLoaded', function() {
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates, // starting position [lng, lat]
        zoom: 9
    });

    // Wait for the map to fully load before adding the marker
    map.on('load', function() {
        console.log(coordinates);
        const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<p><b>${locationString}</b></p><p><i>Exact location provided after booking</i></p>`)
            .setMaxWidth("300px");

        const marker = new mapboxgl.Marker({ color: 'red' })
            .setLngLat(coordinates) // listing.geometry.coordinates
            .setPopup(popup)
            .addTo(map);
    });
});
