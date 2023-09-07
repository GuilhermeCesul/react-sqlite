import { useEffect, useState } from "react"
import { Button, FlatList, Text, ToastAndroid, View } from "react-native";
import { deleteContact, getContacts } from "../../db/Database";
import { styles } from "./styles";

export function ListContacts(){

    const [contacts, setContacts] = useState<{_id: number, name: string, phone: string}[]>([])
    
    const refreshList = async() => {
        
        const data = await getContacts()
        setContacts(data);
    }

    const hadleDeleteContact = async (id: number) => {
        try {
            await deleteContact(id);
            ToastAndroid.show("Removido com sucesso", ToastAndroid.SHORT)
            refreshList();
        } catch (error: any) {
            console.error("Erro ao excluir contato: " + error)
        }
    }
    
    useEffect(() => {
        refreshList()
    },[])

    return(
        <View style={styles.container} >
            <Text style={styles.title} >Lista de Contatos</Text>

            <FlatList
                data={contacts}
                keyExtractor={(contact) => contact._id.toString()}
                renderItem={({item}) => (
                    <View style={styles.contactItem} >
                        <Text style={styles.contactName} >{item.name}</Text>
                        <Text style={styles.contactPhone} >{item.phone}</Text>
                        <Button title="Excluir" onPress={() => hadleDeleteContact(item._id)} color="#FF3358" />
                    </View>
                )}
            />
        </View>
    )
}
