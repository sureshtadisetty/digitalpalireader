'use strict';

DPR_G.G_unnamed = '[unnamed]';

DPR_G.G_hier = 'm';

var oldnikaya = 0;


DPR_G.G_XMLFileArray = []; // [nik+book] = [m,a,t]
DPR_G.G_XMLFileArray["v1"] = [1,1,1];
DPR_G.G_XMLFileArray['v2'] = [1,1,1];
DPR_G.G_XMLFileArray['v3'] = [1,1,1];
DPR_G.G_XMLFileArray['v4'] = [1,1,1];
DPR_G.G_XMLFileArray['v5'] = [1,1,1];
DPR_G.G_XMLFileArray['v6'] = [1,1,1];
DPR_G.G_XMLFileArray['v7'] = [0,0,1];
DPR_G.G_XMLFileArray['v8'] = [0,0,1];
DPR_G.G_XMLFileArray['v9'] = [0,0,1];
DPR_G.G_XMLFileArray['v10'] = [0,0,1];
DPR_G.G_XMLFileArray['v11'] = [0,0,1];
DPR_G.G_XMLFileArray['v12'] = [0,0,1];
DPR_G.G_XMLFileArray['v13'] = [0,0,1];
DPR_G.G_XMLFileArray['v14'] = [0,0,1];
DPR_G.G_XMLFileArray['v15'] = [0,0,1];
DPR_G.G_XMLFileArray['v16'] = [0,0,1];
DPR_G.G_XMLFileArray['v17'] = [0,0,1];
DPR_G.G_XMLFileArray['v18'] = [0,0,1];
DPR_G.G_XMLFileArray['d1'] = [1,1,1];
DPR_G.G_XMLFileArray['d2'] = [1,1,1];
DPR_G.G_XMLFileArray['d3'] = [1,1,1];
DPR_G.G_XMLFileArray['m1'] = [1,1,1];
DPR_G.G_XMLFileArray['m2'] = [1,1,1];
DPR_G.G_XMLFileArray['m3'] = [1,1,1];
DPR_G.G_XMLFileArray['s1'] = [1,1,1];
DPR_G.G_XMLFileArray['s2'] = [1,1,1];
DPR_G.G_XMLFileArray['s3'] = [1,1,1];
DPR_G.G_XMLFileArray['s4'] = [1,1,1];
DPR_G.G_XMLFileArray['s5'] = [1,1,1];
DPR_G.G_XMLFileArray['a1'] = [1,1,1];
DPR_G.G_XMLFileArray['a2'] = [1,1,1];
DPR_G.G_XMLFileArray['a3'] = [1,1,1];
DPR_G.G_XMLFileArray['a4'] = [1,1,1];
DPR_G.G_XMLFileArray['a5'] = [1,1,1];
DPR_G.G_XMLFileArray['a6'] = [1,1,1];
DPR_G.G_XMLFileArray['a7'] = [1,1,1];
DPR_G.G_XMLFileArray['a8'] = [1,1,1];
DPR_G.G_XMLFileArray['a9'] = [1,1,1];
DPR_G.G_XMLFileArray['a10'] = [1,1,1];
DPR_G.G_XMLFileArray['a11'] = [1,1,1];
DPR_G.G_XMLFileArray['k1'] = [1,1,0];
DPR_G.G_XMLFileArray['k2'] = [1,1,0];
DPR_G.G_XMLFileArray['k3'] = [1,1,0];
DPR_G.G_XMLFileArray['k4'] = [1,1,0];
DPR_G.G_XMLFileArray['k5'] = [1,1,0];
DPR_G.G_XMLFileArray['k6'] = [1,1,0];
DPR_G.G_XMLFileArray['k7'] = [1,1,0];
DPR_G.G_XMLFileArray['k8'] = [1,1,0];
DPR_G.G_XMLFileArray['k9'] = [1,1,0];
DPR_G.G_XMLFileArray['k10'] = [1,1,0];
DPR_G.G_XMLFileArray['k11'] = [1,0,0];
DPR_G.G_XMLFileArray['k12'] = [1,1,0];
DPR_G.G_XMLFileArray['k13'] = [1,1,0];
DPR_G.G_XMLFileArray['k14'] = [1,1,0];
DPR_G.G_XMLFileArray['k15'] = [1,1,0];
DPR_G.G_XMLFileArray['k16'] = [1,0,0];
DPR_G.G_XMLFileArray['k17'] = [1,0,0];
DPR_G.G_XMLFileArray['k18'] = [1,0,0];
DPR_G.G_XMLFileArray['k19'] = [1,0,0];
DPR_G.G_XMLFileArray['k20'] = [1,0,0];
DPR_G.G_XMLFileArray['k21'] = [1,0,0];
DPR_G.G_XMLFileArray['y1'] = [1,1,1];
DPR_G.G_XMLFileArray['y2'] = [1,1,1];
DPR_G.G_XMLFileArray['y3'] = [1,1,1];
DPR_G.G_XMLFileArray['y4'] = [1,1,1];
DPR_G.G_XMLFileArray['y5'] = [1,1,1];
DPR_G.G_XMLFileArray['y6'] = [1,1,1];
DPR_G.G_XMLFileArray['y7'] = [1,0,0];
DPR_G.G_XMLFileArray['y8'] = [1,0,0];
DPR_G.G_XMLFileArray['y9'] = [1,1,1];
DPR_G.G_XMLFileArray['y10'] = [1,0,0];
DPR_G.G_XMLFileArray['y11'] = [1,0,0];
DPR_G.G_XMLFileArray['y12'] = [1,0,0];
DPR_G.G_XMLFileArray['y13'] = [1,0,0];
DPR_G.G_XMLFileArray['y14'] = [1,0,0];
DPR_G.G_XMLFileArray['x1'] = [1,1,0];
DPR_G.G_XMLFileArray['x2'] = [1,1,0];
DPR_G.G_XMLFileArray['b1'] = [1,0,0];
DPR_G.G_XMLFileArray['b2'] = [1,0,0];
DPR_G.G_XMLFileArray['g1'] = [1,0,0];
DPR_G.G_XMLFileArray['g2'] = [1,0,0];
DPR_G.G_XMLFileArray['g3'] = [1,0,0];
DPR_G.G_XMLFileArray['g4'] = [1,0,0];
DPR_G.G_XMLFileArray['g5'] = [1,0,0];
DPR_G.G_XMLFileArray['n1'] = [1,0,0];
DPR_G.G_XMLFileArray['n2'] = [1,0,0];
DPR_G.G_XMLFileArray['n3'] = [1,0,0];
DPR_G.G_XMLFileArray['n4'] = [1,0,0];
DPR_G.G_XMLFileArray['n5'] = [1,0,0];
DPR_G.G_XMLFileArray['n6'] = [1,0,0];
DPR_G.G_XMLFileArray['n7'] = [1,0,0];
DPR_G.G_XMLFileArray['n8'] = [1,0,0];
DPR_G.G_XMLFileArray['n9'] = [1,0,0];

