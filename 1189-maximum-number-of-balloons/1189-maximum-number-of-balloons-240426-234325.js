/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {};

    for (let i = 0; i < text.length; i++) {
      if (map[text[i]]) {
        map[text[i]]++;
      } else {
        map[text[i]] = 1;
      }
    }

    const b = map.b ?? 0;
    const a = map.a ?? 0;
    const l = map.l ? Math.floor(map.l / 2) : 0;
    const o = map.o ? Math.floor(map.o / 2) : 0;
    const n = map.n ?? 0;

    if (b && a && l && o && n) {
      return Math.min(b, a, l, o, n);
    }

    return 0;
};