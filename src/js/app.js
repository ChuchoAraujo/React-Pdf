import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './component/MyDocument.jsx';

function App() {
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }} scale={1.5}>
            <MyDocument />
        </PDFViewer>
    );
}

export default App;