DPR_G.G_listTitles = ['meta','volume','vagga','sutta','section'];

DPR_G.G_hNumbers = [];
DPR_G.G_hNumbers['m'] = 0;
DPR_G.G_hNumbers['a'] = 1;
DPR_G.G_hNumbers['t'] = 2;

DPR_G.G_hTitles = ['Mūla', 'Aṭṭhakathā', 'Ṭīkā'];

DPR_G.G_hLetters = ['m','a','t'];
DPR_G.G_hshort = [];
DPR_G.G_hshort['m'] = 'mul';
DPR_G.G_hshort['a'] = 'att';
DPR_G.G_hshort['t'] = 'tik';


DPR_G.G_nikLongName = new Array();
DPR_G.G_nikLongName['v'] = "Vin";
DPR_G.G_nikLongName['d'] = "DN";
DPR_G.G_nikLongName['m'] = "MN";
DPR_G.G_nikLongName['s'] = "SN";
DPR_G.G_nikLongName['a'] = "AN";
DPR_G.G_nikLongName['k'] = "KN";
DPR_G.G_nikLongName['y'] = "Abhi";
DPR_G.G_nikLongName['x'] = "Vism";
DPR_G.G_nikLongName['b'] = "AbhiS";
DPR_G.G_nikLongName['g'] = "Gram";
DPR_G.G_nikLongName['n'] = "Añña";


DPR_G.G_nikShortName = [];
DPR_G.G_nikShortName['DN'] = "d";
DPR_G.G_nikShortName['MN'] = "m";
DPR_G.G_nikShortName['SN'] = "s";
DPR_G.G_nikShortName['AN'] = "a";
DPR_G.G_nikShortName['KN'] = "k";

DPR_G.G_nikToNumber = new Array();
DPR_G.G_nikToNumber['v'] = "0";
DPR_G.G_nikToNumber['d'] = "1";
DPR_G.G_nikToNumber['m'] = "2";
DPR_G.G_nikToNumber['s'] = "3";
DPR_G.G_nikToNumber['a'] = "4";
DPR_G.G_nikToNumber['k'] = "5";
DPR_G.G_nikToNumber['y'] = "6";
DPR_G.G_nikToNumber['x'] = "7";
DPR_G.G_nikToNumber['b'] = "8";
DPR_G.G_nikToNumber['g'] = "9";
DPR_G.G_nikToNumber['n'] = "10";

DPR_G.G_nikToNumber2 = Object.entries(DPR_G.G_nikToNumber).reduce((acc, [k, v]) => { acc[k] = parseInt(v); return acc; }, []);

DPR_G.G_numberToNik = [];
DPR_G.G_numberToNik.push('v');
DPR_G.G_numberToNik.push('d');
DPR_G.G_numberToNik.push('m');
DPR_G.G_numberToNik.push('s');
DPR_G.G_numberToNik.push('a');
DPR_G.G_numberToNik.push('k');
DPR_G.G_numberToNik.push('y');
DPR_G.G_numberToNik.push('x');
DPR_G.G_numberToNik.push('b');
DPR_G.G_numberToNik.push('g');
DPR_G.G_numberToNik.push('n');



