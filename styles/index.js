import { StyleSheet } from 'react-native';

const colors = {
    dropShadow: "#000",
    formFieldBorder: "#d2d2d2",
    formLabelColor: "#7a7a7a",
    formInputColor: "#3b3b3b"
};


const commonStyles = StyleSheet.create({
    dropShadow: {
        shadowColor: colors.dropShadow,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    formField: {
        borderColor: colors.formFieldBorder,
        borderWidth: 1,
        width: '100%',
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 7
    },
    formInput: {
        color: colors.formInputColor,
    },
    formLabel: {
        width: '100%',
        fontSize: 12,
        color: colors.formLabelColor,
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    rounded: {
        borderRadius: 30,
    }
});
export default commonStyles

