import classNames from 'classnames'
import s from './JsToTs.module.css'

export default function JsToTs() {
    return (
        <div className={s.container}>
            <div className={classNames(s.box, s.js)}><span className={s.logo}>JS</span></div>
            <div className={classNames(s.box, s.ts)}><span className={s.logo}>TS</span></div>
            <div className={classNames(s.box, s.ai)}><span>AI</span></div>
        </div>
    )
}