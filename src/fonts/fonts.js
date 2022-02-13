import { createGlobalStyle } from 'styled-components';

import TitilliumWebBlack from './Titillium_Web/TitilliumWeb-Black.ttf';
import TitilliumWebBold from './Titillium_Web/TitilliumWeb-Bold.ttf';
import TitilliumWebLight from './Titillium_Web/TitilliumWeb-Light.ttf';
import TitilliumWeb from './Titillium_Web/TitilliumWeb-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${TitilliumWebBlack}) format('ttf'),
        url(${TitilliumWebBold}) format('ttf'),
        url(${TitilliumWebLight}) format('ttf'),
        url(${TitilliumWeb}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;