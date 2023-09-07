import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contactItem: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    contactName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    contactPhone: {
        fontSize: 14,
    },
});