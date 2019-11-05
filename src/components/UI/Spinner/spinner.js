import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader, PulseLoader, SyncLoader } from 'react-spinners';

const spinner = (props) => {
    return <ClipLoader
        sizeUnit={"px"}
        size={13}
        color={'white'}
        loading={props.isLoading}
      />
}
export default spinner;