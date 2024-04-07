import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: `100%`,
        marginTop: 50,
        flex: 1,
    },
    curvedContainer: {
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        width: 393,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    joinModalContainer: {
        flex: 1,
        justifyContent: 'flex-start', // Align to the top
        backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    },
    joinModal: {
        backgroundColor: 'white',
        width: '100%', // Screen width
        height: '33%', // 1/3rd of the screen height
        borderBottomLeftRadius: 20, // Curved border
        borderBottomRightRadius: 20,
        padding: 20,
        paddingTop: 40, // Adjust as needed for content
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    fakeBottomNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1A1A1A',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

export default styles;