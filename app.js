const pronoun = [//solicitado a gpt 200 pronombres
  "el", "la", "los", "las", "mi", "tu", "su", "nuestro", "nuestra", "vuestro",
  "vuestra", "ellos", "ellas", "yo", "tú", "usted", "nosotros", "nosotras", "vosotros", "vosotras",
  "le", "les", "mon", "ton", "son", "notre", "votre", "leur", "je", "il", "elle", "nous", "vous", "ils", "elles", "ce", "cette", "ces",
  "der", "die", "das", "mein", "dein", "sein", "ihr", "unser", "euer", "ich", "du", "er", "sie", "es", "wir", "dieser", "diese", "dieses",
  "i", "gli", "mio", "tuo", "suo", "nostro", "vostro", "loro", "io", "lui", "lei", "noi", "voi", "essi", "questo", "quella", "quelli",
  "hiszilla", "thiscat", "thester", "they", "hery", "ourman", "itsbot", "yourzilla", "herbear", "ourcat",
  "thisdog", "yourman", "hisster", "thatbear", "myzilla", "theircat", "thebot", "thisman", "mytron", "thatzilla",
  "hercat", "theirtron", "hisdog", "thiszilla", "ourtron", "thezilla", "ourtron", "yourbot", "herman", "mydog",
  "hisbot", "thattron", "thatbot", "theirman", "yourtron", "thistron", "mybot", "theirbot", "thatcat", "theman",
  "itsman", "histron", "theirzilla", "mybear", "itscat", "thatman", "thecat", "thattron", "ourbot", "hisman",
  "thatzilla", "thebear", "ourbear", "thester", "thatbear", "ourdog", "theirbear", "thatdog", "thetron", "thisbear",
  "yourdog", "yourbear", "hertron", "thatchat", "hisdog", "hisbear", "ourzilla", "thechat", "yourcat", "mycat",
  "ourchat", "thischat", "mychat", "theirchat", "itszilla", "theircat", "thisdog", "yourchat", "itsbear", "mybear",
  "yourzilla", "theman", "thatchat", "mychat", "thebot", "thatchat", "thiscat", "ourman", "thatcat", "herchat",
  "herdog", "yourman", "itschat", "hischat", "thechat", "theirman", "thatman", "ourchat", "thisman", "thisbot"
];

const adj = [//solicitado a gpt 200 adjetivos
  "grande", "pequeño", "rápido", "lento", "feliz", "triste", "fuerte", "débil", "viejo", "joven",
  "grand", "petit", "rapide", "lent", "heureux", "fort", "faible", "vieux", "jeune",
  "groß", "klein", "schnell", "langsam", "glücklich", "traurig", "stark", "schwach", "alt", "jung",
  "piccolo", "veloce", "felice", "forte", "debole", "vecchio", "giovane",
  "smartdog", "bravebot", "cooldog", "sadman", "lazyzilla", "fastbot", "weirdcat", "happycat", "braveman", "smartbot",
  "greatzilla", "fastman", "lazycat", "bigbot", "coolzilla", "greatcat", "weirdbot", "lazybot", "greatbot", "coolman",
  "smartcat", "sadcat", "coolbot", "bravezilla", "happyzilla", "lazytron", "bigman", "weirdman", "bigcat", "coolcat",
  "smartzilla", "weirdzilla", "smartman", "greatman", "happybot", "lazybear", "sadbear", "happybear", "bigbear", "fastcat",
  "coolbear", "bravecat", "weirdbear", "sadbot", "greatbear", "smartbear", "fastzilla", "happytron", "weirdtron", "bravebear",
  "cooltron", "sadtron", "lazytron", "smarttron", "fasttron", "greattron", "happycat", "lazycat", "bravebot", "sadcat",
  "weirdcat", "greatcat", "fastbear", "bigtron", "bigzilla", "coolzilla", "sadman", "lazycat", "smartdog", "happyzilla",
  "braveman", "coolman", "smartbot", "greatman", "fastman", "weirdman", "lazybot", "smartman", "happybot", "bravezilla",
  "bigbot", "coolbot", "greatbot", "sadbot", "happybear", "fastcat", "bigcat", "weirdbot", "bravecat", "coolcat",
  "sadbear", "lazybear", "greatbear", "fastzilla", "smartbear", "weirdbear", "bravebear", "sadcat", "happycat", "bigbear"
];

