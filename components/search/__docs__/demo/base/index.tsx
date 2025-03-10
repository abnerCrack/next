import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Search } from '@alifd/next';

function onSearch(v) {
    console.log(v);
}
const App = () => [
    <p key="1">simple</p>,
    <Search key="2" shape="simple" onSearch={onSearch} style={{ width: '400px' }} />,
    <p key="3">default</p>,
    <Search key="4" onSearch={onSearch} style={{ width: '400px' }} />,
    <p key="5">custom text </p>,
    <Search key="6" searchText="search" onSearch={onSearch} style={{ width: '400px' }} />,
    <p key="7">custom text widthout icon</p>,
    <Search
        key="8"
        hasIcon={false}
        searchText={<span style={{ color: 'blue' }}>search</span>}
        onSearch={onSearch}
        style={{ width: '400px' }}
    />,
];

ReactDOM.render(<App />, mountNode);
