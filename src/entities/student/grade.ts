export type GradeType = {
    type: 'default' | 'action' | 'quarter',
    subject: string,
    grade: string | number,
    date: string,
    subtext?: string | '',
    actions?: {
        delete: boolean,
        change: boolean
    }
}