var kudvala = [];

kudvala['1'] = 0;
kudvala['2'] = 1;
kudvala['3'] = 2;
kudvala['4'] = 3;
kudvala['5'] = 4;
kudvala['6'] = 5;
kudvala['7'] = 6;
kudvala['8'] = 7;
kudvala['9'] = 8;
kudvala['10'] = 9;
kudvala['12'] = 10;
kudvala['13'] = 11;
kudvala['14'] = 13;
kudvala['15'] = 13;

var abhivala = [];

abhivala['1'] = 0;
abhivala['2'] = 1;
abhivala['3'] = 2;
abhivala['4'] = 3;
abhivala['5'] = 4;
abhivala['6'] = 5;
abhivala['7'] = 5;
abhivala['8'] = 5;
abhivala['9'] = 6;
abhivala['10'] = 6;
abhivala['11'] = 6;
abhivala['12'] = 6;
abhivala['13'] = 6;
abhivala['14'] = 6;

DPR_G.G_kynames = [];
DPR_G.G_kynames['k'] = [];
DPR_G.G_kynames['y'] = [];
DPR_G.G_kynames['n'] = [];

DPR_G.G_kynames['k'].push('Khp');
DPR_G.G_kynames['k'].push('Dhp');
DPR_G.G_kynames['k'].push('Ud');
DPR_G.G_kynames['k'].push('It');
DPR_G.G_kynames['k'].push('Sn');
DPR_G.G_kynames['k'].push('Vv');
DPR_G.G_kynames['k'].push('Pv');
DPR_G.G_kynames['k'].push('Th');
DPR_G.G_kynames['k'].push('Thī');
DPR_G.G_kynames['k'].push('Ap.1');
DPR_G.G_kynames['k'].push('Ap.2');
DPR_G.G_kynames['k'].push('Bv');
DPR_G.G_kynames['k'].push('Cp');
DPR_G.G_kynames['k'].push('Ja 1');
DPR_G.G_kynames['k'].push('Ja 2');
DPR_G.G_kynames['k'].push('Nidd I');
DPR_G.G_kynames['k'].push('Nidd II');
DPR_G.G_kynames['k'].push('Paṭis');
DPR_G.G_kynames['k'].push('Mil');
DPR_G.G_kynames['k'].push('Nett');
DPR_G.G_kynames['k'].push('Peṭ');

DPR_G.G_kynames['y'].push('Dhs');
DPR_G.G_kynames['y'].push('Vibh');
DPR_G.G_kynames['y'].push('Dhātuk');
DPR_G.G_kynames['y'].push('Pp');
DPR_G.G_kynames['y'].push('Kv');
DPR_G.G_kynames['y'].push('Yam');
DPR_G.G_kynames['y'].push('Yam 2');
DPR_G.G_kynames['y'].push('Yam 3');
DPR_G.G_kynames['y'].push('Paṭṭh');
DPR_G.G_kynames['y'].push('Paṭṭh 2');
DPR_G.G_kynames['y'].push('Paṭṭh 3');
DPR_G.G_kynames['y'].push('Paṭṭh 4');
DPR_G.G_kynames['y'].push('Paṭṭh 5');
DPR_G.G_kynames['y'].push('Paṭṭh 6');

DPR_G.G_kynames['n'].push('Dhs-Anu');
DPR_G.G_kynames['n'].push('Abhi-Anu');
DPR_G.G_kynames['n'].push('Abhi-Vat');
DPR_G.G_kynames['n'].push('Kaṅkhā-T');
DPR_G.G_kynames['n'].push('Abhi-Vibh');
DPR_G.G_kynames['n'].push('Abhi-Vat-pT');
DPR_G.G_kynames['n'].push('Abhi-Vat-aT');
DPR_G.G_kynames['n'].push('Abhi-Mat');
DPR_G.G_kynames['n'].push('Mohavicch');


var nikvoladi = new Array();
nikvoladi['d'] = [1,2,3];
nikvoladi['m'] = [1,2,3];
nikvoladi['s'] = [1,2,3,4,5];
nikvoladi['a'] = [1,2,3,4,5,6,7,8,9,10,11];
nikvoladi['km'] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
nikvoladi['ka'] = [0,1,2,3,4,5,6,7,8,9,11,12,13,14];
nikvoladi['kt'] = [];
nikvoladi['vm'] = ['Pārā','Pāci','BhīV','Mv','Cv','Pariv'];
nikvoladi['va'] = ['Pārā','Pāci','BhīV','Mv','Cv','Pariv'];
nikvoladi['vt'] = ['Pārā','Pāci','BhīV','Mv','Cv','Pariv','Dvem','VinS-A','VajB-T','Vim-T','VinL-T','KvP-T','KvAn-T','VinVin','VinVin-T','UtVin-T','PācYoj','KhudSik '];
nikvoladi['ym'] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
nikvoladi['ya'] = [0,1,2,3,4,5,8];
nikvoladi['yt'] = [0,1,2,3,4,5,8];
nikvoladi['x'] = [1,2];
nikvoladi['b'] = ['Mūla','Ṭīkā'];
nikvoladi['gm'] = ['Mog','Kac','SPM','SDhM','PRS'];
nikvoladi['ga'] = [];
nikvoladi['gt'] = [];
nikvoladi['n'] = [0,1,2,3,4,5,6,7,8];

