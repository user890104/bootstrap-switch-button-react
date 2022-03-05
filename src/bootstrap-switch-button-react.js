/*\
|*|  :: Bootstrap Switch Button ::
|*|
|*|  Bootstrap Switch Button (React)
|*|  https://github.com/gitbrent/bootstrap-switch-button-react
|*|
|*|  This library is released under the MIT Public License (MIT)
|*|
|*|  Bootstrap Switch Button (C) 2019-present Brent Ely (https://github.com/gitbrent)
|*|
|*|  Permission is hereby granted, free of charge, to any person obtaining a copy
|*|  of this software and associated documentation files (the "Software"), to deal
|*|  in the Software without restriction, including without limitation the rights
|*|  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
|*|  copies of the Software, and to permit persons to whom the Software is
|*|  furnished to do so, subject to the following conditions:
|*|
|*|  The above copyright notice and this permission notice shall be included in all
|*|  copies or substantial portions of the Software.
|*|
|*|  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
|*|  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
|*|  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
|*|  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
|*|  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
|*|  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
|*|  SOFTWARE.
\*/

import React, {useEffect, useState} from 'react';
import './style.css';
import classNames from "classnames";

const BootstrapSwitchButton = ({
	checked: defaultChecked,
	onChange,
	disabled,
	labelOn,
	labelOff,
	styleOn,
	styleOff,
	size,
	className,
	width,
	height,
}) => {
	const [checked, setChecked] = useState(defaultChecked);

	useEffect(() => {
		setChecked(defaultChecked);
	}, [defaultChecked]);

	const toggle = event => {
		if (!disabled) {
			const newState = !checked;

			setChecked(newState);
			onChange(newState);
		}

		event.stopPropagation();
	};

	let switchStyle = {};
	if (width) {
		switchStyle.width = width + 'px';
	}
	if (height) {
		switchStyle.height = height + 'px';
	}

	let labelStyle = {};
	if (height) {
		labelStyle.lineHeight = 'calc(' + height + 'px * 0.8)';
	}

	return (
		<div
			className={classNames(
				'switch btn',
				(checked ? 'on btn-' + styleOn : 'off btn-' + styleOff),
				(size ? 'btn-' + size : ''),
				className || ''
			)}
			style={switchStyle}
			onClick={toggle}
		>
			<div className="switch-group">
				<span
					className={classNames(
						'switch-on btn',
						'btn-' + styleOn,
						(size ? 'btn-' + size : '')
					)}
					style={labelStyle}
				>
					{labelOn}
				</span>
				<span
					className={classNames(
						'switch-off btn',
						'btn-' + styleOff,
						(size ? 'btn-' + size : '')
					)}
					style={labelStyle}
				>
					{labelOff}
				</span>
				<span
					className={classNames(
						'switch-handle btn btn-light',
						(size ? 'btn-' + size : '')
					)}
				/>
			</div>
		</div>
	);
};

BootstrapSwitchButton.defaultProps = {
	checked: false,
	onChange: () => {},
	disabled: false,
	labelOn: 'On',
	labelOff: 'Off',
	styleOn: 'primary',
	styleOff: 'light',
	className: '',
};

export default BootstrapSwitchButton;
