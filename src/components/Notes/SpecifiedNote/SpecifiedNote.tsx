import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState } from '../../../redux/redux_store'
import { getSpecifiedNote } from '../../../redux/notesReducer'
import c from './SpecifiedNote.module.scss'

type Props = {
    id: string
}

export const SpecifiedNote: FC<Props> = props => {
    const dispatch = useDispatch()
    const currentNote = useSelector((state: GlobalState) => state.notesReducer.currentNote)
    useEffect(() => {
        dispatch(getSpecifiedNote(props.id))
    }, [])

    return (
        <>
            <ul className={c.card}>
                <li className={c.title}>{ currentNote?.title }</li>
                <li className={c.descr}>{ currentNote?.descr }</li>
                <li className={c.date}>{ currentNote?.date }</li>
                <li className={c.id}>{ currentNote?.id }</li>
            </ul>
        </>
    )
}