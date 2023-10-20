// crée Math.seedrandom()
!function (f, a, c) {
    var s, l = 256, p = "random", d = c.pow(l, 6), g = c.pow(2, 52), y = 2 * g, h = l - 1;
    function n(n, t, r) {
        function e() { for (var n = u.g(6), t = d, r = 0; n < g;)n = (n + r) * l, t *= l, r = u.g(1); for (; y <= n;)n /= 2, t /= 2, r >>>= 1; return (n + r) / t } var o = [], i = j(function n(t, r) { var e, o = [], i = typeof t; if (r && "object" == i) for (e in t) try { o.push(n(t[e], r - 1)) } catch (n) { } return o.length ? o : "string" == i ? t : t + "\0" }((t = 1 == t ? { entropy: !0 } : t || {}).entropy ? [n, S(a)] : null == n ? function () { try { var n; return s && (n = s.randomBytes) ? n = n(l) : (n = new Uint8Array(l), (f.crypto || f.msCrypto).getRandomValues(n)), S(n) } catch (n) { var t = f.navigator, r = t && t.plugins; return [+new Date, f, r, f.screen, S(a)] } }() : n, 3), o), u = new m(o); return e.int32 = function () { return 0 | u.g(4) }, e.quick = function () { return u.g(4) / 4294967296 }, e.double = e, j(S(u.S), a), (t.pass || r || function (n, t, r, e) { return e && (e.S && v(e, u), n.state = function () { return v(u, {}) }), r ? (c[p] = n, t) : n })(e, i, "global" in t ? t.global : this == c, t.state)
    } function m(n) { var t, r = n.length, u = this, e = 0, o = u.i = u.j = 0, i = u.S = []; for (r || (n = [r++]); e < l;)i[e] = e++; for (e = 0; e < l; e++)i[e] = i[o = h & o + n[e % r] + (t = i[e])], i[o] = t; (u.g = function (n) { for (var t, r = 0, e = u.i, o = u.j, i = u.S; n--;)t = i[e = h & e + 1], r = r * l + i[h & (i[e] = i[o = h & o + t]) + (i[o] = t)]; return u.i = e, u.j = o, r })(l) } function v(n, t) { return t.i = n.i, t.j = n.j, t.S = n.S.slice(), t } function j(n, t) { for (var r, e = n + "", o = 0; o < e.length;)t[h & o] = h & (r ^= 19 * t[h & o]) + e.charCodeAt(o++); return S(t) } function S(n) { return String.fromCharCode.apply(0, n) } if (j(c.random(), a), "object" == typeof module && module.exports) { module.exports = n; try { s = require("crypto") } catch (n) { } } else "function" == typeof define && define.amd ? define(function () { return n }) : c["seed" + p] = n
}("undefined" != typeof self ? self : this, [], Math);

function generateRandomNumber(seed) {
    const rng = new Math.seedrandom(seed);
    return rng();
}

async function sha512(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-512", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
    return hashHex;
}

const hexaLowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]
const hexaUpperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]
const symbols = [
    '$',
    '*',
    '%'
]
let arrayV2 = []

function randomBySeedAndUpdateArrayV2(hashValue) {
    let seedA = hashValue.slice(0, 32);
    let seedB = hashValue.slice(32, 64);
    let seedC = hashValue.slice(64, 96);
    let seedD = hashValue.slice(96, 128);
    let randomIndexA = Math.floor(generateRandomNumber(seedA) * hexaLowerCase.length);
    let randomIndexB = Math.floor(generateRandomNumber(seedB) * hexaUpperCase.length);
    let randomIndexC = Math.floor(generateRandomNumber(seedC) * symbols.length);
    let randomIndexD = Math.floor(generateRandomNumber(seedD) * 10);
    const arrayBuffer = [hexaLowerCase[randomIndexA], hexaUpperCase[randomIndexB], symbols[randomIndexC], randomIndexD.toString(10)]

    seedA = hashValue.slice(0, 16);
    seedB = hashValue.slice(16, 32);
    seedC = hashValue.slice(32, 48);
    const arrayBuffer2 = []
    let randomIndexE = Math.floor(generateRandomNumber(seedA) * arrayBuffer.length);
    arrayBuffer2.push(arrayBuffer.splice(randomIndexE, 1)[0])
    randomIndexE = Math.floor(generateRandomNumber(seedB) * arrayBuffer.length);
    arrayBuffer2.push(arrayBuffer.splice(randomIndexE, 1)[0])
    randomIndexE = Math.floor(generateRandomNumber(seedC) * arrayBuffer.length);
    arrayBuffer2.push(arrayBuffer.splice(randomIndexE, 1)[0])
    arrayBuffer2.push(arrayBuffer.pop())

    arrayV2.push(arrayBuffer2.join(''))
}

async function updateArrayV2(keyText) {
    try {
        const iterations = 128;
        arrayV2 = []
        for (let i = 0; i < iterations; i++) {
            const hash = await sha512(keyText);
            randomBySeedAndUpdateArrayV2(hash)
            keyText += arrayV2[arrayV2.length - 1]
        }
    } catch (error) { console.error(error); }
}

const MINIMUM_COUNT_NUMBER = 16 // warning do not go below 16
const MAXIMUM_COUNT_NUMBER = 64 // warning do not go up than 128

function changePassword() {

    var keyField = document.getElementById("keyPass");
    let keyText = keyField.value
    var passwordField = document.getElementById("password");
    var countNumberField = document.getElementById("countNumber");
    var passwordResultField = document.getElementById("passwordResult");

    updateArrayV2(keyText).then(_ => {

        var newPassword = ""
        for (let index = 0; index < passwordField.value.length; index++) {
            newPassword += passwordField.value[index] + arrayV2[passwordField.value.charCodeAt(index) % arrayV2.length];
        }
        const inputString = newPassword;

        // CONSOLE:
        console.log("keyArray created according the secret-key: ", arrayV2)
        console.log("initial-password: ", passwordField.value)
        console.log("text mixed with keyArray: ", inputString)

        sha512(inputString)
            .then(hash => {
                const salt = (arrayV2[newPassword.charCodeAt(0) % arrayV2.length] !== undefined) ? arrayV2[newPassword.charCodeAt(0) % arrayV2.length] : "Emp$y"
                passwordResultField.value = hash.slice(0, 10) + salt + hash.slice(10, countNumberField.value - salt.length)

                // CONSOLE:
                console.log("hashresult: ", hash)
                console.log(`introducing a salt = '${salt}' in truncate hash for final result`)
                console.log(" ")
            })
            .catch(error => console.error(error))

    })
    // coco

}

function validateInput(input) {
    if (input.value < MINIMUM_COUNT_NUMBER) {
        input.value = MINIMUM_COUNT_NUMBER
    } else if (input.value > MAXIMUM_COUNT_NUMBER) {
        input.value = MAXIMUM_COUNT_NUMBER
    }
}

function selectAllText(input) {
    input.select()
}
