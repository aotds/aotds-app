import { map_scale } from '../utils';

const arcToAngleRange = {
	F: [-1, 1],
	FS: [1, 3],
	AS: [3, 5],
	A: [5, 7],
	AP: [-5, -3],
	FP: [-3, -1],
};

export function plotArc(arc, radius) {
	const [startAngle, endAngle] = arcToAngleRange[arc];
	const start = polarToCartesian(endAngle, radius);
	const end = polarToCartesian(startAngle, radius);

	const zs = polarToCartesian(endAngle, 0);
	const ze = polarToCartesian(startAngle, 0);

	const arcSweep = endAngle - startAngle <= 6 ? '0' : '1';

	return [
		'M',
		zs.x,
		zs.y,
		'L',
		start.x,
		start.y,
		'A',
		radius,
		radius,
		0,
		arcSweep,
		0,
		end.x,
		end.y,
		'L',
		ze.x,
		ze.y,
		'A',
		map_scale(1),
		map_scale(1),
		0,
		arcSweep,
		1,
		zs.x,
		zs.y,
	].join(' ');
}

export function polarToCartesian(angle, radius) {
	const angleInRadians = ((angle - 3) * Math.PI) / 6.0;

	return {
		x: radius * Math.cos(angleInRadians),
		y: radius * Math.sin(angleInRadians),
	};
}
