const path = require('path');

module.exports = {
	params: ({ args }) => {
		const component = path.parse(args.name).name;
		return { ...args, component };
	},
};
