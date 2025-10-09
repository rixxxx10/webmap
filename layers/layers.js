var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_point_1 = new ol.format.GeoJSON();
var features_point_1 = format_point_1.readFeatures(json_point_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_1.addFeatures(features_point_1);
var lyr_point_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_1, 
                style: style_point_1,
                popuplayertitle: 'point',
                interactive: true,
                title: '<img src="styles/legend/point_1.png" /> point'
            });
var format_demo_20250919demo_data_projets_enabel_2 = new ol.format.GeoJSON();
var features_demo_20250919demo_data_projets_enabel_2 = format_demo_20250919demo_data_projets_enabel_2.readFeatures(json_demo_20250919demo_data_projets_enabel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_demo_20250919demo_data_projets_enabel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_demo_20250919demo_data_projets_enabel_2.addFeatures(features_demo_20250919demo_data_projets_enabel_2);
var lyr_demo_20250919demo_data_projets_enabel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_demo_20250919demo_data_projets_enabel_2, 
                style: style_demo_20250919demo_data_projets_enabel_2,
                popuplayertitle: 'demo_20250919 — demo_data_projets_enabel',
                interactive: true,
                title: '<img src="styles/legend/demo_20250919demo_data_projets_enabel_2.png" /> demo_20250919 — demo_data_projets_enabel'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_point_1.setVisible(true);lyr_demo_20250919demo_data_projets_enabel_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_point_1,lyr_demo_20250919demo_data_projets_enabel_2];
lyr_point_1.set('fieldAliases', {'fid': 'fid', 'type': 'type', 'desc': 'desc', });
lyr_demo_20250919demo_data_projets_enabel_2.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'type': 'type', 'partenaires': 'partenaires', 'budget_24': 'budget_24', 'budget_25': 'budget_25', 'statut': 'statut', 'pm': 'pm', });
lyr_point_1.set('fieldImages', {'fid': 'TextEdit', 'type': 'TextEdit', 'desc': 'TextEdit', });
lyr_demo_20250919demo_data_projets_enabel_2.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'type': 'TextEdit', 'partenaires': 'TextEdit', 'budget_24': 'TextEdit', 'budget_25': 'TextEdit', 'statut': 'TextEdit', 'pm': 'TextEdit', });
lyr_point_1.set('fieldLabels', {'fid': 'no label', 'type': 'no label', 'desc': 'no label', });
lyr_demo_20250919demo_data_projets_enabel_2.set('fieldLabels', {'fid': 'no label', 'nom': 'no label', 'type': 'no label', 'partenaires': 'no label', 'budget_24': 'no label', 'budget_25': 'no label', 'statut': 'no label', 'pm': 'no label', });
lyr_demo_20250919demo_data_projets_enabel_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});