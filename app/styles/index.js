import { StyleSheet } from 'react-native';

export const PRIMARY = '#6C2E96';
export const SECONDARY = '#5D28F5';
export const PRIMARY_BACKGROUND = '#FBFCFD';
export const SECONDARY_BACKGROUND = '#DEDBE2';
export const PRIMARY_TEXT = '#fff';
export const PRIMARY_COLORS = {
    PRIMARY_COLOR: 'WHITE',
    PRIMARY_LINKS: {
        PRESSED: '#40c7ca',
        DEFAULT: '#00b5b8',
        HOVER: '#00a5a8'
    },
    SECONDARY_LINKS: {
        PRESSED: '#ffa87d',
        TILES: '#ff9966',
        HOVER: '#fa8e57'
    },
    TERTIARY_LINKS: {
        PRESSED: '#ff75e8',
        DEFAULT: '#ff637b',
        HOVER: '#f25e75'
    },
    TITLES: {
        MAIN: '#1b2942',
        HEADER: '#404e67',
        SECONDARY: '#626e82',
        DEFAULT: '#fff'
    },
    SUBTITLES: {
        SECONDARY_TEXT: '#7D899e',
        ADDITIONAL_TEXT: '#98a4b8',
        BRAND_BUTTONS: '#babfc7'
    }
}
export const BACKGROUNDS = {
    DARK: {
        PRIMARY: '#132442',
        SECONDARY: '#16294a',
        TERTIARY: '#1c3259'
    },
    LIGHT: {
        WHITE: '#ffffff',
        PRIMARY: '#f5f7fa',
        SECONDARY: '#f8fafc',
        TERTIARY: '#fafbfc'
    },
    BORDER: '#e4e7ed'

}
export default styles = StyleSheet.create({
    backgroundPrimary: {
        backgroundColor: BACKGROUNDS.LIGHT.PRIMARY
    },
    backgroundWhite: {
        backgroundColor: 'white'
    },
    fullFlex: {
        flex: 1
    },
    backgroundSecondary: {
        backgroundColor: PRIMARY_BACKGROUND
    },
    colorSecondary: {
        color: SECONDARY
    },
    colorPrimary: {
        color: PRIMARY
    },
    textDisable: {
        color: '#e4e4e4'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: SECONDARY_BACKGROUND
    },
    buttonPrimary: {
        backgroundColor: PRIMARY_COLORS.PRIMARY_LINKS.DEFAULT,
        borderColor: PRIMARY_COLORS.PRIMARY_LINKS.HOVER,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    textInput: {
        fontSize: 30,
        padding:0,
        margin:0
    },
    textInputWrapper: {
        borderColor: BACKGROUNDS.BORDER,
        borderBottomWidth: 1
    },
    marginVertical: {
        marginVertical: 10
    },
    marginVerticalSmall: {
        marginVertical: 5
    },
    marginTopSmall: {
        marginVertical: 2
    },
    marginHorizontal: {
        marginHorizontal: 10
    },
    paddingHorizontal: {
        paddingHorizontal: 10
    },
    iconPrimary: {
        fontSize: 18
    },
    iconSecondary: {
        fontSize: 15
    },
    paddingVertical: {
        paddingVertical: 10
    },
    logoTitleLarge: {
        fontSize: 25
    },
    border: {
        borderColor: BACKGROUNDS.BORDER
    },
    font: {
        fontFamily: 'ProximaNovaRegular'
    },
    title: {
        fontSize: 13
    }
    ,
    header: {
        fontSize: 15
    },
    subtitle: {
        fontSize: 12
    },
    subView:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        backgroundColor:BACKGROUNDS.LIGHT.TERTIARY,
        borderTopWidth:2,
        borderColor:BACKGROUNDS.BORDER,
        height:'100%',
        opacity:0.999
    },
    paddingHorizontal:{
        paddingHorizontal:5,
    },
    viewCenter:{
        justifyContent:'center',
        alignItems:'center'
    },
    alignCenter:{
        alignItems:'center'
    },
    justifyCenter:{
        justifyContent:'center'
    },
    alignEnd:{
        alignItems:'flex-end'
    },
    justifyEnd:{
        justifyContent:'flex-end'
    },
    row:{
        flexDirection:'row'
    },
    col:{
        flexDirection:'column'
    }

});