DPR_G.G_nikFullNames = [];
DPR_G.G_nikFullNames['v'] = 'Vinaya';
DPR_G.G_nikFullNames['d'] = 'Dīgha';
DPR_G.G_nikFullNames['m'] = 'Majjhima';
DPR_G.G_nikFullNames['s'] = 'Saṃyutta';
DPR_G.G_nikFullNames['a'] = 'Aṅguttara';
DPR_G.G_nikFullNames['k'] = 'Khuddaka';
DPR_G.G_nikFullNames['y'] = 'Abhidhamma';
DPR_G.G_nikFullNames['x'] = 'Vism';
DPR_G.G_nikFullNames['b'] = 'Abhidh-s';
DPR_G.G_nikFullNames['g'] = 'Byākaraṇa';
DPR_G.G_nikFullNames['n'] = 'Añña';

DPR_G.G_nikFullFullNames = [];
DPR_G.G_nikFullFullNames['v'] = 'Vinaya Piṭaka';
DPR_G.G_nikFullFullNames['d'] = 'Dīgha Nikāya';
DPR_G.G_nikFullFullNames['m'] = 'Majjhima Nikāya';
DPR_G.G_nikFullFullNames['s'] = 'Saṃyutta Nikāya';
DPR_G.G_nikFullFullNames['a'] = 'Aṅguttara Nikāya';
DPR_G.G_nikFullFullNames['k'] = 'Khuddaka Nikāya';
DPR_G.G_nikFullFullNames['y'] = 'Abhidhamma Piṭaka';
DPR_G.G_nikFullFullNames['x'] = 'Visuddhimagga';
DPR_G.G_nikFullFullNames['b'] = 'Abhidhammattha-saṅgaha';
DPR_G.G_nikFullFullNames['g'] = 'Byākaraṇa';
DPR_G.G_nikFullFullNames['n'] = 'Añña';

DPR_G.G_kVaggas = []

function makekVaggas() {
  DPR_G.G_kVaggas[1] = [[],[9],-1]; // don't show in indexes
  DPR_G.G_kVaggas[2] = [[],[26],-1];
  DPR_G.G_kVaggas[3] = [[10,10,10,10,10,10,10,10],[],6];
  DPR_G.G_kVaggas[4] = [[10,10,7,10,12,10,10,10,10,10,13],[3,5,10],6];
  DPR_G.G_kVaggas[5] = [[12,14,12,16,19],[],6];
  DPR_G.G_kVaggas[6] = [[17,11,10,12,14,10,11],[4],6];
  DPR_G.G_kVaggas[7] = [[12,13,10,16],[],6];
  DPR_G.G_kVaggas[8] = [[0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,16,12,12,14,5,3,1,7,1,2,1,2,2,10,3,1,1,1,1],[1,13,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],6];
  DPR_G.G_kVaggas[9] = [[18,10,8,1,12,8,3,1,1,1,1,1,5,1,1,1],[],6];
  DPR_G.G_kVaggas[10] = [[12],[42,56],6];
  for(var i=0;i<54;i++)
    DPR_G.G_kVaggas[10][0].push(10);
  DPR_G.G_kVaggas[10][0].push(11);
  DPR_G.G_kVaggas[11] = [[10,10,10,10],[],6,true]; // true means shift from vagga to sutta
  DPR_G.G_kVaggas[12] = [[],[29],-1];
  DPR_G.G_kVaggas[13] = [[10,10,15],[],6];
  DPR_G.G_kVaggas[14] = [[],[15,25,30,35,38,40,42,43,44,45,46,47,48,49,50,51],-1];
  for(var i=0;i<37;i++)
    DPR_G.G_kVaggas[14][0].push(10);
  DPR_G.G_kVaggas[14][0] = DPR_G.G_kVaggas[14][0].concat([5,10,10,10,11,10,12,16,9,10,10,13,14,10]);
  DPR_G.G_kVaggas[15] = [[],[5,8,10,12,17,27],-1,false,520];
  for(var i=0;i<27;i++)
    DPR_G.G_kVaggas[15][0].push(1);
}
makekVaggas();


DPR_G.G_SNAdjustNumbers = [];
DPR_G.G_SNAdjustNumbers[12] = [];
DPR_G.G_SNAdjustNumbers[12][72] = 9;
DPR_G.G_SNAdjustNumbers[12][74] = 9;
DPR_G.G_SNAdjustNumbers[12][75] = 10;

