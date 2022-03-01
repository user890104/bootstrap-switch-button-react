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

const BootstrapSwitchButton = (props) => {
	const [checked, setChecked] = useState(typeof props.checked === 'boolean' ? props.checked : false);
	const [disabled, setDisabled] = useState(typeof props.disabled === 'boolean' ? props.disabled : false);
	const onlabel = props.onlabel || 'On';
	const offlabel = props.offlabel || 'Off';
	const onstyle = props.onstyle || 'primary';
	const offstyle = props.offstyle || 'light';
	const size = props.size || '';
	const className = props.className || '';
	const width = props.width || null;
	const height = props.height || null;

	useEffect(() => {
		if (props.checked !== checked) {
			setChecked(props.checked);
		}
	}, [props.checked]);

	useEffect(() => {
		if (props.disabled !== disabled) {
			setDisabled(props.disabled);
		}
	}, [props.disabled]);

	const toggle = event => {
		checked ? off() : on();
		event.stopPropagation();
	};

	const off = () => {
		if (!disabled) {
			setChecked(false);
			if (props.onChange) props.onChange(false);
		}
	};

	const on = () => {
		if (!disabled) {
			setChecked(true);
			if (props.onChange) props.onChange(true);
		}
	};

	let switchStyle = {};
	if (width) switchStyle.width = width + 'px';
	if (height) switchStyle.height = height + 'px';

	let labelStyle = {};
	if (height) labelStyle.lineHeight = 'calc(' + height + 'px * 0.8)';

	return (
		<div
			className={classNames(
				'switch btn',
				(checked ? 'on btn-' + onstyle : 'off btn-' + offstyle),
				(size ? ' btn-' + size : ''),
				className || ''
			)}
			style={switchStyle}
			onClick={toggle}
		>
			<div className="switch-group">
				<span
					className={classNames(
						'switch-on btn',
						'btn-' + onstyle,
						(size ? ' btn-' + size : '')
					)}
					style={labelStyle}
				>
					{onlabel}
				</span>
				<span
					className={classNames(
						'switch-off btn',
						'btn-' + offstyle,
						(size ? ' btn-' + size : '')
					)}
					style={labelStyle}
				>
					{offlabel}
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
}

export default BootstrapSwitchButton;
