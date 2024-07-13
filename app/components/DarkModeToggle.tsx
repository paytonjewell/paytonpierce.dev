"use client"
import { SetStateAction, useCallback, useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
    }, []);

    const onChangeTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }

    if (!mounted) return null;

    return (
        <label className="btn btn-ghost swap swap-rotate">
            <input type="checkbox" className="theme-controller" onChange={onChangeTheme} checked={theme == 'dark' ? true : false} />
            <SunIcon className='swap-on' />
            <MoonIcon className='swap-off' />
        </label>

    )
}

export default DarkModeToggle