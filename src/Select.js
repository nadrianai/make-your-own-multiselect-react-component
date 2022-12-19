import React, {useState, useEffect} from 'react'
import styles from './select.module.css'

const Select = ({multiple, options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [colors, setColors] = useState([])
    useEffect(()=>{
        setColors(options)
    },[])
    const clearOptions = () =>{
        multiple ? onChange([]) : onChange(undefined)
    }

    const selectOption = (option) =>{
        if(multiple){
            if(value.includes(option)){
                onChange(value.filter(o => o !== option))
            }else{
                onChange([...value, option])
            }
        }else{
            if(option !== value ) onChange(option)
        }
    }

    const isOptionSelected = (option) => {
        return multiple? value.includes(option) : option  === value 

    }
 
    useEffect(()=>{
        if(isOpen) setHighlightedIndex(0)
    },[isOpen])

    // useEffect(()=>{
    //     console.log(value)
    // },[onChange])
  return (
    <div className='mt-5'>
        
        <div 
            onClick = {() => setIsOpen(prev=> !prev)} 
            className={styles.container} 
            tabIndex={0}
            onBlur = {()=> setIsOpen(false)} 
            >
             <span className={styles.value}>
                {multiple
                ? value.map(v => (
                    <button
                        style={{
                           "backgroundColor":`${v.value}` 
                        }}
                        key={v.value}
                        onClick={e => {
                        e.stopPropagation()
                        selectOption(v)
                        }}
                        className={styles["option-badge"]}
                    >
                        {v.label}
                        <span className={styles["remove-btn"]}>&times;</span>
                    </button>
                    ))
                : value?.label}
            </span>
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
                                // setIsOpen(false)
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
