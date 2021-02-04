const arcToAngleRange = {
  F: [-1, 1],
  FS: [1, 3],
  AS: [3, 5],
  A: [5, 6],
  AP: [-5, -3],
  FP: [-3, -1],
};

export function plotArc(arc, radius) {
  const [startAngle, endAngle] = arcToAngleRange[arc];
  const start = polarToCartesian(endAngle, radius);
  const end = polarToCartesian(startAngle, radius);

  const arcSweep = endAngle - startAngle <= 6 ? "0" : "1";

  return [
    "M",
    0,
    0,
    "L",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    arcSweep,
    0,
    end.x,
    end.y,
    "L",
    0,
    0,
  ].join(" ");
}

export function polarToCartesian(angle, radius) {
  const angleInRadians = ((angle - 3) * Math.PI) / 6.0;

  return {
    x: radius * Math.cos(angleInRadians),
    y: radius * Math.sin(angleInRadians),
  };
}
