import cn from 'classnames';

export default function classNames(...args) {
	return { className: cn(...args) };
}
