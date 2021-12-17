const fs = require('fs');
const SESSION_FILE_PATH = './session.json';
let countryArray = [
    {
      name: "Afghanistan",
      key: "AF",
      phone: 93
    },
    {
      name: "Aland Islands",
      key: "AX",
      phone: 358
    },
    {
      name: "Albania",
      key: "AL",
      phone: 355
    },
    {
      name: "Algeria",
      key: "DZ",
      phone: 213
    },
    {
      name: "American Samoa",
      key: "AS",
      phone: 1684
    },
    {
      name: "Andorra",
      key: "AD",
      phone: 376
    },
    {
      name: "Angola",
      key: "AO",
      phone: 244
    },
    {
      name: "Anguilla",
      key: "AI",
      phone: 1264
    },
    {
      name: "Antarctica",
      key: "AQ",
      phone: 672
    },
    {
      name: "Antigua and Barbuda",
      key: "AG",
      phone: 1268
    },
    {
      name: "Argentina",
      key: "AR",
      phone: 54
    },
    {
      name: "Armenia",
      key: "AM",
      phone: 374
    },
    {
      name: "Aruba",
      key: "AW",
      phone: 297
    },
    {
      name: "Australia",
      key: "AU",
      phone: 61
    },
    {
      name: "Austria",
      key: "AT",
      phone: 43
    },
    {
      name: "Azerbaijan",
      key: "AZ",
      phone: 994
    },
    {
      name: "Bahamas",
      key: "BS",
      phone: 1242
    },
    {
      name: "Bahrain",
      key: "BH",
      phone: 973
    },
    {
      name: "Bangladesh",
      key: "BD",
      phone: 880
    },
    {
      name: "Barbados",
      key: "BB",
      phone: 1246
    },
    {
      name: "Belarus",
      key: "BY",
      phone: 375
    },
    {
      name: "Belgium",
      key: "BE",
      phone: 32
    },
    {
      name: "Belize",
      key: "BZ",
      phone: 501
    },
    {
      name: "Benin",
      key: "BJ",
      phone: 229
    },
    {
      name: "Bermuda",
      key: "BM",
      phone: 1441
    },
    {
      name: "Bhutan",
      key: "BT",
      phone: 975
    },
    {
      name: "Bolivia",
      key: "BO",
      phone: 591
    },
    {
      name: "Bonaire, Sint Eustatius and Saba",
      key: "BQ",
      phone: 599
    },
    {
      name: "Bosnia and Herzegovina",
      key: "BA",
      phone: 387
    },
    {
      name: "Botswana",
      key: "BW",
      phone: 267
    },
    {
      name: "Bouvet Island",
      key: "BV",
      phone: 55
    },
    {
      name: "Brazil",
      key: "BR",
      phone: 55
    },
    {
      name: "British Indian Ocean Territory",
      key: "IO",
      phone: 246
    },
    {
      name: "Brunei Darussalam",
      key: "BN",
      phone: 673
    },
    {
      name: "Bulgaria",
      key: "BG",
      phone: 359
    },
    {
      name: "Burkina Faso",
      key: "BF",
      phone: 226
    },
    {
      name: "Burundi",
      key: "BI",
      phone: 257
    },
    {
      name: "Cambodia",
      key: "KH",
      phone: 855
    },
    {
      name: "Cameroon",
      key: "CM",
      phone: 237
    },
    {
      name: "Canada",
      key: "CA",
      phone: 1
    },
    {
      name: "Cape Verde",
      key: "CV",
      phone: 238
    },
    {
      name: "Cayman Islands",
      key: "KY",
      phone: 1345
    },
    {
      name: "Central African Republic",
      key: "CF",
      phone: 236
    },
    {
      name: "Chad",
      key: "TD",
      phone: 235
    },
    {
      name: "Chile",
      key: "CL",
      phone: 56
    },
    {
      name: "China",
      key: "CN",
      phone: 86
    },
    {
      name: "Christmas Island",
      key: "CX",
      phone: 61
    },
    {
      name: "Cocos (Keeling) Islands",
      key: "CC",
      phone: 672
    },
    {
      name: "Colombia",
      key: "CO",
      phone: 57
    },
    {
      name: "Comoros",
      key: "KM",
      phone: 269
    },
    {
      name: "Congo",
      key: "CG",
      phone: 242
    },
    {
      name: "Congo, Democratic Republic of the Congo",
      key: "CD",
      phone: 242
    },
    {
      name: "Cook Islands",
      key: "CK",
      phone: 682
    },
    {
      name: "Costa Rica",
      key: "CR",
      phone: 506
    },
    {
      name: "Cote D'Ivoire",
      key: "CI",
      phone: 225
    },
    {
      name: "Croatia",
      key: "HR",
      phone: 385
    },
    {
      name: "Cuba",
      key: "CU",
      phone: 53
    },
    {
      name: "Curacao",
      key: "CW",
      phone: 599
    },
    {
      name: "Cyprus",
      key: "CY",
      phone: 357
    },
    {
      name: "Czech Republic",
      key: "CZ",
      phone: 420
    },
    {
      name: "Denmark",
      key: "DK",
      phone: 45
    },
    {
      name: "Djibouti",
      key: "DJ",
      phone: 253
    },
    {
      name: "Dominica",
      key: "DM",
      phone: 1767
    },
    {
      name: "Dominican Republic",
      key: "DO",
      phone: 1809
    },
    {
      name: "Ecuador",
      key: "EC",
      phone: 593
    },
    {
      name: "Egypt",
      key: "EG",
      phone: 20
    },
    {
      name: "El Salvador",
      key: "SV",
      phone: 503
    },
    {
      name: "Equatorial Guinea",
      key: "GQ",
      phone: 240
    },
    {
      name: "Eritrea",
      key: "ER",
      phone: 291
    },
    {
      name: "Estonia",
      key: "EE",
      phone: 372
    },
    {
      name: "Ethiopia",
      key: "ET",
      phone: 251
    },
    {
      name: "Falkland Islands (Malvinas)",
      key: "FK",
      phone: 500
    },
    {
      name: "Faroe Islands",
      key: "FO",
      phone: 298
    },
    {
      name: "Fiji",
      key: "FJ",
      phone: 679
    },
    {
      name: "Finland",
      key: "FI",
      phone: 358
    },
    {
      name: "France",
      key: "FR",
      phone: 33
    },
    {
      name: "French Guiana",
      key: "GF",
      phone: 594
    },
    {
      name: "French Polynesia",
      key: "PF",
      phone: 689
    },
    {
      name: "French Southern Territories",
      key: "TF",
      phone: 262
    },
    {
      name: "Gabon",
      key: "GA",
      phone: 241
    },
    {
      name: "Gambia",
      key: "GM",
      phone: 220
    },
    {
      name: "Georgia",
      key: "GE",
      phone: 995
    },
    {
      name: "Germany",
      key: "DE",
      phone: 49
    },
    {
      name: "Ghana",
      key: "GH",
      phone: 233
    },
    {
      name: "Gibraltar",
      key: "GI",
      phone: 350
    },
    {
      name: "Greece",
      key: "GR",
      phone: 30
    },
    {
      name: "Greenland",
      key: "GL",
      phone: 299
    },
    {
      name: "Grenada",
      key: "GD",
      phone: 1473
    },
    {
      name: "Guadeloupe",
      key: "GP",
      phone: 590
    },
    {
      name: "Guam",
      key: "GU",
      phone: 1671
    },
    {
      name: "Guatemala",
      key: "GT",
      phone: 502
    },
    {
      name: "Guernsey",
      key: "GG",
      phone: 44
    },
    {
      name: "Guinea",
      key: "GN",
      phone: 224
    },
    {
      name: "Guinea-Bissau",
      key: "GW",
      phone: 245
    },
    {
      name: "Guyana",
      key: "GY",
      phone: 592
    },
    {
      name: "Haiti",
      key: "HT",
      phone: 509
    },
    {
      name: "Heard Island and Mcdonald Islands",
      key: "HM",
      phone: 0
    },
    {
      name: "Holy See (Vatican City State)",
      key: "VA",
      phone: 39
    },
    {
      name: "Honduras",
      key: "HN",
      phone: 504
    },
    {
      name: "Hong Kong",
      key: "HK",
      phone: 852
    },
    {
      name: "Hungary",
      key: "HU",
      phone: 36
    },
    {
      name: "Iceland",
      key: "IS",
      phone: 354
    },
    {
      name: "India",
      key: "IN",
      phone: 91
    },
    {
      name: "Indonesia",
      key: "ID",
      phone: 62
    },
    {
      name: "Iran, Islamic Republic of",
      key: "IR",
      phone: 98
    },
    {
      name: "Iraq",
      key: "IQ",
      phone: 964
    },
    {
      name: "Ireland",
      key: "IE",
      phone: 353
    },
    {
      name: "Isle of Man",
      key: "IM",
      phone: 44
    },
    {
      name: "Israel",
      key: "IL",
      phone: 972
    },
    {
      name: "Italy",
      key: "IT",
      phone: 39
    },
    {
      name: "Jamaica",
      key: "JM",
      phone: 1876
    },
    {
      name: "Japan",
      key: "JP",
      phone: 81
    },
    {
      name: "Jersey",
      key: "JE",
      phone: 44
    },
    {
      name: "Jordan",
      key: "JO",
      phone: 962
    },
    {
      name: "Kazakhstan",
      key: "KZ",
      phone: 7
    },
    {
      name: "Kenya",
      key: "KE",
      phone: 254
    },
    {
      name: "Kiribati",
      key: "KI",
      phone: 686
    },
    {
      name: "Korea, Democratic People's Republic of",
      key: "KP",
      phone: 850
    },
    {
      name: "Korea, Republic of",
      key: "KR",
      phone: 82
    },
    {
      name: "Kosovo",
      key: "XK",
      phone: 381
    },
    {
      name: "Kuwait",
      key: "KW",
      phone: 965
    },
    {
      name: "Kyrgyzstan",
      key: "KG",
      phone: 996
    },
    {
      name: "Lao People's Democratic Republic",
      key: "LA",
      phone: 856
    },
    {
      name: "Latvia",
      key: "LV",
      phone: 371
    },
    {
      name: "Lebanon",
      key: "LB",
      phone: 961
    },
    {
      name: "Lesotho",
      key: "LS",
      phone: 266
    },
    {
      name: "Liberia",
      key: "LR",
      phone: 231
    },
    {
      name: "Libyan Arab Jamahiriya",
      key: "LY",
      phone: 218
    },
    {
      name: "Liechtenstein",
      key: "LI",
      phone: 423
    },
    {
      name: "Lithuania",
      key: "LT",
      phone: 370
    },
    {
      name: "Luxembourg",
      key: "LU",
      phone: 352
    },
    {
      name: "Macao",
      key: "MO",
      phone: 853
    },
    {
      name: "Macedonia, the Former Yugoslav Republic of",
      key: "MK",
      phone: 389
    },
    {
      name: "Madagascar",
      key: "MG",
      phone: 261
    },
    {
      name: "Malawi",
      key: "MW",
      phone: 265
    },
    {
      name: "Malaysia",
      key: "MY",
      phone: 60
    },
    {
      name: "Maldives",
      key: "MV",
      phone: 960
    },
    {
      name: "Mali",
      key: "ML",
      phone: 223
    },
    {
      name: "Malta",
      key: "MT",
      phone: 356
    },
    {
      name: "Marshall Islands",
      key: "MH",
      phone: 692
    },
    {
      name: "Martinique",
      key: "MQ",
      phone: 596
    },
    {
      name: "Mauritania",
      key: "MR",
      phone: 222
    },
    {
      name: "Mauritius",
      key: "MU",
      phone: 230
    },
    {
      name: "Mayotte",
      key: "YT",
      phone: 269
    },
    {
      name: "Mexico",
      key: "MX",
      phone: 52
    },
    {
      name: "Micronesia, Federated States of",
      key: "FM",
      phone: 691
    },
    {
      name: "Moldova, Republic of",
      key: "MD",
      phone: 373
    },
    {
      name: "Monaco",
      key: "MC",
      phone: 377
    },
    {
      name: "Mongolia",
      key: "MN",
      phone: 976
    },
    {
      name: "Montenegro",
      key: "ME",
      phone: 382
    },
    {
      name: "Montserrat",
      key: "MS",
      phone: 1664
    },
    {
      name: "Morocco",
      key: "MA",
      phone: 212
    },
    {
      name: "Mozambique",
      key: "MZ",
      phone: 258
    },
    {
      name: "Myanmar",
      key: "MM",
      phone: 95
    },
    {
      name: "Namibia",
      key: "NA",
      phone: 264
    },
    {
      name: "Nauru",
      key: "NR",
      phone: 674
    },
    {
      name: "Nepal",
      key: "NP",
      phone: 977
    },
    {
      name: "Netherlands",
      key: "NL",
      phone: 31
    },
    {
      name: "Netherlands Antilles",
      key: "AN",
      phone: 599
    },
    {
      name: "New Caledonia",
      key: "NC",
      phone: 687
    },
    {
      name: "New Zealand",
      key: "NZ",
      phone: 64
    },
    {
      name: "Nicaragua",
      key: "NI",
      phone: 505
    },
    {
      name: "Niger",
      key: "NE",
      phone: 227
    },
    {
      name: "Nigeria",
      key: "NG",
      phone: 234
    },
    {
      name: "Niue",
      key: "NU",
      phone: 683
    },
    {
      name: "Norfolk Island",
      key: "NF",
      phone: 672
    },
    {
      name: "Northern Mariana Islands",
      key: "MP",
      phone: 1670
    },
    {
      name: "Norway",
      key: "NO",
      phone: 47
    },
    {
      name: "Oman",
      key: "OM",
      phone: 968
    },
    {
      name: "Pakistan",
      key: "PK",
      phone: 92
    },
    {
      name: "Palau",
      key: "PW",
      phone: 680
    },
    {
      name: "Palestinian Territory, Occupied",
      key: "PS",
      phone: 970
    },
    {
      name: "Panama",
      key: "PA",
      phone: 507
    },
    {
      name: "Papua New Guinea",
      key: "PG",
      phone: 675
    },
    {
      name: "Paraguay",
      key: "PY",
      phone: 595
    },
    {
      name: "Peru",
      key: "PE",
      phone: 51
    },
    {
      name: "Philippines",
      key: "PH",
      phone: 63
    },
    {
      name: "Pitcairn",
      key: "PN",
      phone: 64
    },
    {
      name: "Poland",
      key: "PL",
      phone: 48
    },
    {
      name: "Portugal",
      key: "PT",
      phone: 351
    },
    {
      name: "Puerto Rico",
      key: "PR",
      phone: 1787
    },
    {
      name: "Qatar",
      key: "QA",
      phone: 974
    },
    {
      name: "Reunion",
      key: "RE",
      phone: 262
    },
    {
      name: "Romania",
      key: "RO",
      phone: 40
    },
    {
      name: "Russian Federation",
      key: "RU",
      phone: 70
    },
    {
      name: "Rwanda",
      key: "RW",
      phone: 250
    },
    {
      name: "Saint Barthelemy",
      key: "BL",
      phone: 590
    },
    {
      name: "Saint Helena",
      key: "SH",
      phone: 290
    },
    {
      name: "Saint Kitts and Nevis",
      key: "KN",
      phone: 1869
    },
    {
      name: "Saint Lucia",
      key: "LC",
      phone: 1758
    },
    {
      name: "Saint Martin",
      key: "MF",
      phone: 590
    },
    {
      name: "Saint Pierre and Miquelon",
      key: "PM",
      phone: 508
    },
    {
      name: "Saint Vincent and the Grenadines",
      key: "VC",
      phone: 1784
    },
    {
      name: "Samoa",
      key: "WS",
      phone: 684
    },
    {
      name: "San Marino",
      key: "SM",
      phone: 378
    },
    {
      name: "Sao Tome and Principe",
      key: "ST",
      phone: 239
    },
    {
      name: "Saudi Arabia",
      key: "SA",
      phone: 966
    },
    {
      name: "Senegal",
      key: "SN",
      phone: 221
    },
    {
      name: "Serbia",
      key: "RS",
      phone: 381
    },
    {
      name: "Serbia and Montenegro",
      key: "CS",
      phone: 381
    },
    {
      name: "Seychelles",
      key: "SC",
      phone: 248
    },
    {
      name: "Sierra Leone",
      key: "SL",
      phone: 232
    },
    {
      name: "Singapore",
      key: "SG",
      phone: 65
    },
    {
      name: "Sint Maarten",
      key: "SX",
      phone: 1
    },
    {
      name: "Slovakia",
      key: "SK",
      phone: 421
    },
    {
      name: "Slovenia",
      key: "SI",
      phone: 386
    },
    {
      name: "Solomon Islands",
      key: "SB",
      phone: 677
    },
    {
      name: "Somalia",
      key: "SO",
      phone: 252
    },
    {
      name: "South Africa",
      key: "ZA",
      phone: 27
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      key: "GS",
      phone: 500
    },
    {
      name: "South Sudan",
      key: "SS",
      phone: 211
    },
    {
      name: "Spain",
      key: "ES",
      phone: 34
    },
    {
      name: "Sri Lanka",
      key: "LK",
      phone: 94
    },
    {
      name: "Sudan",
      key: "SD",
      phone: 249
    },
    {
      name: "Suriname",
      key: "SR",
      phone: 597
    },
    {
      name: "Svalbard and Jan Mayen",
      key: "SJ",
      phone: 47
    },
    {
      name: "Swaziland",
      key: "SZ",
      phone: 268
    },
    {
      name: "Sweden",
      key: "SE",
      phone: 46
    },
    {
      name: "Switzerland",
      key: "CH",
      phone: 41
    },
    {
      name: "Syrian Arab Republic",
      key: "SY",
      phone: 963
    },
    {
      name: "Taiwan, Province of China",
      key: "TW",
      phone: 886
    },
    {
      name: "Tajikistan",
      key: "TJ",
      phone: 992
    },
    {
      name: "Tanzania, United Republic of",
      key: "TZ",
      phone: 255
    },
    {
      name: "Thailand",
      key: "TH",
      phone: 66
    },
    {
      name: "Timor-Leste",
      key: "TL",
      phone: 670
    },
    {
      name: "Togo",
      key: "TG",
      phone: 228
    },
    {
      name: "Tokelau",
      key: "TK",
      phone: 690
    },
    {
      name: "Tonga",
      key: "TO",
      phone: 676
    },
    {
      name: "Trinidad and Tobago",
      key: "TT",
      phone: 1868
    },
    {
      name: "Tunisia",
      key: "TN",
      phone: 216
    },
    {
      name: "Turkey",
      key: "TR",
      phone: 90
    },
    {
      name: "Turkmenistan",
      key: "TM",
      phone: 7370
    },
    {
      name: "Turks and Caicos Islands",
      key: "TC",
      phone: 1649
    },
    {
      name: "Tuvalu",
      key: "TV",
      phone: 688
    },
    {
      name: "Uganda",
      key: "UG",
      phone: 256
    },
    {
      name: "Ukraine",
      key: "UA",
      phone: 380
    },
    {
      name: "United Arab Emirates",
      key: "AE",
      phone: 971
    },
    {
      name: "United Kingdom",
      key: "GB",
      phone: 44
    },
    {
      name: "United States",
      key: "US",
      phone: 1
    },
    {
      name: "United States Minor Outlying Islands",
      key: "UM",
      phone: 1
    },
    {
      name: "Uruguay",
      key: "UY",
      phone: 598
    },
    {
      name: "Uzbekistan",
      key: "UZ",
      phone: 998
    },
    {
      name: "Vanuatu",
      key: "VU",
      phone: 678
    },
    {
      name: "Venezuela",
      key: "VE",
      phone: 58
    },
    {
      name: "Viet Nam",
      key: "VN",
      phone: 84
    },
    {
      name: "Virgin Islands, British",
      key: "VG",
      phone: 1284
    },
    {
      name: "Virgin Islands, U.s.",
      key: "VI",
      phone: 1340
    },
    {
      name: "Wallis and Futuna",
      key: "WF",
      phone: 681
    },
    {
      name: "Western Sahara",
      key: "EH",
      phone: 212
    },
    {
      name: "Yemen",
      key: "YE",
      phone: 967
    },
    {
      name: "Zambia",
      key: "ZM",
      phone: 260
    },
    {
      name: "Zimbabwe",
      key: "ZW",
      phone: 263
    }]
let preparedCountries = [];
for(let country of countryArray) {
    let object = {};
    object.name = country.name;
    object.key = country.key.toLowerCase();
    object.text = country.name;
    object.value = country.key.toLowerCase();
    object.flag = country.key.toLowerCase();
    object.phoneCode = country.phone
    preparedCountries.push(object)
}
console.log('preparedCountries', preparedCountries);
fs.writeFile(SESSION_FILE_PATH, JSON.stringify(preparedCountries), (err) => {
    if (err) {
        console.error(err);
    }
});
