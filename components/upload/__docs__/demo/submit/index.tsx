import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload, Button, Icon } from '@alifd/next';

class App extends React.Component {
    saveUploaderRef = ref => {
        if (!ref) return;
        this.uploaderRef = ref.getInstance();
    };

    onSubmit = () => {
        this.uploaderRef.startUpload();
    };
    beforeUpload(info, options) {
        console.log('beforeUpload callback : ', info, options);
        return options;
    }
    render() {
        return (
            <div>
                <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    autoUpload={false}
                    ref={this.saveUploaderRef}
                    listType="image"
                    beforeUpload={this.beforeUpload}
                    useDataURL
                >
                    <Button style={{ marginBottom: 8 }}>
                        <Icon type="upload" />
                        Select File
                    </Button>
                </Upload>
                <br />
                <Button type="primary" onClick={this.onSubmit}>
                    Upload
                </Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
