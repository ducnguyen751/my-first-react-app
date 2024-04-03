// CKEditorComponent.js
import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import Link from '@ckeditor/ckeditor5-link/src/link';

const CKEditorComponent = ({ data, onDataChange }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                plugins: [Image, Link],
                toolbar: ['imageUpload', '|', 'bold', 'italic', 'link']
            }}
            data={data}
            onChange={(event, editor) => {
                const newData = editor.getData();
                onDataChange(newData);
            }}
        />
    );
};

export default CKEditorComponent;
