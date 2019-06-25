// [347, 350, 352, 354, 356, 0, 0, 0, 0, 0, ]
// result 355.903214

// [352, 350, 0, 0, 0, 0, 0, 0, 0, 0,]

const a = [347, 350, 352, 354, 356, 0, 0, 0, 0, 0,];
const b = [270, 280, 290, 300, ]; // 0, 0, 0, 0, 0, 0,

let aver = 0;
let aver_c;
let aver_s;
let sum_sin = 0;
let sum_cos = 0;
let mid;

for (let i = 0; i < b.length; i++) {
  mid = b[i] * Math.PI / 180;
  sum_sin += Math.sin(mid);
  sum_cos += Math.cos(mid);
}

aver_s = sum_sin / b.length;
aver_c = sum_cos / b.length;

if (aver_c < 0) {
  aver = Math.atan(aver_s / aver_c) * 180 / Math.PI + 180;
} else if (aver_s > 0) {
  aver = Math.atan(aver_s / aver_c) * 180 / Math.PI;
} else if (aver_s <= 0) {
  aver = Math.atan(aver_s / aver_c) * 180 / Math.PI + 360;
}

console.log(aver);




const angles = [270, 280, 290, 300, ];

const toDegrees = (angle) => {
  return angle * (180 / Math.PI);
};

const toRadians = (angle) => {
  return angle * (Math.PI / 180);
};

const angleAverage = (angles) => {
  let sumSin = 0;
  let sumCos = 0;

  angles.forEach(angle => {
    const angleRadian = toRadians(angle);
    sumSin += Math.sin(angleRadian);
    sumCos += Math.cos(angleRadian);
  });

  const avgSin = sumSin / angles.length;
  const avgCos = sumCos / angles.length;

  if (avgCos < 0) return toDegrees(Math.atan(avgSin / avgCos)) + 180;
  else if (avgSin > 0) return toDegrees(Math.atan(avgSin / avgCos));
  else if (avgSin <= 0) return toDegrees(Math.atan(avgSin / avgCos)) + 360;
};

console.log(angleAverage(angles));