DPR_G.G_SNAdjustNumbers[17] = [];
DPR_G.G_SNAdjustNumbers[17][13] = 7;
DPR_G.G_SNAdjustNumbers[17][31] = 5;

DPR_G.G_SNAdjustNumbers[18] = [];
DPR_G.G_SNAdjustNumbers[18][12] = 8;

DPR_G.G_SNAdjustNumbers[23] = [];
DPR_G.G_SNAdjustNumbers[23][23] = 10;
DPR_G.G_SNAdjustNumbers[23][25] = 10;

DPR_G.G_SNAdjustNumbers[24] = [];
DPR_G.G_SNAdjustNumbers[24][19] = 16;
DPR_G.G_SNAdjustNumbers[24][29] = 24;
DPR_G.G_SNAdjustNumbers[24][31] = 24;

DPR_G.G_SNAdjustNumbers[29] = [];
DPR_G.G_SNAdjustNumbers[29][11] = 9;
DPR_G.G_SNAdjustNumbers[29][12] = 29;

DPR_G.G_SNAdjustNumbers[30] = [];
DPR_G.G_SNAdjustNumbers[30][4] = 2;
DPR_G.G_SNAdjustNumbers[30][5] = 9;
DPR_G.G_SNAdjustNumbers[30][6] = 29;

DPR_G.G_SNAdjustNumbers[31] = [];
DPR_G.G_SNAdjustNumbers[31][4] = 8;
DPR_G.G_SNAdjustNumbers[31][5] = 9;
DPR_G.G_SNAdjustNumbers[31][6] = 89;

DPR_G.G_SNAdjustNumbers[32] = [];
DPR_G.G_SNAdjustNumbers[32][3] = 9;
DPR_G.G_SNAdjustNumbers[32][4] = 39;

DPR_G.G_SNAdjustNumbers[33] = [];
DPR_G.G_SNAdjustNumbers[33][6] = 4;
DPR_G.G_SNAdjustNumbers[33][7] = 4;
DPR_G.G_SNAdjustNumbers[33][8] = 4;
DPR_G.G_SNAdjustNumbers[33][9] = 4;
DPR_G.G_SNAdjustNumbers[33][10] = 4;
DPR_G.G_SNAdjustNumbers[33][11] = 4;
DPR_G.G_SNAdjustNumbers[33][12] = 4;
DPR_G.G_SNAdjustNumbers[33][13] = 4;
DPR_G.G_SNAdjustNumbers[33][14] = 4;
DPR_G.G_SNAdjustNumbers[33][15] = 4;

DPR_G.G_SNAdjustNumbers[34] = [];
DPR_G.G_SNAdjustNumbers[34][20] = 7;
DPR_G.G_SNAdjustNumbers[34][21] = 6;
DPR_G.G_SNAdjustNumbers[34][22] = 5;
DPR_G.G_SNAdjustNumbers[34][23] = 4;
DPR_G.G_SNAdjustNumbers[34][24] = 3;
DPR_G.G_SNAdjustNumbers[34][25] = 2;
DPR_G.G_SNAdjustNumbers[34][26] = 1;

DPR_G.G_SNAdjustNumbers[35] = [];
DPR_G.G_SNAdjustNumbers[35][33] = 9;
DPR_G.G_SNAdjustNumbers[35][34] = 8;
DPR_G.G_SNAdjustNumbers[35][154] = 2;
DPR_G.G_SNAdjustNumbers[35][155] = 2;
DPR_G.G_SNAdjustNumbers[35][156] = 2;
DPR_G.G_SNAdjustNumbers[35][157] = 2;
DPR_G.G_SNAdjustNumbers[35][158] = 2;
DPR_G.G_SNAdjustNumbers[35][162] = 2;
DPR_G.G_SNAdjustNumbers[35][163] = 2;
DPR_G.G_SNAdjustNumbers[35][164] = 2;
DPR_G.G_SNAdjustNumbers[35][165] = 2;
DPR_G.G_SNAdjustNumbers[35][166] = 2;
DPR_G.G_SNAdjustNumbers[35][170] = 2;
DPR_G.G_SNAdjustNumbers[35][171] = 2;
DPR_G.G_SNAdjustNumbers[35][172] = 2;
DPR_G.G_SNAdjustNumbers[35][173] = 2;
DPR_G.G_SNAdjustNumbers[35][174] = 2;

DPR_G.G_SNAdjustNumbers[43] = [];
DPR_G.G_SNAdjustNumbers[43][14] = 29;

