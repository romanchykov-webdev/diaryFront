import { useLayoutEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeAction } from "../../components/themeToggle/sliceToggleTheme";

// Кастомный хук: Название начинается с "use"
export const useToggleTheme = () => {
    // Получаем функцию dispatch из Redux для отправки действий
    const dispatch = useDispatch();

    // Получаем текущее значение темы из состояния Redux
    const theme = useSelector((state) => state.theme.themeMode);
    // console.log('theme',theme)
    // Функция для изменения темы
    const setTheme = (newTheme) => {
        // Отправляем действие для изменения темы в Redux
        dispatch(toggleThemeAction(newTheme));
    };

    // Используем useLayoutEffect для выполнения побочных эффектов, связанных с изменением темы
    useLayoutEffect(() => {
        // Устанавливаем атрибут 'data-theme' в элементе <html> для применения новой темы
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); // Зависимостью является 'theme', эффект будет срабатывать при её изменении
    // useEffect(() => {
    //
    //    if( theme==='tomato'){
    //        console.log('theme', theme)
    //        // document.documentElement.style.backgroundColor = '#ff6347 !important';
    //        document.body.setAttribute('data-theme', theme);
    //    }else{
    //        document.body.removeAttribute('data-theme', theme);
    //    }
    // }, [theme]);
    // Возвращаем текущую тему и функцию для её изменения
    return { theme, setTheme };
};
