import { Link } from 'lucide-react';
import s from './LinkedHeading.module.css'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export function LinkedHeading({ children }: Props) {
    // @ts-expect-error 
    const id = children?.props?.children?.toString().replaceAll(' ', '-').toLowerCase()
    return (
        <div className={s.heading}>
            <div id={id} className={s.content}>
                {children} <a className={s.link} href={`#${id}`}><Link size="0.75rem" /></a>
            </div>
        </div>
    );
}
