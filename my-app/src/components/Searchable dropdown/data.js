const countries = [
  { name: "Afghanistan", capital: "Kabul" },
  { name: "Albania", capital: "Tirana (Tirane)" },
  { name: "Algeria", capital: "Algiers" },
  { name: "Andorra", capital: "Andorra la Vella" },
  { name: "Angola", capital: "Luanda" },
  { name: "Antigua", capital: "Saint John's" },
  { name: "Argentina", capital: "Buenos Aires" },
  { name: "Armenia", capital: "Yerevan" },
  { name: "Australia", capital: "Canberra" },
  { name: "Austria", capital: "Vienna" },
  { name: "Azerbaijan", capital: "Baku" },
  { name: "Bahamas", capital: "Nassau" },
  { name: "Bahrain", capital: "Manama" },
  { name: "Bangladesh", capital: "Dhaka" },
  { name: "Barbados", capital: "Bridgetown" },
  { name: "Belarus", capital: "Minsk" },
  { name: "Belgium", capital: "Brussels" },
  { name: "Belize", capital: "Belmopan" },
  { name: "Benin", capital: "Porto Novo" },
  { name: "Bhutan", capital: "Thimphu" },
  { name: "Bolivia", capital: "La Paz" },
  { name: "Bosnia", capital: "Sarajevo" },
  { name: "Botswana", capital: "Gaborone" },
  { name: "Brazil", capital: "Brasilia" },
  { name: "Brunei", capital: "Bandar Seri Begawan" },
  { name: "Bulgaria", capital: "Sofia" },
  { name: "Burkina", capital: "Ouagadougou" },
  { name: "Burundi", capital: "Gitega" },
  { name: "Cambodia", capital: "Phnom Penh" },
  { name: "Cameroon", capital: "Yaounde" },
  { name: "Canada", capital: "Ottawa" },
  { name: "Central African Republic", capital: "Bangui" },
  { name: "Chad", capital: "N'Djamena" },
  { name: "Chile", capital: "Santiago" },
  { name: "China", capital: "Beijing" },
  { name: "Colombia", capital: "Bogota" },
  { name: "Comoros", capital: "Moroni" },
  { name: "Congo", capital: "Kinshasa" },
  { name: "Congo Republic", capital: "Brazzaville" },
  { name: "Costa Rica", capital: "San Jose" },
  { name: "Ivory Coast", capital: "Yamoussoukro" },
  { name: "Croatia", capital: "Zagreb" },
  { name: "Cuba", capital: "Havana" },
  { name: "Cyprus", capital: "Nicosia" },
  { name: "Czech Republic", capital: "Prague" },
  { name: "Denmark", capital: "Copenhagen" },
  { name: "Djibouti", capital: "Djibouti" },
  { name: "Dominica", capital: "Roseau" },
  { name: "Dominican Republic", capital: "Santo Domingo" },
  { name: "Ecuador", capital: "Quito" },
  { name: "Egypt", capital: "Cairo" },
  { name: "El Salvador", capital: "San Salvador" },
  { name: "England", capital: "London" },
  { name: "Equatorial Guinea", capital: "Malabo" },
  { name: "Eritrea", capital: "Asmara" },
  { name: "Estonia", capital: "Tallinn" },
  { name: "Ethiopia", capital: "Addis Ababa" },
  { name: "Fiji", capital: "Suva" },
  { name: "Finland", capital: "Helsinki" },
  { name: "France", capital: "Paris" },
  { name: "Gabon", capital: "Libreville" },
  { name: "Gambia", capital: "Banjul" },
  { name: "Georgia", capital: "Tbilisi" },
  { name: "Germany", capital: "Berlin" },
  { name: "Ghana", capital: "Accra" },
  { name: "Greece", capital: "Athens" },
  { name: "Guatemala", capital: "Guatemala City" },
  { name: "Guinea", capital: "Conakry" },
  { name: "Guyana", capital: "Georgetown" },
  { name: "Haiti", capital: "Port au Prince" },
  { name: "Honduras", capital: "Tegucigalpa" },
  { name: "Hungary", capital: "Budapest" },
  { name: "Iceland", capital: "Reykjavik" },
  { name: "India", capital: "New Delhi" },
  { name: "Indonesia", capital: "Jakarta" },
  { name: "Iran", capital: "Tehran" },
  { name: "Iraq", capital: "Baghdad" },
  { name: "Ireland", capital: "Dublin" },
  {
    name: "Israel",
    capital: "Jerusalem",
  },
  { name: "Italy", capital: "Rome" },
  { name: "Jamaica", capital: "Kingston" },
  { name: "Japan", capital: "Tokyo" },
  { name: "Jordan", capital: "Amman" },
  { name: "Kazakhstan", capital: "Astana" },
  { name: "Kenya", capital: "Nairobi" },
  { name: "Kiribati", capital: "Tarawa Atoll" },
  { name: "Kosovo", capital: "Pristina" },
  { name: "Kuwait", capital: "Kuwait City" },
  { name: "Kyrgyzstan", capital: "Bishkek" },
  { name: "Laos", capital: "Vientiane" },
  { name: "Latvia", capital: "Riga" },
  { name: "Lebanon", capital: "Beirut" },
  { name: "Lesotho", capital: "Maseru" },
  { name: "Liberia", capital: "Monrovia" },
  { name: "Libya", capital: "Tripoli" },
  { name: "Liechtenstein", capital: "Vaduz" },
  { name: "Lithuania", capital: "Vilnius" },
  { name: "Luxembourg", capital: "Luxembourg" },
  { name: "Madagascar", capital: "Antananarivo" },
  { name: "Malawi", capital: "Lilongwe" },
  { name: "Malaysia", capital: "Kuala Lumpur" },
  { name: "Maldives", capital: "Male" },
  { name: "Mali", capital: "Bamako" },
  { name: "Malta", capital: "Valletta" },
  { name: "Mauritania", capital: "Nouakchott" },
  { name: "Mauritius", capital: "Port Louis" },
  { name: "Mexico", capital: "Mexico City" },
  { name: "Moldova", capital: "Chisinau" },
  { name: "Monaco", capital: "Monaco" },
  { name: "Mongolia", capital: "Ulaanbaatar" },
  { name: "Montenegro", capital: "Podgorica" },
  { name: "Morocco", capital: "Rabat" },
  { name: "Mozambique", capital: "Maputo" },
  { name: "Myanmar", capital: "Nay Pyi Taw" },
  { name: "Namibia", capital: "Windhoek" },
  { name: "Nauru", capital: "No official capital" },
  { name: "Nepal", capital: "Kathmandu" },
  { name: "Netherlands", capital: "Amsterdam" },
  { name: "NewZealand", capital: "Wellington" },
  { name: "Nicaragua", capital: "Managua" },
  { name: "Niger", capital: "Niamey" },
  { name: "Nigeria", capital: "Abuja" },
  { name: "North Korea", capital: "Pyongyang" },
  { name: "Norway", capital: "Oslo" },
  { name: "Oman", capital: "Muscat" },
  { name: "Pakistan", capital: "Islamabad" },
  { name: "Palau", capital: "Melekeok" },
  {
    name: "Palestine",
    capital: "Jerusalem",
  },
  { name: "Panama", capital: "Panama City" },
  { name: "Papua New Guinea", capital: "Port Moresby" },
  { name: "Paraguay", capital: "Asuncion" },
  { name: "Peru", capital: "Lima" },
  { name: "Philippines", capital: "Manila" },
  { name: "Poland", capital: "Warsaw" },
  { name: "Portugal", capital: "Lisbon" },
  { name: "Qatar", capital: "Doha" },
  { name: "Romania", capital: "Bucharest" },
  { name: "Russia", capital: "Moscow" },
  { name: "Rwanda", capital: "Kigali" },
  { name: "Samoa", capital: "Apia" },
  { name: "Saudi Arabia", capital: "Riyadh" },
  { name: "Scotland", capital: "Edinburgh" },
  { name: "Senegal", capital: "Dakar" },
  { name: "Serbia", capital: "Belgrade" },
  { name: "Seychelles", capital: "Victoria" },
  { name: "Singapore", capital: "Singapore" },
  { name: "Slovakia", capital: "Bratislava" },
  { name: "Slovenia", capital: "Ljubljana" },
  { name: "Somalia", capital: "Mogadishu" },
  { name: "South Africa", capital: "Cape Town" },
  { name: "South Korea", capital: "Seoul" },
  { name: "South Sudan", capital: "Juba" },
  { name: "Spain", capital: "Madrid" },
  { name: "Sri Lanka", capital: "Sri Jayawardenapura Kotte" },
  { name: "Sudan", capital: "Khartoum" },
  { name: "Suriname", capital: "Paramaribo" },
  { name: "Sweden", capital: "Stockholm" },
  { name: "Switzerland", capital: "Bern" },
  { name: "Syria", capital: "Damascus" },
  { name: "Taiwan", capital: "Taipei" },
  { name: "Tajikistan", capital: "Dushanbe" },
  { name: "Tanzania", capital: "Dodoma" },
  { name: "Thailand", capital: "Bangkok" },
  { name: "Togo", capital: "Lome" },
  { name: "Trinidad", capital: "Port of Spain" },
  { name: "Tunisia", capital: "Tunis" },
  { name: "Turkey", capital: "Ankara" },
  { name: "Turkmenistan", capital: "Ashgabat" },
  { name: "Tuvalu", capital: "Funafuti" },
  { name: "Uganda", capital: "Kampala" },
  { name: "Ukraine", capital: "Kyiv or Kiev" },
  { name: "United Arab Emirates", capital: "Abu Dhabi" },
  { name: "United Kingdom", capital: "London" },
  { name: "United States", capital: "Washington D.C." },
  { name: "Uruguay", capital: "Montevideo" },
  { name: "Uzbekistan", capital: "Tashkent" },
  { name: "Vanuatu", capital: "Port Vila" },
  { name: "Vatican City", capital: "Vatican City" },
  { name: "Venezuela", capital: "Caracas" },
  { name: "Vietnam", capital: "Hanoi" },
  { name: "Wales", capital: "Cardiff" },
  { name: "Yemen", capital: "Sana" },
  { name: "Zambia", capital: "Lusaka" },
  { name: "Zimbabwe", capital: "Harare" },
];

export function getCountries() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(countries), [500]);
  });
}
