import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tree } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                    },
                    {
                        label: 'Select',
                        key: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                key: '3',
                children: [
                    {
                        label: 'Table',
                        key: '6',
                    },
                ],
            },
        ],
    },
];

class Demo extends React.Component {
    onSelect(keys, info) {
        console.log('onSelect', keys, info);
    }

    onCheck(keys, info) {
        console.log('onCheck', keys, info);
    }

    onEditFinish(key, label, node) {
        console.log('onEditFinish', key, label, node);
    }

    onRightClick(info) {
        console.log('onRightClick', info);
    }

    render() {
        return (
            <Tree
                checkable
                editable
                defaultExpandedKeys={['2']}
                defaultCheckedKeys={['2', '4', '5']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
                onEditFinish={this.onEditFinish}
                onRightClick={this.onRightClick}
                dataSource={data}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
