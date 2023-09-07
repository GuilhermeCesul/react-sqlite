import { useState } from "react"
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { addContact } from "../../db/Database";

type Props = {
    onRefreshList: () => void
}

export function AddContacts(props: Props) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    
    function handleAddContact(){

        addContact(name, phone)
        setName('')
        setPhone('')
        props.onRefreshList();
    }

    return(

        <View>
            <Text>Nome</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text>Telefone</Text>
            <TextInput  value={phone} onChangeText={setPhone} />

            <Button title="Adicionar Contato" onPress={handleAddContact} />
        </View>
    )
}
