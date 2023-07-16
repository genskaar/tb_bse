// setup 
const data = {
  labels: ['Blattu', 'XCAL', 'Tranced', 'Jonesmalones', 'Delara Exibil', 'DarthDax', 'Enigma', 'Skaar', 'Javin Fis', 'Puck', 'MINI DarthAzazel', 'Zarlis Rahn', 'Kirath Tyria', 'RoTahn Taske', 'Trask droll', 'ArtVandalay', 'Jeeves', 'Username', 'G4reth', 'Patrick4', 'WharfRat', 'Chikiller', 'T', 'OwningXylophone', 'Nomad', 'BobbyMarshal', 'JHang', 'Marl Jewel', 'Dârth Jungle Asian', 'Rhil Margos', 'El Jefe', 'Lambert', 'Squanchy420', 'Q Ryker', 'Kÿłë škÿwäłkër', 'Verage Valoor', 'Tani Mayse', 'thirteensuns', 'non7top', 'Geralt of Rivia', 'Avatany', 'JediAhsoka', 'BobaChuck91', 'Scof', 'Tyrian', 'Yosh', 'Excessive Fist', 'Fidget92', 'Taco Hat', 'DarthRevanNL', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['109', '101', '98', '90', '88', '86', '83', '79', '78', '70', '69', '68', '68', '67', '67', '66', '66', '65', '65', '64', '62', '62', '61', '59', '59', '57', '57', '56', '52', '52', '49', '46', '42', '42', '42', '41', '41', '41', '40', '40', '38', '38', '35', '33', '30', '27', '26', '25', '22', '8', ],
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
    label: 'Waves Completed (Phase 6)',
    data: ['12', '10', '9', '12', '6', '8', '8', '8', '8', '6', '0', '4', '5', '2', '5', '2', '3', '4', '3', '6', '3', '2', '9', '5', '5', '3', '3', '4', '5', '3', '2', '2', '2', '1', '2', '1', '2', '1', '0', '4', '3', '6', '5', '1', '0', '1', '3', '0', '1', '0', ],
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
    label: 'Missions Attempted',
    data: ['66', '64', '62', '60', '52', '63', '57', '57', '51', '55', '55', '51', '56', '57', '58', '44', '53', '47', '46', '47', '50', '46', '50', '44', '50', '39', '48', '49', '52', '49', '40', '46', '35', '31', '35', '37', '50', '38', '34', '43', '31', '25', '35', '34', '28', '35', '19', '20', '28', '7', ],
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
    label: 'Number of phases deployed',
    data: ['6', '4', '6', '5', '6', '6', '5', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '4', '6', '4', '6', '6', '5', '6', '6', '6', '6', '4', '6', '6', '6', '6', '6', '5', '5', '6', '6', '6', '5', '6', '4', '5', '5', '5', '3', '6', '5', '1', '6', '5', ],
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
    data: ['13', '27', '57', '74', '43', '27', '18', '55', '10', '29', '27', '4', '17', '10', '43', '12', '16', '18', '5', '19', '9', '12', '3', '17', '25', '9', '24', '19', '19', '19', '5', '13', '12', '28', '3', '40', '5', '13', '17', '30', '11', '18', '1', '21', '23', '10', '10', '23', '9', '18', ],
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
    label: 'CM Points',
    data: ['23930004', '22507660', '21565785', '19347816', '19640628', '17969846', '16849533', '18116410', '16153284', '16001096', '12838907', '12629064', '13427970', '14780314', '14453752', '14652190', '13432814', '12780314', '14285783', '14525315', '12042970', '13770314', '14667972', '11372658', '11589689', '13274221', '11726876', '13999846', '11790783', '11366095', '11841252', '9578751', '10146876', '8124688', '6816563', '7826876', '6957188', '9078751', '6448438', '7219845', '8764064', '9747346', '7162658', '9886564', '4092344', '5378126', '9126408', '5263750', '4806876', '925000', ],
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
    label: 'Territory Points',
    data: ['79389294', '66870204', '79043577', '77810889', '76967383', '79106311', '68775157', '71756401', '71167887', '73672185', '71885977', '64540212', '65321935', '75191907', '73231030', '67129285', '70735084', '54966320', '69335223', '61439552', '66738273', '70608336', '63543847', '67547645', '66861311', '61153734', '63227418', '57674867', '68090905', '65353235', '66637246', '67451887', '60470405', '51734737', '52510556', '62777253', '61369942', '58521183', '52399284', '57702212', '48475448', '49754211', '54072352', '50386021', '37304896', '58216730', '52797373', '20822977', '56655913', '52706729', ],
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