var highwayColor = '#3366FF';
var avenueColor = '#CCCC33';
var roadColor = '#33CC33';

var rawData = [
  {
    x:"-225",
    z:" 258",
    label: "Spawn"
  },
  {
    x:"2295",
    z:" -1136",
    label: "Ender Ender"
  },
  {
    x:"-1299",
    z:"-787",
    label: " Sheeper Sheeper"
  },
  {
    x:"4002",
    z:" -3987",
    label: "Ice Farm"
  },
  {
    x:"3200",
    z:" -1360",
    label: "Wither Skeleton Area"
  },
  {
    x:"1834",
    z:" -125",
    label: " Skeleton Farm"
  },
  {
    x:"1868",
    z:" 3521",
    label: " Creeper Farm"
  },
  {
    x:"3600",
    z:" -3000",
    label: "Mining Mesa"
  },
  {
    x:"-256",
    z:" 2680",
    label: " MJ"
  },
  {
    x:"975",
    z:"-1099",
    label: "Cuth"
  },
  {
    x:"-6436",
    z:"2356",
    label: " Chris"
  },
  {
    x:"964",
    z:"2376",
    label: " DiNew"
  },
  {
    x:"4161",
    z:" -2046",
    label: "Jozza"
  },
  {
    x:"-45",
    z:"-371",
    label: " riehlg"
  },
  {
    x:"-1141",
    z:"-345",
    label: " shasshen"
  },
  {
    x:"-1630",
    z:"1530",
    label: " Comberbach"
  },
  {
    x:"800",
    z:"1925",
    label: " Skuller"
  },
  {
    x:"-2728",
    z:"-6420",
    label: "Mario"
  },
  {
    x:"6048",
    z:" -4280",
    label: "Nerdseh"
  },
  {
    x:"1736",
    z:" 71",
    label: "Kanon"
  },
  {
    x:"-848",
    z:" -3600",
    label: "miea"
  },
  {
    x:"1180",
    z:" 1250",
    label: " Saltensis"
  },
  {
    x:"-4160",
    z:"6660",
    label: " Stormer"
  },
  {
    x:"225",
    z:"-1668",
    label: "Ultimate Dorifuto"
  },
  {
    x:"-972",
    z:" 5632",
    label: " Redz4life_42"
  },
  {
    x:"100",
    z:"1760",
    label: " krakao"
  },
  {
    x:"5400",
    z:" -6100",
    label: "DankNissan"
  },
  {
    x:"350",
    z:"8370",
    label: " Rinzen"
  },
  {
    x:"2322",
    z:" -982",
    label: " Alexmucrazy"
  },
  {
    x:"-2096",
    z:"-1280",
    label: "Delinquencies"
  },
  {
    x:"1720",
    z:" 3566",
    label: " KnighT^"
  },
];

var data = [
  {
    color: highwayColor,
    label: 'Northern Highway',
    stops: [
      {
        label: 'Nether Hub',
        x: '0',
        z: '0',
        type: 'interchange'
      },
      {
        label: "",
        x: '',
        z: '-1536'
      }
    ]
  },
  {
    color: highwayColor,
    label: 'Eastern Highway',
    stops: [
      {
        label: 'Nether Hub',
        x: '0',
        z: '0'
      },
      {
        label: "",
        x: '1536',
        z: '0'
      }
    ]
  },
  {
    color: highwayColor,
    label: 'Southern Highway',
    stops: [
      {
        label: '',
        x: '0',
        z: '0',
      },
      {
        label: "",
        x: '0',
        z: '1536'
      }
    ]
  },
  {
    color: highwayColor,
    label: 'Western Highway',
    stops: [
      {
        label: '',
        x: '0',
        z: '0',
        type: ''
      },
      {
        label: "",
        x: '-1536',
        z: '0'
      }
    ]
  }
];

for(var i=125;i<=1500;i=i+125){
  data.unshift({
    color: avenueColor,
    stops: [
      {
        x: i,
        z: '0'
      },
      {
        x: i,
        z: '1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        x: i*-1,
        z: '0'
      },
      {
        x: i*-1,
        z: '1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        x: i,
        z: '0'
      },
      {
        x: i,
        z: '-1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        x: i*-1,
        z: '0'
      },
      {
        x: i*-1,
        z: '-1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        z: i,
        x: '0'
      },
      {
        z: i,
        x: '1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        z: i*-1,
        x: '0'
      },
      {
        z: i*-1,
        x: '1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        z: i,
        x: '0'
      },
      {
        z: i,
        x: '-1536'
      }
    ]
  });
  data.unshift({
    color: avenueColor,
    stops: [
      {
        z: i*-1,
        x: '0'
      },
      {
        z: i*-1,
        x: '-1536'
      }
    ]
  });
}

$.each(rawData, function(index, location){
  var point = {
    x: parseInt(Number(location.x)/8),
    z: parseInt(Number(location.z)/8)
  };

  var main = Math.abs(point.z) < Math.abs(point.x) ? "z" : "x";

  var avenue = Math.round(point[main]/125) * 125;

  var road = {
    color: roadColor,
    stops: [
      {
        x: point.x,
        z: point.z,
        label: location.label
      }
    ]
  };

  var intersection = {
    x: point.x,
    z: point.z
  }

  intersection[main] = avenue;

  road.stops.unshift(intersection);

  data.unshift(road);
});

var $map = $('#js-map');

$.each(data, function(index, line){
  var $line = $('<ul/>');
  $line.attr('data-color', line.color);
  $line.attr('data-label', line.label);

  $.each(line.stops, function(index, stop){
    var coords = {
      x: (Number(stop.x) / 128) + 12,
      z: (Number(stop.z) / 128) + 12,
    };
    var $stop = $('<li/>');
    $stop.attr('data-coords', coords.x + ',' + coords.z);
    $stop.attr('data-marker', stop.type);
    $stop.text(stop.label);

    $line.append($stop);
  });

  $map.append($line);
});

$map.subwayMap({ debug: true });