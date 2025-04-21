import { Book1, ClipboardText, ClipboardTick } from "iconsax-reactjs";

export const filterButtons: { id: number; state: 'all' | 'active' | 'completed'; icon: JSX.Element; }[] = [
    {
        id: 1,
        state: 'all',
        icon: (<ClipboardText size="25" color="#E54D6A" variant="Bold" />)
    },
    {
        id: 2,
        state: 'active',
        icon: (<Book1 size="25" color="#FF8A65" variant="Bold" />)
    },
    {
        id: 3,
        state: 'completed',
        icon: (<ClipboardTick size="25" color="#14BB84" variant="Bold" />)
    }
]

export const filterCategory: { id: number; state: 'personal' | 'work'; selected: boolean }[] = [
    {
        id: 1,
        state: 'personal',
        selected: true,
    },
    {
        id: 2,
        state: 'work',
        selected: false
    }
]