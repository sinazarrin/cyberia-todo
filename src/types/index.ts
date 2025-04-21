export interface Task {
    id: number;
    text: string;
    completed: boolean;
    category: 'personal' | 'work';
}
