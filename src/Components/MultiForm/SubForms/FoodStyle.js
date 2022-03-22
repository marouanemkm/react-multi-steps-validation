import './SubForm.css';
import { useRef } from 'react';

export default function FoodStyle(props) {
    
    const allCheckboxes = useRef([]);

    const preventFunc = e => {
        e.preventDefault();
        const styleData = {
            foodStyle: []
        };
        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) styleData.foodStyle.push(checkbox.value);
        });
        props.modifyIndex(4, styleData);
    }

    const addCheck = el => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el);
        }
    }

    const handleReturn = () => props.modifyIndex(2);

    return (
        <form className='checkbox-form' onSubmit={preventFunc}>
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiples</span>

            <label htmlFor="french">Française</label>
            <input ref={addCheck} type="checkbox" id="french" value='french' />

            <label htmlFor="moroccan">Marocaine</label>
            <input ref={addCheck} type="checkbox" id="moroccan" value='moroccan' />

            <label htmlFor="japanese">Japonaise</label>
            <input ref={addCheck} type="checkbox" id="japanese" value='japanese' />

            <label htmlFor="indian">Indienne</label>
            <input ref={addCheck} type="checkbox" id="indian" value='indian' />

            <label htmlFor="italian">italienne</label>
            <input ref={addCheck} type="checkbox" id="italian" value='italian' />

            <label htmlFor="chinese">Chinoise</label>
            <input ref={addCheck} type="checkbox" id="chinese" value='chinese' />

            <div className="container-nav-btns">
                <button onClick={handleReturn} type="button" className='prev'>Précédent</button>
                <button>Valider</button>
            </div>


        </form>
    );
}