import svgPanZoom from 'svg-pan-zoom';

export default function (node) {
	let pan = svgPanZoom(node, {
		zoomEnabled: true,
		controlIconsEnabled: true,
		contains: true,
	});

	return () => {
		pan.destroy();
	};
}