DPR_G.G_SNAdjustNumbers[45] = [];
DPR_G.G_SNAdjustNumbers[45][42] = 5;
DPR_G.G_SNAdjustNumbers[45][45] = 4;
DPR_G.G_SNAdjustNumbers[45][48] = 4;
DPR_G.G_SNAdjustNumbers[45][51] = 4;
DPR_G.G_SNAdjustNumbers[45][54] = 4;
DPR_G.G_SNAdjustNumbers[45][57] = 4;
DPR_G.G_SNAdjustNumbers[45][60] = 4;
DPR_G.G_SNAdjustNumbers[45][63] = 3;
DPR_G.G_SNAdjustNumbers[45][66] = 4;
DPR_G.G_SNAdjustNumbers[45][68] = 4;
DPR_G.G_SNAdjustNumbers[45][70] = 4;
DPR_G.G_SNAdjustNumbers[45][72] = 4;
DPR_G.G_SNAdjustNumbers[45][74] = 4;
DPR_G.G_SNAdjustNumbers[45][76] = 4;
DPR_G.G_SNAdjustNumbers[45][78] = 4;
DPR_G.G_SNAdjustNumbers[45][81] = 4;
DPR_G.G_SNAdjustNumbers[45][82] = 2;

DPR_G.G_SNAdjustNumbers[46] = [];
DPR_G.G_SNAdjustNumbers[46][82] = 11;
DPR_G.G_SNAdjustNumbers[46][83] = 9;
DPR_G.G_SNAdjustNumbers[46][84] = 11;
DPR_G.G_SNAdjustNumbers[46][85] = 9;
DPR_G.G_SNAdjustNumbers[46][86] = 7;

DPR_G.G_SNAdjustNumbers[47] = [];
DPR_G.G_SNAdjustNumbers[47][51] = 11;
DPR_G.G_SNAdjustNumbers[47][52] = 9;
DPR_G.G_SNAdjustNumbers[47][53] = 11;
DPR_G.G_SNAdjustNumbers[47][54] = 9;
DPR_G.G_SNAdjustNumbers[47][55] = 9;

DPR_G.G_SNAdjustNumbers[48] = [];
DPR_G.G_SNAdjustNumbers[48][71] = 11;
DPR_G.G_SNAdjustNumbers[48][72] = 9;
DPR_G.G_SNAdjustNumbers[48][73] = 11;
DPR_G.G_SNAdjustNumbers[48][74] = 9;

DPR_G.G_SNAdjustNumbers[49] = [];
DPR_G.G_SNAdjustNumbers[49][1] = 11;
DPR_G.G_SNAdjustNumbers[49][3] = 11;
DPR_G.G_SNAdjustNumbers[49][4] = 9;
DPR_G.G_SNAdjustNumbers[49][5] = 9;

DPR_G.G_SNAdjustNumbers[50] = [];
DPR_G.G_SNAdjustNumbers[50][1] = 11;
DPR_G.G_SNAdjustNumbers[50][3] = 9;
DPR_G.G_SNAdjustNumbers[50][4] = 11;
DPR_G.G_SNAdjustNumbers[50][5] = 11;
DPR_G.G_SNAdjustNumbers[50][6] = 9;

DPR_G.G_SNAdjustNumbers[51] = [];
DPR_G.G_SNAdjustNumbers[51][33] = 11;
DPR_G.G_SNAdjustNumbers[51][34] = 9;

DPR_G.G_SNAdjustNumbers[53] = [];
DPR_G.G_SNAdjustNumbers[53][1] = 11;
DPR_G.G_SNAdjustNumbers[53][2] = 9;

DPR_G.G_SNAdjustNumbers[56] = [];
DPR_G.G_SNAdjustNumbers[56][96] = 5;
DPR_G.G_SNAdjustNumbers[56][100] = 2;
DPR_G.G_SNAdjustNumbers[56][101] = 2;
DPR_G.G_SNAdjustNumbers[56][102] = 2;
DPR_G.G_SNAdjustNumbers[56][103] = 2;
DPR_G.G_SNAdjustNumbers[56][104] = 2;
DPR_G.G_SNAdjustNumbers[56][105] = 2;
DPR_G.G_SNAdjustNumbers[56][106] = 2;
DPR_G.G_SNAdjustNumbers[56][107] = 2;
DPR_G.G_SNAdjustNumbers[56][108] = 1;

