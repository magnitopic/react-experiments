import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <lable>Task</lable>
                <input
                    type='text'
                    placeholder='Add task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <lable>Day & Time</lable>
                <input
                    type='text'
                    placeholder='Add date & time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>

            <div className='form-control form-control-check'>
                <lable>Set reminder</lable>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
