import './SubForm.css';
import { useState } from 'react';

export default function HateLove(props) {

    const [formData, setFormData] = useState({
        prefs: {
            love: '',
            hate: ''
        }
    })
    
    const preventFunc = e => {
        e.preventDefault();
        props.modifyIndex(6, formData)
    }
    
    const handleReturn = () => {
        props.modifyIndex(4);
    }

    const handleTextArea = (e, pref) => {
        if (pref === 'love') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    love: e.target.value
                }
            });
        } else if (pref === 'hate') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    hate: e.target.value
                }
            });
        }
    }

    return (
        <form className='preferences' onSubmit={preventFunc}>
            <p>Parle nous des aliments que tu préfères et que tu détestes !</p>

            <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule :</label>
            <textarea id="prefered" placeholder="Un ou plusieurs éléments que tu aimes beaucoup !" onChange={(e) => handleTextArea(e, 'love')} cols="85" rows="5"></textarea>

            <label htmlFor="hated">Les aliments que tu n'aimes pas, séparés par une virgule :</label>
            <textarea id="hated" placeholder="Un ou plusieurs éléments que tu n'aimes pas !" onChange={(e) => handleTextArea(e, 'hate')} cols="85" rows="5"></textarea>

            <div className="container-nav-btns">
                <button type='button' onClick={handleReturn} className='prev'>Précédent</button>
                <button>Valider</button>
            </div>
        </form>
    );
}