import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import styles from './index.module.css';


const Board = () => {
    const canvasRef = useRef(null);
    const {activeMenuItem, actionMenuItem} = useSelector((state) => state.menu)
    const {color, size} = useSelector((state) => state.toolbar[activeMenuItem])

    useEffect(() => {
        if(!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, [])
    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default Board;