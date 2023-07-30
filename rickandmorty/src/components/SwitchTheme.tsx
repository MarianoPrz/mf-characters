import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
	z-index: 0;
	position: relative;
	display: inline-block;
	
	/* Hover */
	
	&:hover{
		input {
			opacity: .08;
		}
		input:focus {
			opacity: .18;
		}
		input:focus{
			opacity: .2;
		}
	}
`
const SwitchInput = styled.input`
	appearance: none;
	z-index: -1;
	position: absolute;
	right: 4px;
	top: -10px;
	display: block;
	margin: 0;
	background-color: #151a20;
	outline: none;
	transform: scale(1);
	pointer-events: none;
	border-radius: 50%;
	width: 45px;
	height: 45px;
	opacity: 0;
	transition: opacity 0.3s, transform 0.2s;
	&:checked {
		right: -14px;
		background-color: hsl(354deg 93% 30%);
	}
	&:checked + span::after {
		background-color: hsl(354deg 94% 50%);
		transform: translateX(16px);
	}
	&:checked + span::before {
		background-color: hsl(354deg 93% 30%);
	}

	
	&:active {
		opacity:1;
		transform: scale(0);
		transition: transform 0s, opacity 0s;
	}
	&:active + span::before {
		background-color: hsl(354deg 93% 30%);
	}
	&:active + span::before {
		background-color: hsl(354deg 94% 50%);
	}

	/* Disabled */
	&:disabled {
		opacity: 0;
	}
	&:disabled + span{
		color: hsl(184, 64%, 46%);
		opacity: .70;
		cursor: default;
	}
	&:disabled + span::before {
		background-color: #343a4060 !important;
	}
	&:disabled + span::before {
		background-color: #343a4060 !important;
	}
	
`
const SwitchInner = styled.span`
	display: inline-block;
	width: 100%;
	font-weight: 500;
	cursor: pointer;
	&::before {
		content: "";
		/* float: right; */
		display: inline-block;
		margin: 5px 0 5px 15px;
		border-radius: 7px;
		width: 36px;
		height: 14px;
		background-color: rgb(173, 181, 189);
		vertical-align: top;
		transition: background-color 0.2s, opacity 0.2s;
	}
	&::after {
		content: "";
		position: absolute;
		top: 2px;
		right: 1rem;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		background-color: white;
		box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
		transition: background-color 0.2s, transform 0.2s;
	}
`

const SwitchTheme: React.FC<{ onChange: () => void }> = ({ onChange }) => {
    return (
        <SwitchLabel>
            <SwitchInput onChange={onChange} type="checkbox" data-testid="switch-input" />
            <SwitchInner></SwitchInner>
        </SwitchLabel>
    )
}

export default SwitchTheme;