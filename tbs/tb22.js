// setup 
const data = {
  labels: ['Blattu', 'Tranced', 'XCAL', 'Skaar', 'DarthDax', 'Enigma', 'Jonesmalones', 'Tyron Brandt', 'Patrick4', 'Javin Fis', 'Delara Exibil', 'Puck', 'Nomad', 'WharfRat', 'ArtVandalay', 'G4reth', 'MINI DarthAzazel', 'OwningXylophone', 'T', 'Dârth Jungle Asian', 'Jeeves', 'JHang', 'Marl Jewel', 'El Jefe', 'Lambert', 'BobbyMarshal', 'Verage Valoor', 'BobaChuck91', 'RoTahn Taske', 'Rhil Margos', 'non7top', 'Dava', 'JediAhsoka', 'JakeY', 'Squanchy420', 'Chikiller', 'Tani Mayse', 'Trask droll', 'Q Ryker', 'Kirath Tyria', 'Geralt of Rivia', 'manolis', 'Tyrian', 'Fidget92', 'Scof', 'Avatany', 'Yosh', 'Excessive Fist', 'Taco Hat', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['94', '94', '87', '84', '76', '76', '75', '73', '72', '72', '72', '71', '70', '69', '66', '63', '61', '59', '59', '59', '59', '58', '57', '56', '55', '53', '51', '50', '50', '49', '48', '47', '46', '46', '46', '45', '44', '44', '43', '43', '43', '41', '41', '37', '30', '24', '24', '9', '4', ],
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
    label: 'Waves Completed (Phase 1)',
    data: ['22', '21', '22', '22', '19', '21', '19', '21', '20', '20', '19', '21', '19', '20', '20', '19', '8', '17', '17', '18', '19', '15', '19', '18', '19', '17', '16', '16', '16', '19', '18', '18', '14', '17', '16', '16', '17', '9', '11', '11', '15', '16', '13', '12', '14', '10', '4', '0', '2', ],
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
    label: 'Waves Completed (Phase 2)',
    data: ['18', '17', '16', '16', '17', '16', '15', '15', '13', '14', '16', '12', '13', '12', '15', '13', '13', '12', '10', '11', '9', '11', '13', '12', '11', '9', '12', '8', '11', '8', '10', '10', '7', '11', '8', '10', '8', '11', '9', '9', '11', '8', '8', '9', '0', '1', '5', '2', '0', ],
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
    label: 'Waves Completed (Phase 3)',
    data: ['16', '18', '13', '15', '16', '16', '16', '12', '15', '14', '15', '16', '14', '15', '15', '14', '14', '14', '12', '12', '13', '10', '10', '14', '12', '9', '12', '9', '6', '8', '11', '9', '7', '9', '10', '11', '8', '10', '8', '11', '7', '9', '8', '11', '8', '4', '8', '1', '0', ],
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
    label: 'Waves Completed (Phase 4)',
    data: ['17', '18', '17', '15', '13', '12', '16', '10', '11', '11', '14', '15', '13', '12', '6', '10', '12', '9', '5', '9', '10', '11', '9', '8', '9', '11', '8', '9', '11', '7', '7', '7', '8', '7', '6', '5', '7', '6', '11', '6', '3', '6', '8', '2', '4', '3', '6', '0', '0', ],
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
    label: 'Waves Completed (Phase 5)',
    data: ['12', '12', '11', '11', '5', '7', '2', '7', '8', '8', '4', '3', '8', '6', '3', '5', '10', '5', '9', '5', '7', '7', '3', '4', '2', '4', '2', '5', '4', '4', '1', '1', '5', '1', '3', '3', '3', '5', '2', '3', '4', '1', '2', '2', '2', '3', '0', '3', '0', ],
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
    label: 'Waves Completed (Phase 6)',
    data: ['9', '8', '8', '5', '6', '4', '7', '8', '5', '5', '4', '4', '3', '4', '7', '2', '4', '2', '6', '4', '1', '4', '3', '0', '2', '3', '1', '3', '2', '3', '1', '2', '5', '1', '3', '0', '1', '3', '2', '3', '3', '1', '2', '1', '2', '3', '1', '3', '2', ],
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
    label: 'Special Missions',
    data: ['1', '2', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', ],
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
    data: ['60', '58', '58', '55', '54', '54', '47', '53', '47', '45', '46', '53', '53', '53', '45', '45', '47', '43', '47', '48', '46', '45', '50', '41', '45', '42', '42', '38', '43', '42', '40', '41', '26', '46', '38', '41', '49', '39', '31', '40', '39', '39', '34', '36', '27', '23', '22', '9', '18', ],
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
    label: 'Number of phases deployed (p2 onward)',
    data: ['5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '5', '4', '5', '5', '4', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '4', '5', '4', '5', '5', '5', '5', '5', ],
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
    data: ['12', '37', '30', '55', '42', '40', '50', '13', '18', '6', '51', '20', '26', '20', '17', '8', '24', '20', '37', '15', '12', '15', '16', '5', '6', '20', '39', '9', '7', '21', '16', '66', '21', '23', '3', '11', '7', '33', '19', '16', '19', '6', '25', '15', '24', '10', '12', '27', '14', ],
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
    data: ['22005317', '22922086', '20775523', '21019742', '16482502', '17657709', '13344533', '15623909', '15343909', '15189378', '18769116', '15636565', '16394222', '14590002', '13099533', '14708908', '13465940', '12705627', '13599222', '13063646', '13003127', '15719584', '13829221', '11162345', '11726564', '12760315', '9682501', '11920052', '14714740', '11883440', '8980626', '10474114', '9292190', '8543126', '10756720', '8469532', '8944376', '11128752', '12271302', '10531877', '8870939', '9513126', '6254063', '9477501', '10772240', '5974533', '5066563', '4644064', '693594', ],
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
    data: ['81926805', '85650961', '82850098', '79722885', '73656306', '81781092', '83330171', '82981192', '76564886', '73137722', '80704683', '68138204', '76948825', '73902952', '61843590', '75213626', '58052785', '73797175', '73707880', '73980750', '74043208', '71572473', '76368430', '71963967', '73077859', '68685050', '68928478', '69679670', '78007195', '62919217', '65947572', '68282573', '61302969', '68892406', '64254892', '58952362', '68373329', '65618180', '68212806', '70420111', '63223226', '61780095', '56270896', '64898524', '60834987', '56453724', '61728088', '59758307', '55428097', ],
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
