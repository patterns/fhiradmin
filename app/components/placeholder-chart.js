import Component from '@ember/component';
import { computed } from '@ember/object';
import { map, sum } from '@ember/object/computed';

// Rudimentary (axes and pronounced markers) to show something reasonable.
export default Component.extend({
  margin: 5,
  travel: 10,
  points: computed('segments', function() {
    return {
      0: this.bars[0],
      1: this.bars[1],
      2: this.bars[2],
      3: this.bars[3],
      4: this.bars[4],
    }
  }),

  bars: map('ratios', function(ratio, index) {
    let y = 100 - this.margin - Math.round(ratio * 100);
    if (y > (99 - this.margin)) {
      // below viewbox, show as height "zero"
      y = 99 - this.margin;
    }
    let offset = (index * 20) + this.margin;
    // todo draw different shapes for the markers
    ////return `${offset},120  ${offset},${y}  ${offset + 10},${y}  ${offset + 10},120`
    return ` ${offset},${y}  ${offset + this.travel},${y} `
  }),

  ratios: map('counts', function(count) {
    return count / this.dataTotal
  }),

  counts: map('segments', function(seg) {
    let val = parseInt(seg.count, 10);
    if (isNaN(val)) { return 0; }
    return val;
  }),

  dataTotal: sum('counts'),

  stroke: computed('segments', function() {
    return {
      0: "#96CCFF",
      1: "#FFDFDF",
      2: "#FBF1A9",
      3: "#A463F2",
      4: "#FFA3D7",
      5: "#9EEBCF",
    }
  })
});