function getSuttaNumber(nik,book,meta,volume,vagga,sutta,section,hier,sectlength,which) { // book, meta, etc. should be -1 (0,1,2...)

  var no;
  book = parseInt(book);
  meta = parseInt(meta);
  volume = parseInt(volume);
  vagga = parseInt(vagga);
  sutta = parseInt(sutta);
  section = parseInt(section);
  sectlength = parseInt(sectlength);

  switch (nik) {
    case 'd':
      no = vagga + 1;
      switch (true) {
        case (book == 2):
          no += 10;
        case (book > 0):
          no += 13;
        break;
      }
      if(sectlength > 1) no += '.' + (section+1)
    break;
    case 'm':
      no = (sutta + 1) + (book*50) + (vagga*10);
      if (book == 2 && vagga == 4) no += 2;
      if(sectlength > 1) no += '.' + (section+1)
    break;
    case 'a':
      if(hier != 'm') return;
      no = (book+1) + '.' + amlist[book][vagga][sutta][section][0] + (amlist[book][vagga][sutta][section].length > 1 ? '-' + amlist[book][vagga][sutta][section][amlist[book][vagga][sutta][section].length-1]:'');
    break;
    case 's':
      if(hier != 'm') return;
      switch (true) {
        case (book > 3):
          vagga += 10;
        case (book > 2):
          vagga += 13;
        case (book > 1):
          vagga += 10;
        case (book > 0):
          vagga += 11;
        break;
      }

      if(!smlist[vagga] || !smlist[vagga][sutta] || !smlist[vagga][sutta][section]) break;
      no = (vagga+1);
      var noend = 0;
      var sno = parseInt(smlist[vagga][sutta][section]);
      var add = 0;

      if(DPR_G.G_SNAdjustNumbers[no] != null){

        for(var key in DPR_G.G_SNAdjustNumbers[no]){
          if(DPR_G.G_SNAdjustNumbers[no].hasOwnProperty(key)&&
          /^0$|^[1-9]\d*$/.test(key) &&
          key <= 4294967294
          ){
            var keyint = parseInt(key)+add;

            if(sno+add == keyint){
              noend = (keyint+DPR_G.G_SNAdjustNumbers[no][key]);
              break;
            }
            else if(sno+add < keyint){
              break;
            }

            add += DPR_G.G_SNAdjustNumbers[no][key];
          }
        }
        sno = (sno+add);
      }
      if(no == 46){
        if(sno > 57 && sno < 63){
          sno = 57;
        }
        else if(sno > 62){
          sno -= 5;
          if(noend > 0){
            noend -= 5;
          }
        }
      }

      no += '.' + sno + (noend>0?"-"+noend:"");
      break;
    case 'k':
      var kv = DPR_G.G_kVaggas[book+1];
      if(hier != 'm' || !kv || (which && kv[2] != which)) return;
      var osec = 0;
      var osut = 0;

      if(!kv[0].length) { // vaggas only
        section = vagga;
      }
      else if(kv[1].length) {
        if(vagga > 0) {
          sutta+=kv[1][vagga-1];
        }
        for(var i = 0; i < sutta; i++) {
          section+=kv[0][i];
        }
      }
      else {
        if(kv[3] == 1)
          vagga = sutta;
        for(var i = 0; i < vagga; i++) {
          section+=kv[0][i];
        }
      }
      if(kv[4]) // jataka 2
        section+=kv[4];
      no = (book+1) +'.' + (section+1);
    break;
  }
  return no;
}

function getSuttaFromNumber(is) { // should be in array format SN,1,1
  var nik,book,meta,volume,vagga,sutta,section,hiert;

  // get att, tik

  if(/-[at]$/.exec(is[0])) {
    hiert = is[0].split('-')[1];
    is[0] = is[0].split('-')[0];
  }
  else hiert = 'm';
  is[0] = is[0].toUpperCase();

  if(is[0].length == 1)
    is[0] = is[0]+'N';

  nik = DPR_G.G_nikShortName[is[0]]; // letter

  var a1 = parseInt(is[1]); // number first part
  var a2 = (is[2] ? parseInt(is[2]) : 1); // second part, if exists

  book = 0;

  switch (nik) {
    case 'd': // sutta.section to book.vagga.section
      if(a1 > 34) return;
      vagga = a1 - 1;
      switch (true) {
        case (a1 > 23):
          vagga -= 10;
          book++;
        case (a1 > 13):
          vagga -= 13;
          book++;
        break;
      }
      section = a2-1;
    break;
    case 'm': // sutta.section to book.vagga.sutta.section
      if(a1 > 152) return;
      sutta = a1 - 1;
      vagga = Math.floor((sutta > 139 ? sutta-2 : sutta)/10);
      sutta -= (vagga*10)
      if (a1 > 142) sutta -= 2;

      book = Math.floor(vagga/5);
      vagga -= book*5

      section = a2-1;
    break;
    case 'a':  // book.sutta to book.vagga.sutta.section
      if(a1 > 11) return;
      if(hiert != 'm') return;
      book = a1 - 1;
      var found = 0;
      out:
      for (var vagga in amlist[book]) {
        for(var sutta in amlist[book][vagga]) {
          for(var section in amlist[book][vagga][sutta]) {
            if (parseInt(amlist[book][vagga][sutta][section][0]) == a2 || (parseInt(amlist[book][vagga][sutta][section][0]) < a2 && parseInt(amlist[book][vagga][sutta][section][amlist[book][vagga][sutta][section].length-1]) > a2)) {
              found = 1;
              break out;
            }
          }
        }
      }
      if(found == 0) return;
    break;
    case 's':
      if(a1 > 56) return;
      if(hiert != 'm') return;

      if(DPR_G.G_SNAdjustNumbers[a1] != null){
        for(var key in DPR_G.G_SNAdjustNumbers[a1]){
          if(DPR_G.G_SNAdjustNumbers[a1].hasOwnProperty(key)&&
          /^0$|^[1-9]\d*$/.test(key) &&
          key <= 4294967294
          ){
            if(a2 < parseInt(key)){
              break;
            }
            if(a2 < parseInt(key) + DPR_G.G_SNAdjustNumbers[a1][key]){
              a2 = key;
              break;
            }
            a2 -= DPR_G.G_SNAdjustNumbers[a1][key];
          }
        }
      }

      if(a1 == 46){
        if(a2 > 57){
          a2 += 5;
        }
      }

      a1--;
      vagga = a1;
      switch (true) {
        case (a1 > 43):
          vagga -= 10;
          book++;
        case (a1 > 33):
          vagga -= 13;
          book++;
        case (a1 > 20):
          vagga -= 10;
          book++;
        case (a1 > 10):
          vagga -= 11;
          book++;
        break;
      }
      var found = 0;
      out:
      for(var sutta in smlist[a1]) {
        for(var section in smlist[a1][sutta]) {
          if (parseInt(smlist[a1][sutta][section]) == a2) {
            found = 1;
            break out;
          }
        }
      }
    break;
    case 'k':
      if(hiert != 'm') return;
      book = a1-1;
      switch(a1) {
        case 1:
          if(a2 <0 || a2 > 9)
            return;
          vagga = a2-1;
        break;
        case 2:
          if(a2 <0 || a2 > 26)
            return;
          vagga = a2-1;
        break;
        default:
          var vss = vssCalc(a1,a2);
          if(!vss)
            return;
          vagga = vss[0];
          sutta = vss[1];
          section = vss[2];
        break;
      }
    break;
    default:
      return;
    break;
  }
  return [nik,book,meta?meta:0,volume?volume:0,vagga?vagga:0,sutta?sutta:0,section?section:0,hiert];
}

