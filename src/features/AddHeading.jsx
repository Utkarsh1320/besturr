import { PlusCircleTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { useState, useEffect, useRef } from 'react';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer'
    },
    icon: {
        fontSize: '1.5em'
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: '2em',
        '::placeholder': {
            color: '#ffffff'
        },
        ':focus': {
            outline: 'none',
            boxShadow: 'none'
        }
    }
};

const AddHeading = () => {
    const [headings, setHeadings] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [editIndex]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (inputValue.trim()) {
                if (editIndex !== null) {
                    const updatedHeadings = [...headings];
                    updatedHeadings[editIndex] = inputValue;
                    setHeadings(updatedHeadings);
                    setEditIndex(null);
                } else {
                    setHeadings([...headings, inputValue]);
                }
            } else if (editIndex !== null) {
                const updatedHeadings = [...headings];
                updatedHeadings.splice(editIndex, 1);
                setHeadings(updatedHeadings);
                setEditIndex(null);
            }
            setInputValue('');
        }
    };

    const handleEdit = (index) => {
        setInputValue(headings[index]);
        setEditIndex(index);
    };

    const inputStyle = {
        ...styles.input,
        outline: 'none',
        boxShadow: 'none',

    };

    return (
        <div>
            {headings.map((heading, index) => (
                <div key={index} style={styles.container}>
                    {editIndex === index && (
                        <PlusCircleTwoTone
                            twoToneColor={['#ffffff', '#1f1f1f']}
                            style={{ ...styles.icon }}
                        />
                    )}
                    {editIndex === index ? (
                        <Input
                            style={inputStyle}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            ref={inputRef}
                        />
                    ) : (
                        <Input
                            style={styles.input}
                            value={heading}
                            readOnly
                            onClick={() => handleEdit(index)}
                        />
                    )}
                </div>
            ))}
            {editIndex === null && (
                <div style={styles.container}>
                    <PlusCircleTwoTone
                        twoToneColor={['#ffffff', '#1f1f1f']}
                        style={{ ...styles.icon, marginRight: '2em' }}
                    />
                    <Input
                        style={inputStyle}
                        placeholder="Add Heading"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        ref={inputRef}
                    />
                </div>
            )}
        </div>
    );
};

export default AddHeading;