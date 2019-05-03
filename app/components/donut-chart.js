import Component from '@ember/component';
import { computed } from '@ember/object';
import { map, sum } from '@ember/object/computed';

export default Component.extend({
  cx: 80,
  cy: 80,
  radius: 60,
  angleOffset: -90,

  offset: computed('segments', function() {
    return {
      0: calcStrokeDashoffset(this.ratios[0], this.circumference),
      1: calcStrokeDashoffset(this.ratios[1], this.circumference),
      2: calcStrokeDashoffset(this.ratios[2], this.circumference),
      3: calcStrokeDashoffset(this.ratios[3], this.circumference),
      4: calcStrokeDashoffset(this.ratios[4], this.circumference),
    }
  }),

  transform: computed('segments', function() {
    return {
      0: this.degrees[0],
      1: this.degrees[1],
      2: this.degrees[2],
      3: this.degrees[3],
      4: this.degrees[4],
    }
  }),

  textX: computed('segments', function() {
    return {
      0: this.labelX[0],
      1: this.labelX[1],
      2: this.labelX[2],
      3: this.labelX[3],
      4: this.labelX[4],
    }
  }),
  textY: computed('segments', function() {
    return {
      0: this.labelY[0],
      1: this.labelY[1],
      2: this.labelY[2],
      3: this.labelY[3],
      4: this.labelY[4],
    }
  }),
  text: computed('segments', function() {
    return {
      0: this.labels[0],
      1: this.labels[1],
      2: this.labels[2],
      3: this.labels[3],
      4: this.labels[4],
    }
  }),

  labelX: map('ratios', function(ratio, index) {
    let angle = ratio * 360 / 2 + this.degrees[index];
    let radians = degreesToRadians(angle);
    return this.radius * Math.cos(radians) + this.cx;
  }),
  labelY: map('ratios', function(ratio, index) {
    let angle = ratio * 360 / 2 + this.degrees[index];
    let radians = degreesToRadians(angle);
    return this.radius * Math.sin(radians) + this.cy;
  }),
  labels: map('ratios', function(ratio) {
    return percentageLabel(ratio)
  }),

  degrees: map('ratios', function(ratio) {
    let angle = this.angleOffset;
    this.angleOffset = ratio * 360 + angle;
    return angle;
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

  circumference: computed('radius', function() {
    return 2 * Math.PI * this.radius
  }),

  stroke: computed('radius', function() {
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

function  calcStrokeDashoffset(ratio, circumference) {
  let strokeDiff = ratio * circumference;
  return circumference - strokeDiff;
}

function degreesToRadians(angle) {
    return angle * (Math.PI / 180)
}

function percentageLabel(ratio) {
  return `${Math.round(ratio * 100)}%`
}
