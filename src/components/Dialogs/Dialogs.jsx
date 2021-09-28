import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems  + " " + s.active}>
                <div className={s.dialog}>
                    Лакан
                </div>
                <div className={s.dialog}>
                    Дейкстра
                </div>
                <div className={s.dialog}>
                    Юнг
                </div>
                <div className={s.dialog}>
                    Бернерс-Ли
                </div>
                <div className={s.dialog}>
                    Vinnicot
                </div>
                <div className={s.dialog}>
                    Тьюринг
                </div>
            </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Good</div>
            <div className={s.message}>Yo</div>
        </div>
        </div>
    )
}

export default Dialogs;