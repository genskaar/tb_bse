//define some sample data
var tabledata = [
{id:1, name:"ArtVandalay", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:2, name:"Avatany", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:3, name:"Blattu", revaready:"true", rate:"80%",tb10:"",tb11:"false",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:4, name:"BobaChuck91", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:5, name:"BobbyMarshal", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:6, name:"Chikiller", revaready:"true", rate:"66.6666666666667%",tb10:"true",tb11:"false",tb12:"false",tb13:"true",tb14:"true",tb15:"true",},
{id:7, name:"Dârth Jungle Asian", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:8, name:"DarthDax", revaready:"true", rate:"60%",tb10:"",tb11:"false",tb12:"true",tb13:"true",tb14:"true",tb15:"false",},
{id:9, name:"Delara Exibil", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:10, name:"El Jefe", revaready:"true", rate:"50%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"false",tb15:"true",},
{id:11, name:"Enigma", revaready:"true", rate:"66.6666666666667%",tb10:"true",tb11:"false",tb12:"true",tb13:"false",tb14:"true",tb15:"true",},
{id:12, name:"Excessive Fist", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:13, name:"Fidget92", revaready:"true", rate:"66.6666666666667%",tb10:"true",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",},
{id:14, name:"G4reth", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:15, name:"Geralt of Rivia", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:16, name:"Javin Fis", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:17, name:"JediAhsoka", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:18, name:"Jeeves", revaready:"true", rate:"60%",tb10:"",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",},
{id:19, name:"JHang", revaready:"true", rate:"83.3333333333333%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:20, name:"Jonesmalones", revaready:"true", rate:"83.3333333333333%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"false",},
{id:21, name:"Kirath Tyria", revaready:"true", rate:"0%",tb10:"",tb11:"",tb12:"",tb13:"false",tb14:"false",tb15:"",},
{id:22, name:"Tyron Brandt", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"true",},
{id:23, name:"Lambert", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:24, name:"Marl Jewel", revaready:"true", rate:"50%",tb10:"false",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",},
{id:25, name:"Manolis", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"true",},
{id:26, name:"MINI DarthAzazel", revaready:"true", rate:"66.6666666666667%",tb10:"true",tb11:"false",tb12:"true",tb13:"true",tb14:"false",tb15:"true",},
{id:27, name:"Nomad", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:28, name:"non7top", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:29, name:"OwningXylophone", revaready:"true", rate:"60%",tb10:"",tb11:"true",tb12:"false",tb13:"false",tb14:"true",tb15:"true",},
{id:30, name:"Patrick4", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:31, name:"Puck", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:32, name:"QRyker25", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:33, name:"Rhil Margos", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:34, name:"RoTahn Taske", revaready:"true", rate:"83.3333333333333%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:35, name:"Scof", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:36, name:"Skaar", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:37, name:"Squanchy420", revaready:"true", rate:"80%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"false",tb15:"true",},
{id:38, name:"T", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:39, name:"Taco Hat", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:40, name:"Tani Mayse", revaready:"true", rate:"20%",tb10:"",tb11:"false",tb12:"false",tb13:"false",tb14:"false",tb15:"true",},
{id:41, name:"thirteensuns", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:42, name:"Tranced", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:43, name:"Trask droll", revaready:"true", rate:"83.3333333333333%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"false",},
{id:44, name:"Tyrian", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:45, name:"Username", revaready:"true", rate:"83.3333333333333%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:46, name:"Verage Valoor", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:47, name:"WharfRat", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:48, name:"XCAL", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",},
{id:49, name:"Yosh", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",},
{id:50, name:"Zarlis Rahn", revaready:"true", rate:"50%",tb10:"",tb11:"",tb12:"true",tb13:"false",tb14:"true",tb15:"false",},

];
 
 //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#reva-table", {
 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	data:tabledata, //assign data to table
 	layout:"fitDataTable", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Player", field:"name", width:150},
	 	{title:"Ready", field:"revaready", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
            allowEmpty:true,
            allowTruthy:false,
            tickElement:"<i class='fa fa-check'></i>",
            crossElement:"<i class='fa fa-times'></i>",
        }},
	 	{title:"Success Rate (TB10+)", field:"rate", },
{title:"TB 10 (Partial Data)", field:"tb10", hozAlign:"left", formatter:"tickCross", formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 11", field:"tb11", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 12", field:"tb12", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 13", field:"tb13", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 14", field:"tb14", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 15", field:"tb15", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},
 	],
});
