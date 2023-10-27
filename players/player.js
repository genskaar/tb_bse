// setup 
const data = {
  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8', 'TB9', 'TB10', 'TB11', 'TB12', 'TB13', 'TB14', 'TB15', 'TB16', 'TB17', 'TB18', 'TB19', 'TB20', 'TB21', 'TB22', 'TB23', ],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['43.62', '42.204081632653065', '40.58', '43.9', '47.64', '49.02', '50.40816326530612', '49.8', '51.38', '49.44', '53.28', '52.26', '56.6', '48.64', '53.2', '52.64', '52.88', '54.8', '53.6', '52.7', '55.46', '55.0', '55.62', ],
    borderColor:  'rgb(0, 0, 0)',
    backgroundColor:  'rgb(0, 0, 0)',
    hidden: false,
},{
    label: 'Guild Average - Attempts',
    data: ['44.24', '38.83673469387755', '40.54', '42.54', '40.8', '40.6', '41.38775510204081', '40.3', '39.64', '40.54', '41.7', '40.74', '44.58', '37.94', '41.0', '40.18', '40.24', '41.78', '41.34', '40.92', '42.52', '42.51020408163265', '43.1', ],
    borderColor:  'rgb(0, 0, 0)',
    backgroundColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: 'ArtVandalay',
    data: ['50', '63', '52', '55', '56', '67', '70', '66', '62', '58', '52', '52', '66', '56', '74', '59', '61', '64', '73', '63', '68', '66', '68', ],
    backgroundColor:  'rgb(83, 214, 83)',
    borderColor:  'rgb(83, 214, 83)',
    hidden: true,
},
 {
    label: 'Avatany',
    data: ['18', '10', '15', '29', '14', '30', '24', '33', '27', '36', '33', '28', '38', '30', '31', '33', '12', '25', '37', '20', '22', '24', '21', ],
    backgroundColor:  'rgb(152, 158, 94)',
    borderColor:  'rgb(152, 158, 94)',
    hidden: true,
},
 {
    label: 'Blattu',
    data: ['68', '78', '67', '74', '76', '82', '88', '91', '97', '87', '91', '95', '109', '90', '91', '93', '93', '100', '95', '97', '91', '94', '94', ],
    backgroundColor:  'rgb(85, 33, 176)',
    borderColor:  'rgb(85, 33, 176)',
    hidden: true,
},
 {
    label: 'BobaChuck91',
    data: ['0', '0', '0', '0', '0', '0', '0', '41', '42', '26', '43', '41', '35', '33', '31', '35', '28', '48', '45', '45', '39', '50', '36', ],
    backgroundColor:  'rgb(3, 116, 116)',
    borderColor:  'rgb(3, 116, 116)',
    hidden: true,
},
 {
    label: 'BobbyMarshal',
    data: ['38', '26', '36', '43', '42', '43', '43', '37', '35', '46', '52', '41', '57', '45', '34', '44', '50', '45', '44', '52', '50', '53', '49', ],
    backgroundColor:  'rgb(11, 46, 66)',
    borderColor:  'rgb(11, 46, 66)',
    hidden: true,
},
 {
    label: 'Chikiller',
    data: ['34', '37', '27', '25', '42', '41', '36', '35', '42', '53', '53', '59', '62', '54', '54', '60', '63', '51', '51', '55', '56', '45', '51', ],
    backgroundColor:  'rgb(6, 105, 19)',
    borderColor:  'rgb(6, 105, 19)',
    hidden: true,
},
 {
    label: 'DarthDax',
    data: ['54', '51', '50', '39', '56', '60', '48', '56', '47', '56', '80', '88', '86', '73', '76', '74', '77', '81', '74', '81', '72', '76', '71', ],
    backgroundColor:  'rgb(98, 71, 237)',
    borderColor:  'rgb(98, 71, 237)',
    hidden: true,
},
 {
    label: 'Dava',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '50', '47', '47', '50', ],
    backgroundColor:  'rgb(108, 227, 93)',
    borderColor:  'rgb(108, 227, 93)',
    hidden: true,
},
 {
    label: 'Delara Exibil',
    data: ['56', '47', '65', '51', '63', '61', '75', '77', '77', '70', '76', '85', '88', '70', '74', '72', '73', '75', '73', '75', '70', '72', '76', ],
    backgroundColor:  'rgb(218, 10, 253)',
    borderColor:  'rgb(218, 10, 253)',
    hidden: true,
},
 {
    label: 'Dârth Jungle Asian',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '48', '52', '58', '52', '54', '54', '48', '57', '56', '56', '51', '57', '59', '60', ],
    backgroundColor:  'rgb(15, 214, 107)',
    borderColor:  'rgb(15, 214, 107)',
    hidden: true,
},
 {
    label: 'El Jefe',
    data: ['0', '0', '0', '39', '46', '53', '48', '52', '54', '43', '47', '56', '49', '49', '53', '55', '61', '55', '53', '54', '61', '56', '51', ],
    backgroundColor:  'rgb(139, 223, 3)',
    borderColor:  'rgb(139, 223, 3)',
    hidden: true,
},
 {
    label: 'Enigma',
    data: ['0', '0', '0', '0', '0', '0', '0', '83', '86', '78', '77', '82', '83', '78', '61', '78', '78', '78', '80', '39', '76', '76', '80', ],
    backgroundColor:  'rgb(192, 248, 243)',
    borderColor:  'rgb(192, 248, 243)',
    hidden: true,
},
 {
    label: 'Excessive Fist',
    data: ['40', '23', '37', '38', '33', '32', '31', '25', '29', '30', '25', '11', '26', '30', '30', '29', '25', '23', '13', '15', '14', '9', '15', ],
    backgroundColor:  'rgb(45, 16, 104)',
    borderColor:  'rgb(45, 16, 104)',
    hidden: true,
},
 {
    label: 'Fidget92',
    data: ['40', '42', '50', '46', '43', '46', '57', '52', '58', '45', '38', '38', '25', '44', '50', '45', '45', '47', '46', '37', '38', '37', '27', ],
    backgroundColor:  'rgb(152, 78, 46)',
    borderColor:  'rgb(152, 78, 46)',
    hidden: true,
},
 {
    label: 'G4reth',
    data: ['56', '56', '59', '60', '57', '61', '65', '72', '69', '67', '70', '72', '65', '60', '58', '60', '57', '60', '60', '60', '65', '63', '68', ],
    backgroundColor:  'rgb(205, 89, 97)',
    borderColor:  'rgb(205, 89, 97)',
    hidden: true,
},
 {
    label: 'Geralt of Rivia',
    data: ['38', '29', '29', '29', '33', '37', '30', '23', '19', '36', '35', '40', '40', '35', '39', '44', '40', '40', '46', '44', '44', '43', '49', ],
    backgroundColor:  'rgb(72, 132, 101)',
    borderColor:  'rgb(72, 132, 101)',
    hidden: true,
},
 {
    label: 'JakeY',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '45', '46', '34', '53', '52', '50', '47', '46', '51', ],
    backgroundColor:  'rgb(40, 206, 164)',
    borderColor:  'rgb(40, 206, 164)',
    hidden: true,
},
 {
    label: 'Javin Fis',
    data: ['63', '59', '61', '62', '73', '72', '75', '64', '66', '71', '74', '71', '78', '44', '66', '73', '72', '63', '67', '68', '65', '72', '53', ],
    backgroundColor:  'rgb(85, 251, 78)',
    borderColor:  'rgb(85, 251, 78)',
    hidden: true,
},
 {
    label: 'Jay Maop',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '28', ],
    backgroundColor:  'rgb(22, 41, 205)',
    borderColor:  'rgb(22, 41, 205)',
    hidden: true,
},
 {
    label: 'JediAhsoka',
    data: ['23', '28', '24', '28', '31', '26', '31', '33', '31', '33', '32', '30', '38', '30', '36', '40', '40', '30', '38', '40', '37', '46', '46', ],
    backgroundColor:  'rgb(205, 230, 89)',
    borderColor:  'rgb(205, 230, 89)',
    hidden: true,
},
 {
    label: 'Jeeves',
    data: ['52', '50', '46', '48', '50', '59', '56', '59', '66', '54', '58', '60', '66', '59', '61', '62', '61', '62', '69', '66', '64', '59', '59', ],
    backgroundColor:  'rgb(14, 51, 66)',
    borderColor:  'rgb(14, 51, 66)',
    hidden: true,
},
 {
    label: 'JHang',
    data: ['59', '46', '42', '54', '52', '52', '60', '59', '49', '34', '53', '51', '57', '52', '54', '52', '57', '58', '47', '57', '61', '58', '57', ],
    backgroundColor:  'rgb(236, 215, 42)',
    borderColor:  'rgb(236, 215, 42)',
    hidden: true,
},
 {
    label: 'Jonesmalones',
    data: ['71', '78', '79', '83', '77', '87', '77', '82', '83', '75', '76', '87', '90', '72', '81', '88', '89', '81', '0', '2', '67', '75', '76', ],
    backgroundColor:  'rgb(115, 199, 176)',
    borderColor:  'rgb(115, 199, 176)',
    hidden: true,
},
 {
    label: 'Kirath Tyria',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '68', '55', '0', '0', '0', '0', '0', '0', '0', '43', '45', ],
    backgroundColor:  'rgb(164, 177, 89)',
    borderColor:  'rgb(164, 177, 89)',
    hidden: true,
},
 {
    label: 'Lambert',
    data: ['52', '47', '44', '45', '47', '44', '46', '49', '42', '49', '47', '44', '46', '38', '38', '40', '41', '49', '46', '51', '44', '55', '52', ],
    backgroundColor:  'rgb(222, 151, 146)',
    borderColor:  'rgb(222, 151, 146)',
    hidden: true,
},
 {
    label: 'manolis',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '45', '39', '42', '44', '38', '38', '39', '41', '44', ],
    backgroundColor:  'rgb(233, 5, 79)',
    borderColor:  'rgb(233, 5, 79)',
    hidden: true,
},
 {
    label: 'Marl Jewel',
    data: ['50', '52', '50', '51', '53', '51', '60', '49', '58', '48', '59', '67', '56', '49', '26', '25', '55', '51', '66', '57', '61', '57', '64', ],
    backgroundColor:  'rgb(207, 190, 146)',
    borderColor:  'rgb(207, 190, 146)',
    hidden: true,
},
 {
    label: 'MINI DarthAzazel',
    data: ['59', '54', '51', '58', '59', '53', '63', '57', '82', '58', '65', '55', '69', '61', '67', '68', '63', '67', '75', '66', '67', '61', '73', ],
    backgroundColor:  'rgb(192, 15, 237)',
    borderColor:  'rgb(192, 15, 237)',
    hidden: true,
},
 {
    label: 'Nomad',
    data: ['49', '51', '51', '51', '52', '53', '59', '57', '54', '44', '54', '52', '59', '25', '62', '61', '61', '63', '61', '66', '64', '70', '65', ],
    backgroundColor:  'rgb(211, 37, 26)',
    borderColor:  'rgb(211, 37, 26)',
    hidden: true,
},
 {
    label: 'non7top',
    data: ['35', '36', '41', '41', '52', '36', '46', '43', '38', '44', '46', '48', '40', '41', '35', '41', '40', '39', '36', '33', '42', '48', '46', ],
    backgroundColor:  'rgb(59, 94, 56)',
    borderColor:  'rgb(59, 94, 56)',
    hidden: true,
},
 {
    label: 'OwningXylophone',
    data: ['40', '27', '28', '30', '34', '32', '30', '29', '45', '41', '48', '51', '59', '49', '51', '50', '53', '56', '54', '55', '56', '59', '59', ],
    backgroundColor:  'rgb(194, 251, 2)',
    borderColor:  'rgb(194, 251, 2)',
    hidden: true,
},
 {
    label: 'Patrick4',
    data: ['44', '47', '55', '49', '59', '56', '59', '66', '63', '56', '65', '66', '64', '58', '58', '59', '63', '64', '66', '67', '67', '72', '73', ],
    backgroundColor:  'rgb(157, 69, 109)',
    borderColor:  'rgb(157, 69, 109)',
    hidden: true,
},
 {
    label: 'Puck',
    data: ['56', '50', '51', '49', '55', '57', '60', '59', '66', '66', '65', '69', '70', '68', '79', '74', '75', '70', '79', '79', '78', '71', '79', ],
    backgroundColor:  'rgb(83, 72, 98)',
    borderColor:  'rgb(83, 72, 98)',
    hidden: true,
},
 {
    label: 'Q Ryker',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '45', '43', '42', '34', '38', '40', '40', '39', '42', '43', '40', '43', '44', ],
    backgroundColor:  'rgb(152, 131, 212)',
    borderColor:  'rgb(152, 131, 212)',
    hidden: true,
},
 {
    label: 'Rhil Margos',
    data: ['41', '39', '32', '44', '47', '53', '38', '48', '53', '51', '41', '47', '52', '47', '44', '51', '50', '49', '50', '58', '54', '49', '58', ],
    backgroundColor:  'rgb(166, 140, 174)',
    borderColor:  'rgb(166, 140, 174)',
    hidden: true,
},
 {
    label: 'RoTahn Taske',
    data: ['50', '50', '52', '49', '59', '61', '64', '62', '61', '59', '65', '66', '67', '60', '58', '62', '62', '55', '60', '56', '63', '50', '65', ],
    backgroundColor:  'rgb(30, 7, 5)',
    borderColor:  'rgb(30, 7, 5)',
    hidden: true,
},
 {
    label: 'Scof',
    data: ['33', '29', '17', '27', '25', '25', '32', '30', '34', '36', '40', '39', '33', '32', '40', '38', '42', '40', '38', '40', '47', '30', '40', ],
    backgroundColor:  'rgb(208, 208, 10)',
    borderColor:  'rgb(208, 208, 10)',
    hidden: true,
},
 {
    label: 'Skaar',
    data: ['61', '71', '74', '81', '73', '75', '79', '80', '82', '76', '82', '66', '79', '67', '76', '76', '71', '86', '86', '80', '87', '84', '90', ],
    backgroundColor:  'rgb(252, 193, 45)',
    borderColor:  'rgb(252, 193, 45)',
    hidden: true,
},
 {
    label: 'Squanchy420',
    data: ['36', '35', '36', '31', '34', '35', '33', '37', '39', '36', '48', '48', '42', '38', '36', '45', '40', '42', '41', '45', '44', '46', '27', ],
    backgroundColor:  'rgb(189, 27, 96)',
    borderColor:  'rgb(189, 27, 96)',
    hidden: true,
},
 {
    label: 'T',
    data: ['0', '0', '0', '0', '64', '68', '52', '58', '62', '53', '68', '69', '61', '65', '63', '63', '57', '59', '61', '58', '67', '59', '54', ],
    backgroundColor:  'rgb(148, 95, 137)',
    borderColor:  'rgb(148, 95, 137)',
    hidden: true,
},
 {
    label: 'Taco Hat',
    data: ['26', '20', '18', '22', '23', '22', '22', '19', '21', '18', '26', '15', '22', '15', '18', '15', '15', '17', '15', '25', '18', '4', '22', ],
    backgroundColor:  'rgb(28, 145, 128)',
    borderColor:  'rgb(28, 145, 128)',
    hidden: true,
},
 {
    label: 'Tani Mayse',
    data: ['40', '37', '34', '38', '34', '38', '44', '45', '48', '41', '45', '38', '41', '45', '44', '45', '43', '46', '41', '39', '45', '44', '45', ],
    backgroundColor:  'rgb(250, 243, 184)',
    borderColor:  'rgb(250, 243, 184)',
    hidden: true,
},
 {
    label: 'Tranced',
    data: ['64', '73', '67', '72', '67', '73', '87', '86', '93', '84', '92', '97', '98', '88', '93', '91', '93', '90', '92', '90', '92', '94', '93', ],
    backgroundColor:  'rgb(5, 70, 221)',
    borderColor:  'rgb(5, 70, 221)',
    hidden: true,
},
 {
    label: 'Trask droll',
    data: ['59', '56', '58', '44', '56', '68', '70', '59', '68', '60', '67', '53', '67', '55', '55', '56', '72', '60', '44', '47', '63', '44', '55', ],
    backgroundColor:  'rgb(86, 10, 4)',
    borderColor:  'rgb(86, 10, 4)',
    hidden: true,
},
 {
    label: 'Tyrian',
    data: ['29', '25', '33', '31', '34', '37', '38', '30', '31', '27', '31', '35', '30', '29', '29', '29', '28', '32', '36', '38', '38', '41', '38', ],
    backgroundColor:  'rgb(167, 124, 65)',
    borderColor:  'rgb(167, 124, 65)',
    hidden: true,
},
 {
    label: 'Tyron Brandt',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '86', '78', '71', '88', '81', '66', '64', '73', '78', ],
    backgroundColor:  'rgb(35, 57, 55)',
    borderColor:  'rgb(35, 57, 55)',
    hidden: true,
},
 {
    label: 'Verage Valoor',
    data: ['35', '36', '30', '35', '36', '32', '35', '34', '36', '35', '37', '36', '41', '37', '39', '39', '41', '44', '47', '49', '46', '51', '50', ],
    backgroundColor:  'rgb(226, 208, 235)',
    borderColor:  'rgb(226, 208, 235)',
    hidden: true,
},
 {
    label: 'WharfRat',
    data: ['50', '46', '46', '50', '43', '49', '54', '53', '56', '47', '53', '52', '62', '48', '53', '48', '53', '66', '62', '63', '68', '69', '70', ],
    backgroundColor:  'rgb(158, 136, 170)',
    borderColor:  'rgb(158, 136, 170)',
    hidden: true,
},
 {
    label: 'XCAL',
    data: ['62', '85', '72', '75', '80', '84', '88', '87', '95', '80', '85', '94', '101', '83', '87', '88', '85', '87', '92', '92', '85', '87', '83', ],
    backgroundColor:  'rgb(30, 32, 96)',
    borderColor:  'rgb(30, 32, 96)',
    hidden: true,
},
 {
    label: 'Yosh',
    data: ['0', '0', '0', '29', '27', '31', '32', '24', '13', '27', '28', '28', '27', '23', '24', '25', '17', '26', '27', '26', '30', '24', '33', ],
    backgroundColor:  'rgb(112, 130, 99)',
    borderColor:  'rgb(112, 130, 99)',
    hidden: true,
},
]

};

// config 
const config = {
  type: 'line',
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
