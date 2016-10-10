// inspired by https://snazzymaps.com/style/23535/black-n-white
export const mapStyles = [
  {
    'featureType': 'all',
    'elementType': 'all',
    'stylers': [
      { 'saturation': -100 },
      { 'gamma': 0.5 }
    ]
  }, {
    'featureType': 'landscape',
    'stylers': [
      { 'visibility': 'off' }
    ]
  }, {
    'featureType': 'road',
    'stylers': [
      { 'visibility': 'off' }
    ]
  }, {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      { 'visibility': 'off' }
    ]
  }, {
    'featureType': 'transit',
    'elementType': 'geometry',
    'stylers': [
      { 'visibility': 'off' }
    ]
  }, {
    'featureType': 'administrative.country',
    'elementType': 'geometry',
    'stylers': [
      { 'color': '#9d9c9b' }
    ]
  }, {
    'featureType': 'administrative.locality',
    'elementType': 'labels',
    'stylers': [
      { 'visibility': 'off' }
    ]
  }, {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      { 'color': '#ffffff' },
      { 'saturation': '0' }
    ]
  }
];
