import React, {useState, useEffect} from 'react'
import styles from './select.module.css'

const Select = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [colors, setColors] = useState([])
    useEffect(()=>{
        setColors(options)
    },[])
    const clearOptions = () =>{
        onChange(undefined)
    }

    const selectOption = (option) =>{
       if(option !== value ) onChange(option)
    }

    const isOptionSelected = (option) => {
        return option  === value 

    }
 
    useEffect(()=>{
        if(isOpen) setHighlightedIndex(0)
    },[isOpen])

    // useEffect(()=>{
    //     console.log(value)
    // },[onChange])
  return (
    <div className='mt-5'>
        <h6 className='mb-5'>Multi-Select React Component</h6>
        <div 
            onClick = {() => setIsOpen(prev=> !prev)} 
            className={styles.container} 
            tabIndex={0}
            onBlur = {()=> setIsOpen(false)} 
            >
            <span className={styles.value}>Select summer colours ...</span>
            <button 
                className={styles["clear-btn"]}
                onClick = { e => {
                    e.stopPropagation()
                    clearOptions()
                }}
                >&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>

            <div className={styles.options}></div>
            <ul className={`${styles.options} ${ isOpen ? styles.show : ""}`}>
                {
                    colors.map((option, index) => (
                        <li 
                            onClick={e => {
                                e.stopPropagation()
                                selectOption(option)
                                setIsOpen(false)
                            }}
                            onMouseEnter = {() => setHighlightedIndex(index)}
                            className={`${styles.option} 
                            ${isOptionSelected(option) ?  styles.selected : "" }
                            ${index === highlightedIndex ?  styles.highlighted : ""}
                            `} 
                            
                            key={index}>
                            <span 
                            className='p-3 mb-1'
                            style = {{
                            "backgroundColor":`${option.value}`,
                            "minWidth":"100%",
                            "display":"inline-flex",
                            }}
                            >
                            {option.label}</span>
                        </li>
                    ))
                }
            </ul>
        </div>  
    </div>
  )
}

export default Select
