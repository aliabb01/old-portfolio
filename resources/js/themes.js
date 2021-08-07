const themes =  {
    light: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgb(30, 144, 255)',       // dodgerblue
        secondaryLight: 'rgba(30, 144, 255, 0.4)', // simple tag color
        secondaryGradient: 'linear-gradient(318deg, rgba(30,144,255,1) 0%, rgba(30,189,255,1) 100%)',
        text: 'rgb(10,10,10)',
        textLight: 'rgba(10, 10, 10, 0.5)',
        placeholder: 'rgb(240, 240, 240)',
        tag: 'gray',
    },
    dark: {
        //#082032
        primary: '#1F1926',
        secondary: 'rgb(25, 91, 219)',
        secondaryLight: 'rgba(25, 91, 219, 0.4)', // facebook dark mode button color
        secondaryGradient: 'linear-gradient(318deg, rgba(25,91,219,1) 0%, rgba(25,136,219,1) 100%)',
        text: 'rgb(230,230,230)',
        textLight: 'rgba(230 ,230, 230, 0.5)',
        placeholder: 'rgb(72, 66, 79)',
        tag: 'rgba(25, 91, 219, 0.4)',
    }
}

export default themes