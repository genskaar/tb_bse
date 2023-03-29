// setup 
const data = {
  labels: ['Blattu', 'XCAL', 'Tranced', 'Enigma', 'Jonesmalones', 'Skaar', 'Delara Exibil', 'G4reth', 'Patrick4', 'ArtVandalay', 'Javin Fis', 'Zarlis Rahn', 'Username', 'RoTahn Taske', 'Jeeves', 'Puck', 'Trask droll', 'JHang', 'T', 'MINI DarthAzazel', 'Nomad', 'DarthDax', 'WharfRat', 'El Jefe', 'Fidget92', 'Lambert', 'Marl Jewel', 'Rhil Margos', 'Isaac72', 'Tani Mayse', 'non7top', 'BobaChuck91', 'Squanchy420', 'BobbyMarshal', 'Chikiller', 'Kÿłë škÿwäłkër', 'Verage Valoor', 'Avatany', 'JediAhsoka', 'Tyrian', 'Scof', 'JediScum', 'OwningXylophone', 'Excessive Fist', 'Yosh', 'Geralt of Rivia', 'Taco Hat', 'LordPolunXo', 'DarthRevanNL', 'Kdizyl', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['91', '87', '86', '83', '82', '80', '77', '72', '66', '66', '64', '64', '62', '62', '59', '59', '59', '59', '58', '57', '57', '56', '53', '52', '52', '49', '49', '48', '46', '45', '43', '41', '37', '37', '35', '35', '34', '33', '33', '30', '30', '30', '29', '25', '24', '23', '19', '19', '17', '16', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1
  },{
    label: 'Missions Attempted',
    data: ['60', '56', '57', '55', '53', '51', '50', '50', '44', '40', '43', '45', '46', '54', '46', '51', '48', '41', '45', '47', '45', '45', '45', '36', '45', '44', '42', '49', '41', '48', '43', '35', '30', '34', '40', '33', '28', '32', '23', '26', '28', '33', '36', '19', '27', '26', '26', '17', '24', '33', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Phases Deployed',
    data: ['6', '6', '6', '6', '5', '6', '6', '6', '5', '5', '5', '6', '3', '6', '6', '6', '6', '4', '5', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '5', '5', '4', '6', '6', '5', '3', '6', '5', '6', '5', '6', '5', '5', '3', '5', '6', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Operation Units Deployed',
    data: ['17', '29', '26', '12', '49', '45', '27', '6', '18', '12', '9', '0', '31', '10', '20', '24', '30', '32', '8', '34', '22', '26', '17', '6', '16', '13', '21', '24', '6', '7', '6', '8', '16', '9', '17', '0', '31', '4', '16', '17', '21', '3', '14', '7', '4', '26', '9', '1', '12', '18', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
