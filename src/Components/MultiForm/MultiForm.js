import './MultiForm.css';
import React, { useState } from 'react';

export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: '',
        foodStyle: [],
        allergies: [],
        prefs: {}
    });

  return (
    <div>

    </div>
  )
}
