const a = [347, 350, 352, 354, 356, 0, 0, 0, 0, 0, ];
const b = [340, 350, 0, 10, ]; // 0, 0, 0, 0, 0, 0,

let aver = 0;
let aver_c;
let aver_s;
let sum_sin = 0;
let sum_cos = 0;
let mid;

const weight = [0.004, 0.003, 0.003, 0.99, ];
const sum_wei = weight.reduce((a, b) => a + b, 0);

for (let i = 0; i < b.length; i++) {
  mid = b[i] * Math.PI / 180;
  sum_sin += Math.sin(mid) * weight[i];
  sum_cos += Math.cos(mid) * weight[i];
}

aver_s = sum_sin / sum_wei;
aver_c = sum_cos / sum_wei;

if (aver_c < 0) {
  aver = Math.atan(aver_s / aver_c) * 180 / Math.PI + 180;
} else if (aver_s > 0) {
  aver = Math.atan(aver_s / aver_c) * 180 / Math.PI;
} else if (aver_s <= 0) {
  aver = Math.atan(aver_s / aver_c) * 180 / Math.PI + 360;
}

console.log(aver);





const angles = [340, 350, 0, 10, ];
const weights = [0.004, 0.003, 0.003, 0.99, ];

const toDegrees = (angle) => {
  return angle * (180 / Math.PI);
};

const toRadians = (angle) => {
  return angle * (Math.PI / 180);
};

const angleWeightedAverage = (angles, weights) => {
  if (angles.length !== weights.length) throw new Error('Angles and weights must correspond with each other with the same array length.');
  let sumSin = 0;
  let sumCos = 0;

  angles.forEach((angle, index) => {
    const angleRadian = toRadians(angle);
    sumSin += Math.sin(angleRadian) * weights[index];
    sumCos += Math.cos(angleRadian) * weights[index];
  });

  const sumWeights = weights.reduce((a, b) => a + b, 0);

  const avgSin = sumSin / sumWeights;
  const avgCos = sumCos / sumWeights;

  if (avgCos < 0) return toDegrees(Math.atan(avgSin / avgCos)) + 180;
  else if (avgSin > 0) return toDegrees(Math.atan(avgSin / avgCos));
  else if (avgSin <= 0) return toDegrees(Math.atan(avgSin / avgCos)) + 360;
};

console.log(angleWeightedAverage(angles, weights));
