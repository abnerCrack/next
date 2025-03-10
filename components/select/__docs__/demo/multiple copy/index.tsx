import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Select } from '@alifd/next';

const dataSource = [
    { value: '10001', label: 'Lucy King' },
    { value: 10002, label: 'Lily King' },
    { value: 10003, label: 'Tom Cat', disabled: true },
    {
        label: 'Special Group',
        children: [
            { value: -1, label: 'FALSE' },
            { value: 0, label: 'ZERO' },
        ],
    },
];

function handleChange(value) {
    console.log(value);
}

ReactDOM.render(
    <div>
        <Select
            cacheValue={false}
            showSearch
            defaultValue={'sss'}
            onChange={handleChange}
            dataSource={dataSource}
            style={{ width: 300, marginRight: 8 }}
        />
    </div>,
    mountNode
);