const noun = [//solicitado a gpt 200 nombres
  "perro", "gato", "ratón", "león", "tigre", "pájaro", "pez", "caballo", "elefante", "jirafa",
  "chien", "chat", "souris", "lion", "oiseau", "poisson", "cheval", "éléphant", "girafe",
  "hund", "katze", "maus", "löwe", "tiger", "vogel", "fisch", "pferd", "elefant", "giraffe",
  "cane", "gatto", "topo", "leone", "uccello", "pesce", "cavallo", "giraffa",
  "ninjaman", "lioncat", "ninjacat", "wizardtron", "tigerman", "piratedog", "aliencat", "ninjabear", "robotzilla", "liondog",
  "joggertron", "robotcat", "wizardzilla", "piratebot", "eaglecat", "ninjabot", "racoondog", "piratebear", "racoontiger", "joggerbear",
  "ninjabot", "piratezilla", "eagletron", "racoonman", "ninjacat", "robottron", "tigerbear", "wizardbot", "racoonbot", "piratecat",
  "ninjatron", "eaglebot", "tigerbot", "lionbot", "alienzilla", "joggercat", "robotdog", "wizardcat", "eaglezilla", "alienbot",
  "tigertron", "racooncat", "robotbear", "pirateman", "liontron", "joggerbot", "tigerzilla", "wizardman", "racoonbear", "eagleman",
  "alientron", "ninjadog", "racoontiger", "lionman", "alienbear", "robotman", "eaglebot", "joggerdog", "racoontron", "wizardbear",
  "ninjabear", "piratedog", "robottron", "eaglezilla", "aliencat", "tigerbear", "racoondog", "wizardtron", "robotcat", "liondog",
  "racoonman", "ninjacat", "alientron", "piratebear", "tigerbot", "lionbot", "wizardcat", "joggerbear", "robotdog", "piratecat",
  "lioncat", "racoonbear", "alienbot", "tigertron", "joggercat", "robotbear", "wizardbot", "pirateman", "liontron", "tigerzilla",
  "wizardman", "racooncat", "robotman", "eagletron", "joggerbot", "racoontron", "alienbear", "eagleman", "ninjadog", "eaglecat"
];

