import React from 'react';
import MaterialButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import clsx from 'clsx'

export const NAME = 'basicButton'

const Wrapper = styled(MaterialButton)`
`;


const Button = ({children,className,...rest}) => {
return <Wrapper data-testid={NAME} className={clsx(NAME,className)} {...rest}>{children}</Wrapper>;
};

export default Button;