function vssCalc(a1,a2) { // calculate a three dimensional hierarchy
  var vss = DPR_G.G_kVaggas[a1];
  if(!vss)
    return;
  var ss = vss[0];
  var vs = vss[1];

  if(!ss.length) { // vaggas only
    return (a2 > vs[0]?null:[a2-1,0,0]);
  }
  var cnt = 0;
  for (var i in ss) {
    cnt+=ss[i];
  }
  if(vss[4])
    a2-=vss[4];
  if(a2>cnt)
    return;


  cnt = 0;
  var cnt2 = 0;
  var vagga = 0;
  var sutta = 0;
  var section = 0;

  for (var i in ss) {
    cnt+=ss[i];
    if(a2 > cnt) {
      cnt2++;
      sutta++;
      if(vs.length && cnt2 >= vs[vagga]) {
        sutta = 0;
        vagga++;
      }
    }
    else {
      section = a2 - 1;
      for(var j=0;j<cnt2; j++) {
        section -= ss[j];
      }
      break;
    }

  }

  if(vs.length || vss[3])
    return [vagga,sutta,section];
  else
    return [sutta,0,section];
}


function convertShortLink(place) {

  place = place.toLowerCase();

  if(!/^[A-Za-z]{1,4}-{0,1}[atAT]{0,1} {0,1}[\d]{1,}\.{0,1}[\d]*$/.test(place)) return [false,'Syntax Error','yellow'];  // loose syntax

  if(/^dhpv[ .]*[0-9]+$/.test(place)) { // dhp verses
    var dhpno = parseInt(place.replace(/[^0-9]/g,''));
    var dp = dhpv[dhpno];
    return ['k',1,0,0,dp[0],0,0,'m',dp[1]+1];
  }

  if(/^[A-Za-z]+ {0,1}([\d]+)$/.test(place)) {

    // kn subs
    var arr = [];
    arr['khp'] = 1;
    arr['dhp'] = 2;
    arr['ud'] = 3;
    arr['it'] = 4;
    arr['snp'] = 5;
    arr['vv'] = 6;
    arr['pv'] = 7;
    arr['thi'] = 9;
    arr['th'] = 8;
    arr['apa'] = 10;
    arr['api'] = 11;
    arr['bv'] = 12;
    arr['cp'] = 13;
    arr['ja'] = [14,520];

    for(var i in arr) {
      if(place.indexOf(i) === 0) {
        //alert(i);
        var no = place.replace(/^[A-Za-z]+ *([\d]+)$/,"$1");
        if(typeof(arr[i]) == 'object') { // multiple
          if(parseInt(no) > arr[i][1]) {
            no = parseInt(no) - arr[i][1];
          }
          place = 'kn'+arr[i][0]+'.'+no;
        }
        else
          place = 'kn'+arr[i]+'.'+no;
      }
    }
  }
  if(!/^[DMASKdmask][Nn]{0,1}-{0,1}[atAT]{0,1} {0,1}[0-9]+\.{0,1}[0-9]*$/.test(place))
    return [false,'Syntax Error','yellow'];

  place = place.replace(/^([DMASKdmask][Nn]{0,1}-{0,1}[atAT]{0,1})([0-9])/,"$1,$2").replace(/[ .]/g,',');

  var outplace = getSuttaFromNumber(place.split(','));
  if(!outplace) return [false,'Link not found','yellow'];
  return outplace;
}
