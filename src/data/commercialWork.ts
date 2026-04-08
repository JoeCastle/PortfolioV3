export interface ICommercialWorkItem {
    title: string;
    summary: string;
    impactBullets: string[];
    stack: string;
    focusTags: string[];
}

const commercialWork: ICommercialWorkItem[] = [
    {
        title: 'Construction Project Management Platform',
        summary:
            'A large-scale internal platform used daily to manage construction projects, financial workflows, approvals, reporting, and operational processes across multiple teams and long-running projects.',
        impactBullets: [
            'Owned and evolved a core business system over multiple years, delivering full-stack features across React, TypeScript, .NET, and SQL Server to support complex operational and financial workflows.',
            'Designed and implemented role-based approval workflows for purchase orders, variations, and invoices, improving financial control and reducing manual coordination.',
            'Reduced slow reporting and data-processing paths by restructuring queries and applying targeted optimisations in performance-critical areas.',
        ],
        stack: 'React, TypeScript, MobX, .NET, SQL Server, Azure',
        focusTags: ['Full-Stack Delivery', 'System Ownership', 'Financial Workflows', 'SQL Performance', 'Stakeholder Collaboration'],
    },
    {
        title: 'Housing Development & Sales Management System',
        summary:
            'An end-to-end business platform for managing property construction, reservations, sales progress, customer data, and aftercare across multiple housing developments.',
        impactBullets: [
            'Designed and delivered full-stack features supporting the full lifecycle from construction through to sale and aftercare across multiple projects.',
            'Consolidated fragmented business processes into a structured system, improving visibility and reducing reliance on disconnected manual workflows.',
            'Designed and maintained data models handling complex relationships between developments, plots, reservations, contacts, and customer data.',
        ],
        stack: 'React, TypeScript, MobX, .NET, SQL Server, Azure',
        focusTags: ['Business Systems', 'Domain Modelling', 'Full-Stack Delivery', 'Maintainability', 'Operational Efficiency'],
    },
    {
        title: 'Customer Portal for Property Sales & Aftercare',
        summary:
            'A customer-facing portal enabling buyers to track property progress, receive updates, and manage snagging without relying on sales teams for day-to-day communication.',
        impactBullets: [
            'Delivered customer-facing features that surfaced property and sales progress in a clearer and more accessible way.',
            'Built workflows for submitting and managing snags, reducing friction between customers and internal teams.',
            'Integrated notification behaviour to keep users informed as updates were made across the underlying platform.',
        ],
        stack: 'React, TypeScript, MobX, .NET, Azure',
        focusTags: ['Customer Experience', 'Responsive UI', 'Workflow Integration', 'Notifications', 'Full-Stack Delivery'],
    },
    {
        title: 'Spreadsheet Validation & Data Import Tooling',
        summary:
            'A flexible validation and import workflow for onboarding and processing inconsistent spreadsheet-based data, supporting complex client data and operational processes.',
        impactBullets: [
            'Designed a rule-driven validation system to replace hard-coded logic, allowing validation behaviour to evolve without requiring code changes.',
            'Built detailed error reporting that identified failing rules and source cells, improving usability and reducing time spent diagnosing issues.',
            'Supported onboarding workflows involving large, inconsistent datasets and complex spreadsheet structures.',
        ],
        stack: 'React, TypeScript, MobX, .NET, SQL Server, Azure',
        focusTags: ['Data Imports', 'Validation Pipelines', 'Operational Tooling', 'Maintainability', 'Data Integrity'],
    },
];

export default commercialWork;