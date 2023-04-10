import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

function MyDocument() {
    return (
        <Document>
            <Page>
                <Text style={{ fontSize: 24, marginBottom: 10 }}>Mi primer documento PDF</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa in tellus commodo consectetur.
                    Praesent sit amet nisi at elit iaculis bibendum. Suspendisse volutpat eros eget arcu vestibulum feugiat.
                    Nullam ultricies auctor ipsum id pulvinar.
                </Text>
            </Page>
        </Document>
    );
}

export default MyDocument;