const tlds = [//solicitado a gpt 300 extensiones, han salido cosas muy raras
  "com", "net", "org", "info", "biz", "us", "co", "io", "me", "tv",
  "us", "uk", "fr", "de", "it", "es", "pt", "nl", "ru", "cn",
  "jp", "kr", "br", "ar", "mx", "ca", "au", "nz", "in", "id",
  "pl", "se", "no", "fi", "ch", "at", "be", "gr", "tr", "eg",
  "ae", "sa", "il", "za", "ng", "gh", "ke", "tn", "ma", "dz",
  "th", "sg", "my", "vn", "ph", "hk", "tw", "lk", "pk", "bd",
  "ir", "iq", "af", "np", "uz", "tm", "mn", "kz", "ge", "am",
  "by", "ua", "cz", "sk", "ro", "hu", "rs", "hr", "si", "bg",
  "ba", "me", "mk", "al", "lv", "lt", "ee", "md", "lu", "is",
  "io", "tv", "fm", "cc", "ai", "to", "ws", "bz", "vc", "gd",
  "asia", "cat", "eus", "gal", "london", "nyc", "bzh", "quebec",
  "scot", "wales", "tokyo", "bayern", "berlin", "hamburg", "kyoto",
  "miami", "rio", "saarland", "vlaanderen", "zuerich", "melbourne",
  "sydney", "africa", "istanbul", "capetown", "joburg", "durban",
  "tatar", "lat", "barcelona", "abudhabi", "doha", "nagoya", "okinawa",
  "osaka", "yokohama", "bcn", "boston", "quebec", "corsica",
  "edu", "gov", "mil", "int", "name", "pro", "museum", "coop", "aero", 
  "ibk", "svt", "xhi", "cmt", "yqe", "ukn", "czb", "gkm", "vaf", "meb",
  "ztq", "lij", "qkh", "rwa", "ygo", "wqb", "bem", "djp", "koe", "syv",
  "tno", "zqe", "xfl", "jvu", "hka", "oyd", "ump", "wzx", "pbl", "nux",
  "kvi", "nqj", "xtp", "dra", "vlt", "bzn", "ofx", "hdj", "cwi", "upm",
  "ezo", "jfr", "fya", "pwt", "kxg", "ltv", "amu", "egx", "zij", "rbo",
  "qvu", "wbm", "hvx", "rjc", "uak", "dvy", "sqe", "igc", "ukv", "gbi",
  "teq", "jbn", "wsy", "mcr", "lox", "qzd", "pvn", "yhf", "sgu", "njm",
  "ocv", "hma", "rpt", "fjn", "klg", "vfu", "dco", "swi", "mlb", "fqe",
  "zri", "qyn", "kbd", "xck", "qta", "vmi", "zkm", "fsv", "nju", "pcy",
  "tdf", "xow", "mnx", "kqg", "gvh", "rkn", "uqe", "joi", "wpt", "xhy",
  "kdv", "tcz", "bwe", "yjk", "zuw", "hrq", "ufo", "mic", "prj", "zle",
  "vwq", "cnz", "ogm", "txc", "yoi", "szf", "jgz", "mkx", "uak", "xzt",
  "fje", "dfc", "ovp", "rhz", "snp", "ynz", "kqe", "gct", "vij", "xtz",
  "uzl", "rpb", "nml", "bxy", "qia", "tph", "dwi", "sxk", "oqb", "znh",
  "kwz", "hfv", "vlq", "cyb", "zwo", "gaj", "myq", "hvk", "pqe", "ixz",
  "leb", "khq", "yvm", "qsd", "ptc", "moa", "keu", "ijz", "wuh", "nyl",
  "ylq", "smv", "hzn", "fub", "jpy", "otv", "wna", "boj", "kpx", "zfj",
  "qhv", "ojd", "snc", "wze", "tkg", "mco", "dnx", "oxu", "hyb", "pmi",
  "vce", "kzr", "uad", "pyq", "gnj", "wbz", "itf", "xru", "dbm", "acw",
  "zeh", "rgl", "qmc", "tdh", "wym", "ayb", "zvj", "xkp", "gbn", "lje",
  "cfk", "bta", "puz", "rmo", "ymx", "vzg", "hez", "wcx", "ndr", "syh",
  "jux", "gwl", "tvq", "uij", "mnv", "nzy", "bdq", "ajp", "kho", "zyq",
  "rjn", "mcw", "efz", "ytd", "pzv", "tzx", "ulc", "ebj", "qhr", "ghk",
  "fyx", "txg", "cmz", "rva", "jdp", "wnl", "ozg", "cbm", "vtq", "khz",
  "bcp", "nqu", "xym", "pqg", "nib", "wuq", "hoz", "rzi", "ftm", "ywv"
];
const colors = [
'#00bfff', '#198754', '#dc3545', '#ffc107', '#f8f9fa'
];
const bcolors = [
'btn-outline-primary', 'btn-outline-success', 'btn-outline-danger', 'btn-outline-warning', 'btn-outline-light'
];
let colorInd=0;
let rootElement = document.documentElement;
rootElement.style.setProperty("--color", colors[colorInd]);
colorInd++;
let b1 = document.getElementById('button1').classList 
let b2 = document.getElementById('button2').classList 
function createDomain() {
    let text =domainHack(addAleatory(pronoun)+addAleatory(adj)+addAleatory(noun));
}
function addAleatory(arr) {
    return arr[Math.floor(Math.random() *arr.length)];
}
function changeColor() {//¡¡Me ha llevado horas que tenga este efecto!!
    if (colorInd===0){
        rootElement.style.setProperty("--color", colors[colorInd]);
	b1.remove(bcolors[4]);
	b2.remove(bcolors[4]);
	b1.add(bcolors[colorInd]);
	b2.add(bcolors[colorInd]);
        colorInd++;
    }else if (colorInd===4){
        rootElement.style.setProperty("--color", colors[colorInd]);
	b1.remove(bcolors[3]);
	b2.remove(bcolors[3]);
	b1.add(bcolors[colorInd]);
	b2.add(bcolors[colorInd]);
        colorInd=colorInd-4;
    }else{
        rootElement.style.setProperty("--color", colors[colorInd]);
	b1.remove(bcolors[colorInd-1]);
	b2.remove(bcolors[colorInd-1]);
	b1.add(bcolors[colorInd]);
	b2.add(bcolors[colorInd]);
	colorInd++;
    }
}
function domainHack(wor) {
    let con = '';
    for (let i = 0; i < tlds.length; i++) {
        if (wor.endsWith(tlds[i])) {
            con=wor.slice(0, wor.length - tlds[i].length)+ '.' + tlds[i];
            document.getElementById("generated-outline").innerText = con;
            document.getElementById("generated-fill").innerText = con;
            return con;
        }
    }
    con = wor+'.'+addAleatory(tlds); 
    document.getElementById("generated-outline").innerText = con;
    document.getElementById("generated-fill").innerText = con;
    return con;
}
createDomain();