const a = [0, 5, 30, 50, 70, 90, 120, 150, 180, 210, 270, 305, 345, 359, ];
const b = 180; // single degree

let i;
for (i = 0; i < a.length; i++) {
  a[i] = a[i] - b;
  if (a[i] > 180) {
    a[i] = 360 - a[i];
  } else if (a[i] < 0) {
    a[i] = -a[i];
  }
  if (i != 13) {
    console.log(a[i]);
  } else {
    console.log(a[i]);
  }
}

// results
// 180, 175, 150, 130, 110, 90, 60, 30, 0, 30, 90, 125, 165, 179

const angles = [0, 5, 30, 50, 70, 90, 120, 150, 180, 210, 270, 305, 345, 359, ];
const targetAngle = 180;

const angleDistances = (angles, targetAngle) => {
  // rotate unit circle so that targetAngle is 0
  angles = angles.map(angle => angle - targetAngle);
  // degree distance
  const distance = angles.map(angle => {
    if (angle > 180) return 360 - angle; // reflex angle 180 < x < 360
    else if (angle < 0) return -angle; // absolute of angle for positive angle
    else return angle; // angle 0 < x < 180
  });
  return distance;
};

const angleDistance = (angle, targetAngle) => {
  // rotate unit circle so that targetAngle is 0
  angle = angle - targetAngle;

  let distance;
  if (angle > 180) distance = 360 - angle; // reflex angle 180 < x < 360
  else if (angle < 0) distance = -angle; // absolute of angle for positive angle
  else distance = angle; // angle 0 < x < 180

  return distance;
};

console.log(angleDistances(angles, targetAngle));
console.log(angleDistance(305, targetAngle));
