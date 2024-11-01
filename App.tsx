/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/config';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function App() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'localizacaoteste'));
        const documentos = querySnapshot.docs.map((doc) => doc.data());
        setDados(documentos);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {dados.map((item, index) => (
        <View key={index}>
          <Text>Nome: {item.nome}</Text>
          <Text>Longitude: {item.longetude}</Text>
          <Text>Latitude: {item.latitude}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

//ATUALIZA A TELA COM AS INFORMAÇÕES CONFORME FOREM SENDO ADICIONADAS NO BANCO DE DADOS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/config';
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

export default function App() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'localizacaoteste'), (querySnapshot) => {
      const documentos = querySnapshot.docs.map((doc) => doc.data());
      setDados(documentos);
    }, (error) => {
      console.error("Erro ao escutar documentos:", error);
    });

    // Retorna uma função de limpeza para cancelar a assinatura quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {dados.map((item, index) => (
        <View key={index}>
          <Text>Nome: {item.nome}</Text>
          <Text>Longitude: {item.longetude}</Text>
          <Text>Latitude: {item.latitude}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
