import React from 'react';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, any> {
    public render() {
        return <div className='container-fluid'>
            { this.props.children }
        </div>;
    }
}