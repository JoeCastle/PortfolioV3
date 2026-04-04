import { ReportHandler } from 'web-vitals';

/**
 * Registers web-vitals metric callbacks when a report handler is supplied.
 * @param onPerfEntry Optional callback invoked for each captured web-vitals metric.
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
