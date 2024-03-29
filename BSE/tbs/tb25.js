// setup 
const data = {
  labels: ['Blattu', 'Tranced', 'XCAL', 'Skaar', 'Puck', 'Enigma', 'DarthDax', 'Tyron Brandt', 'Delara Exibil', 'Nomad', 'Jonesmalones', 'ArtVandalay', 'MINI DarthAzazel', 'Trask droll', 'WharfRat', 'Javin Fis', 'Patrick4', 'G4reth', 'Jeeves', 'RoTahn Taske', 'JHang', 'El Jefe', 'Dava', 'Dârth Jungle Asian', 'JakeY', 'OwningXylophone', 'Marl Jewel', 'Rhil Margos', 'Chikiller', 'T', 'Tani Mayse', 'Scof', 'Verage Valoor', 'non7top', 'Lambert', 'manolis', 'Geralt of Rivia', 'BobbyMarshal', 'Q Ryker', 'JediAhsoka', 'Tyrian', 'Fidget92', 'BobaChuck91', 'Yosh', 'Squanchy420', 'Avatany', 'Excessive Fist', 'Darthsyn', 'Jay Maop', 'Taco Hat', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['104', '96', '95', '88', '82', '82', '79', '79', '77', '77', '72', '72', '69', '68', '67', '67', '66', '64', '64', '61', '61', '61', '59', '59', '59', '58', '56', '54', '54', '54', '52', '52', '50', '50', '50', '49', '49', '48', '48', '44', '43', '43', '43', '40', '39', '33', '27', '25', '25', '18', ],
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
    data: ['23', '21', '22', '21', '19', '21', '22', '21', '19', '19', '13', '19', '19', '20', '20', '16', '19', '19', '17', '20', '17', '17', '19', '18', '19', '14', '16', '17', '17', '4', '19', '15', '17', '17', '18', '19', '17', '15', '15', '11', '12', '15', '14', '16', '14', '13', '4', '0', '17', '9', ],
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
    data: ['18', '19', '18', '16', '16', '17', '17', '13', '13', '15', '12', '13', '11', '6', '13', '14', '8', '12', '11', '11', '12', '11', '12', '10', '13', '14', '11', '9', '10', '11', '13', '8', '11', '14', '8', '10', '11', '8', '10', '5', '9', '10', '6', '8', '6', '8', '7', '2', '6', '2', ],
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
    data: ['16', '18', '16', '16', '15', '16', '15', '15', '16', '14', '15', '12', '14', '16', '15', '13', '15', '13', '14', '12', '15', '14', '14', '14', '13', '14', '12', '11', '11', '10', '11', '13', '11', '12', '12', '12', '9', '7', '11', '7', '9', '10', '6', '8', '7', '6', '5', '7', '0', '4', ],
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
    data: ['20', '18', '18', '16', '15', '13', '17', '12', '15', '15', '16', '12', '12', '11', '13', '10', '11', '12', '12', '12', '10', '9', '10', '7', '9', '8', '11', '9', '10', '13', '5', '8', '8', '5', '8', '4', '6', '10', '9', '8', '8', '4', '10', '4', '6', '2', '5', '8', '1', '0', ],
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
    data: ['15', '12', '11', '12', '10', '9', '8', '11', '8', '8', '6', '10', '10', '8', '6', '8', '7', '6', '5', '4', '4', '6', '3', '5', '3', '5', '2', '4', '3', '9', '3', '4', '2', '1', '2', '2', '4', '5', '2', '8', '2', '1', '4', '3', '4', '2', '2', '5', '0', '0', ],
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
    data: ['12', '8', '10', '7', '7', '6', '0', '7', '6', '6', '10', '6', '3', '7', '0', '6', '6', '2', '5', '2', '3', '4', '1', '5', '2', '3', '4', '4', '3', '7', '1', '4', '1', '1', '2', '2', '2', '3', '1', '5', '3', '3', '3', '1', '2', '2', '4', '3', '1', '3', ],
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
    data: ['1', '2', '1', '2', '2', '1', '1', '2', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '0', '1', '1', '1', '1', '2', '0', ],
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
    data: ['63', '60', '60', '57', '58', '55', '53', '55', '51', '53', '43', '48', '59', '47', '50', '45', '46', '46', '47', '52', '50', '44', '48', '47', '48', '48', '42', '48', '51', '42', '51', '38', '46', '41', '45', '43', '39', '43', '34', '27', '39', '44', '41', '35', '32', '31', '22', '16', '17', '19', ],
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
    data: ['5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', ],
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
    data: ['11', '26', '57', '67', '20', '24', '36', '27', '26', '28', '57', '13', '26', '28', '17', '11', '6', '8', '15', '7', '14', '3', '95', '13', '9', '27', '20', '18', '12', '58', '7', '13', '26', '9', '11', '6', '19', '25', '15', '14', '22', '20', '14', '17', '12', '16', '41', '42', '7', '12', ],
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
    data: ['25523181', '23656774', '22435836', '22116305', '20145054', '20168804', '16012658', '18068285', '20208179', '17707866', '15035416', '17384116', '14722971', '15831097', '13568595', '15962866', '15075209', '15885940', '13948178', '15550990', '14262033', '15301772', '13209377', '13865677', '11549845', '11692658', '15809584', '14198334', '11590182', '13999691', '10208751', '14308178', '9707501', '9276876', '10947814', '12372552', '10053595', '13303959', '12468752', '10574378', '9132189', '11404739', '9864064', '8881095', '9032501', '8798489', '11778334', '6928752', '5169688', '3472032', ],
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
    data: ['88405504', '88491078', '86868535', '83198790', '76541058', '85366092', '73339541', '87153205', '84092321', '81130362', '75335205', '75827449', '79178449', '72974827', '74287642', '75274688', '77814940', '78533642', '68110739', '80649490', '71248830', '77378560', '73496877', '76306815', '72823734', '74096159', '71852115', '73891967', '73644745', '66002529', '71934601', '65147487', '71034252', '60431936', '74156181', '74018729', '66103420', '71810946', '70315624', '65122419', '60320602', '70735551', '68448814', '67762202', '63153212', '68242075', '68773664', '67888034', '67351231', '58523200', ],
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
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        },
	    plugins: {
			tooltip: {
				mode: 'index',
				intersect: false
		    },
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
