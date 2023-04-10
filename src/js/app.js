import React from 'react';
import { Document, Page, Text, pdf } from '@react-pdf/renderer';
import MyDocument from './component/MyDocument.jsx';

function App() {
    const generatePdf = async () => {
        const doc = (
            <Document>
                <Page>
                    <MyDocument/>
                </Page>
            </Document>
        );
        const pdfBlob = await pdf(doc).toBlob();
        const url = URL.createObjectURL(pdfBlob);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={generatePdf}>Generar PDF</button>
            </header>
        </div>
    );
}

export default App;









